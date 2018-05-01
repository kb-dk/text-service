require 'ese_oai_format'
require 'oai_document_wrapper'

class OaiProvider < ::OAI::Provider::Base
  repository_name 'The Royal Danish Library text archive'
  repository_url  'http://www.adl.dk'
  record_prefix ''
  admin_email 'root@localhost'   # String or Array
  register_format(EseOAIFormat.instance)
  def initialize(search_service, config)
    self.class.model = OAIDocumentWrapper.new(search_service, config)
  end
end