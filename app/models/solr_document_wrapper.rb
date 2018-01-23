class SolrDocumentWrapper <
 attr_reader :timestamp

 def initialize(search_service,config = {})
   @timestamp = 'timestamp'
   @search_service = search_service
   @config = config
 end

 def sets

 end

  def earliest
    (deprecated_response,records) = @search_service.search_result do |builder|
      builder = solr_params.merge!({fl: timestamp_field, sort: "#{timestamp_field} asc", rows: 1})
    end
    records.first.timestamp
  end

 def latest
   (deprecated_response,records) = @search_service.search_result do |builder|
     builder = solr_params.merge!({fl: timestamp_field, sort: "#{timestamp_field} desc", rows: 1})
   end
   records.first.timestamp
 end

 def find(selector, options={})
   return next_set(options[:resumption_token]) if options[:resumption_token]

   if :all == selector
     (deprecated_response, records) = @search_service.search_result do |builder|
       builder = solr_params.merge!({:sort => timestamp_field + ' asc', :rows => @limit, :from => options[:from].utc.iso8601, :until => options[:until].utc.iso8601})
     end

     if @limit && response.total > @limit
       return select_partial(OAI::Provider::ResumptionToken.new(options.merge({:last => 0})))
     end
   else
     response = @search_service.fetch selector.split('/', 2).last
   end
   records
 end

 def select_partial token
   (deprecated_response, records) = @search_service.search_result do |builder|
     builder = solr_params.merge!({:sort => timestamp_field + ' asc', :rows => @limit, :from => options[:from].utc.iso8601, :until => options[:until].utc.iso8601,:page => token.last/@limit + 1})
   end

   raise ::OAI::ResumptionTokenException.new unless records

   if @limit && response.total > token.last + @limit
     OAI::Provider::PartialResult.new(records, token.next(token.last+@limit))
   else
     records
   end
 end

 def next_set(token_string)
   raise ::OAI::ResumptionTokenException.new unless @limit

   token = OAI::Provider::ResumptionToken.parse(token_string)
   select_partial(token)
 end
  private

  def timestamp_field
    @config['timestamp_field']
  end

  def solr_params(set = nil)
    @config['solr_params']
  end
end