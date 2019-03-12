require 'test_helper'

class SnippetControllerTest < ActionDispatch::IntegrationTest
  test "should get comment" do
    get snippet_comment_url
    assert_response :success
  end

end
