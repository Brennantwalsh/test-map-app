class JourneysController < ApplicationController
  before_action :authenticate_user!
  def index
    @journeys = Journey.all 
  end

  def new
  end

  def create
    @journey = Journey.create(
      name: params[:name],
      description: params[:description],
      dm_id: current_user.id 
    )
    flash[:success] = "With a step out the door"
    redirect_to "/journeys/#{@journey.id}"
  end

  def show
    @journey = Journey.find(params[:id])
  end

  def edit
    @journey = Journey.find(params[:id])
  end

  def update
    @journey = Journey.find(params[:id])
    @journey.update(
      name: params[:name],
      description: params[:description]
    )
    flash[:success] = "Oh... that is where we are going"
    redirect_to "/journeys/#{@journey.id}"
  end

  def destroy
    @journey = Journey.find(params[:id])
    @journey.destroy

    flash[:success] = "That journey is lost now"
    redirect_to "/users/#{current_user.id}"
  end
end
