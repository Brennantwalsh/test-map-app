class PlacementsController < ApplicationController
  layout "application_variant.html.erb"
  def index
    @placements = Placement.all
  end

  def edit
    @images = Tile.all
    @placement = Placement.find(params[:id])
  end

  def update
    @placement = Placement.find(params[:id])
    @placement.update(tile_id: params[:tile_id])
    redirect_to "/maps/#{@placement.map_id}"
  end
end
