class Listings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :host_id, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.float :price, null: false

      t.timestamps
    end

    add_index :listings, :name, unique: true
    add_index :listings, :host_id
  end
end
