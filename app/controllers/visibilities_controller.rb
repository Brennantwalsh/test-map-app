class VisibilitiesController < ApplicationController
  def create
    @visibility = Visibility.create(participation_id: params[:participation_id],
                                    placement_id: params[:placement_id])

    look = Placement.find(params[:placement_id])
    flash[:success] = "The path expands"
    redirect_to "/maps/#{look.map_id}"
  end
end
