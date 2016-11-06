class MapsController < ApplicationController
  before_action :authenticate_user!
  def create
    @map = Map.create(
      name: params[:name],
      description: params[:description],
      row_number: params[:row_number],
      column_number: params[:column_number],
      creator_id: current_user.id,
      journey_id: params[:journey_id]
    )

     @map.row_number.times do 
       current_row = 1 
       current_column = 1 
       @map.column_number.times do 
         Placement.create(map_id: @map.id,
                          tile_id: 1,
                          column: current_column,
                          row: current_row)
          
         current_column += 1
         current_row += 1 
       end 
       current_column = 1 
     end
    redirect_to "/maps/#{@map.id}"
  end

  def show
    @map = Map.find(params[:id])
    @tiles = Tile.all
    @placements = @map.placements.order(:row, :id)
    @participations = Participation.where(journey_id: @map.journey_id).find_by(user_id: current_user.id)
    if @participations
      @visibility = Visibility.where(participation_id: @participations.id)
    end
  end

  def edit
    @map = Map.find(params[:id])
  end

  def update
    @map = Map.find(params[:id])
    @map.update(
      name: params[:name],
      description: params[:description]
    )

    flash[:success] = 'Ahh so that is the right way to go'
    redirect_to "/maps/#{@map.id}"
  end

  def destroy
    @map = Map.find(params[:id])
    @map.destroy

    flash[:success] = 'Sad. Already looted'
    redirect_to '/'
  end
end
