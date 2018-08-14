class Api::V1::PostsController < ApplicationController

  def index
    @data = Post.all.order(created_at: :desc)
  end
end
