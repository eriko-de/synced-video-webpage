require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get player" do
    get pages_player_url
    assert_response :success
  end

end
