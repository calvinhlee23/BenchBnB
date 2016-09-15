class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true
  validates :lat, uniqueness: {scope: :lng,
    messeage: 'the place has been benched already'}

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
      a = Bench.where("lat < ?", bounds["NorthEast"]["lat"])
             .where("lat > ?", bounds["SouthWest"]["lat"])
             .where("lng > ?", bounds["SouthWest"]["lng"])
             .where("lng < ?", bounds["NorthEast"]["lng"])
  end
end
