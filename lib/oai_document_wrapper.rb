class OAIDocumentWrapper < ::OAI::Provider::Model
 attr_reader :timestamp

 def initialize(search_service,config = {})
   @timestamp = 'timestamp'
   @search_service = search_service
   @config = config
   @limit = config[:limit]
 end

 def sets
    @config[:sets].map{|s| OpenStruct.new s}
 end

  def earliest
    (response,records) = @search_service.search_results do |builder|
      builder = oai_solr_params.merge({fl: timestamp_field, sort: "#{timestamp_field} asc", rows: 1})
    end
    records.first["timestamp"]
  end

 def latest
   (response,records) = @search_service.search_results do |builder|
     builder = oai_solr_params.merge({fl: timestamp_field, sort: "#{timestamp_field} desc", rows: 1})
   end
   records.first["timestamp"]
 end

 def find(selector, options={})
   return next_set(options[:resumption_token]) if options[:resumption_token]

   if :all == selector
     (response, records) = @search_service.search_results do |builder|
       builder = oai_solr_params.merge({:sort => timestamp_field + ' asc', :rows => @limit, :from => options[:from].utc.iso8601, :until => options[:until].utc.iso8601})
     end

     if @limit && response.total_count > @limit
       return select_partial(OAI::Provider::ResumptionToken.new(options.merge({:last => 0})))
     end
   else
     response = @search_service.fetch selector.split('/', 2).last
   end
   records
 end

 def select_partial token
   (response, records) = @search_service.search_results do |builder|
     builder = oai_solr_params.merge({:sort => timestamp_field + ' asc', :rows => @limit, :from => token.from.utc.iso8601, :until => token.until.utc.iso8601, :page => token.last/@limit + 1})
   end

   raise ::OAI::ResumptionTokenException.new unless records

   if @limit && response.total_count > token.last + @limit
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

  def timestamp_field
    @config[:timestamp_field]
  end



 private
  def oai_solr_params(set = nil)
    @config[:default_solr_params]
  end
end