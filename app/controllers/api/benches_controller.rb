class Api::BenchesController < ApplicationController
  def index
    bounds = JSON.parse(params[:bounds])
    @benches = bounds.keys[0].nil? ? Bench.all : Bench.in_bounds(bounds)
    render :index
  end

  def create

  end
end
