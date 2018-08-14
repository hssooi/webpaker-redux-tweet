require 'test_helper'

class SoiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get soi_index_url
    assert_response :success
  end

end
