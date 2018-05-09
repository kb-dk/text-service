require 'builder'

# This is an extended version for the blacklight Dublin Core extenstion
# Extended with Europeana fields

module Europeana


  def self.extended(document)
    # Register our exportable formats
    ::Europeana.register_export_formats( document )
  end

  def self.register_export_formats(document)
    document.will_export_as(:xml)
    document.will_export_as(:dc_xml, "text/xml")
    document.will_export_as(:oai_dc_xml, "text/xml")
  end

  def dublin_core_field_mapping
    {
      :creator => 'author_name_ssim',
      :date => 'date_published_ssi',
      :publisher=> 'publisher_tesim',
      :title => 'work_title_tesim',
    }
  end

  def dublin_core_default_field_values
    {
        :language => ['dan'],
        :rights => ['Er muligvis beskyttet af loven om ophavsret'],
        :type => ['Text'],
    }

  end

  def europeana_field_mapping
    []
  end

  def europeana_default_field_values
    {
        :ese_dataProvider => ['The Royal Library: The National Library of Denmark and Copenhagen University Library'],
        :ese_provider => ['Arkiv for Dansk Litteratur'],
        :ese_rights => ['http://creativecommons.org/licenses/by-nc-nd/4.0/'],
        :ese_type => ['TEXT']
    }
  end

  def to_oai_dc
    xml = Builder::XmlMarkup.new
    xml.tag!("oai_dc:dc",
             'xmlns:oai_dc' => "http://www.openarchives.org/OAI/2.0/oai_dc/",
             'xmlns:dc' => "http://purl.org/dc/elements/1.1/",
             'xmlns:xsi' => "http://www.w3.org/2001/XMLSchema-instance",
             'xsi:schemaLocation' => %{http://www.openarchives.org/OAI/2.0/oai_dc/ http://www.openarchives.org/OAI/2.0/oai_dc.xsd}) do
      add_dc_data(xml)
    end
    xml.target!
  end

  def to_ese
    xml = Builder::XmlMarkup.new
    xml.tag!("record",
             "xmlns:europeana" => "http://www.europeana.eu/schemas/ese/",
             'xmlns:oai_dc' => "http://www.openarchives.org/OAI/2.0/oai_dc/",
             'xmlns:dc' => "http://purl.org/dc/elements/1.1/",
             'xmlns:xsi' => "http://www.w3.org/2001/XMLSchema-instance",
             'xmlns:dcterms' => "http://purl.org/dc/terms/",
             'xmlns' => "http://www.europeana.eu/schemas/ese/",
             'xsi:schemaLocation' => %{http://www.openarchives.org/OAI/2.0/oai_dc/ http://www.openarchives.org/OAI/2.0/oai_dc.xsd http://www.europeana.eu/schemas/ese/}) do
      add_dc_data(xml)
      add_ese_data(xml)
    end
    xml.target!
  end

  private

  def add_dc_data(xml)
    values = {}
    dublin_core_field_mapping.each do |field,solr_field|
      values[field] = Array.wrap(fetch(solr_field)) if has?(solr_field)
    end

    values.reverse_merge!(dublin_core_default_field_values)
    add_xml_values(xml,values)

    xml.tag! "dc:identifier",  "xsi:type" => "dcterms:URI" do xml.text!(get_external_url) end
  end

  def add_ese_data(xml)
    values = {}
    europeana_field_mapping.each do |field,solr_field|
      values[field] = Array.wrap(fetch(solr_field)) if has?(solr_field)
    end

    values.reverse_merge!(europeana_default_field_values)
    add_xml_values(xml,values)

    xml.tag! "europeana:isShownAt", get_external_url
  end

  def add_xml_values(xml,values)
    values.each_key do |field|
      values[field].each do |val|
        xml.tag! "dc:#{field}", val
      end
    end
  end



  def get_external_url
    "#{Rails.application.config_for(:text_service)['external_prefix']}#{Rails.application.routes.url_helpers.solr_document_path(:id => self.id)}"
  end
end
