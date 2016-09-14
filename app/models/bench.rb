class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true
  validates :lat, uniqueness: {scope: :lng,
    messeage: 'the place has been benched already'}
end
