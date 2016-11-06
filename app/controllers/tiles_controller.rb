class TilesController < ApplicationController
  before_action :authenticate_user!
  def index
    @tiles = Tile.all.order("path")
    sort_attribute = params[:sort]

    if sort_attribute
      @tiles = Tile.where("path ILIKE ?", "%#{sort_attribute}%")
    end  
  end

  def show
    @tile = Tile.find(params[:id])
  end
end
