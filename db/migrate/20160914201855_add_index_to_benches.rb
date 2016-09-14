class AddIndexToBenches < ActiveRecord::Migration
  add_index :benches, [:lat, :lng], unique: true
end
