# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'open-uri'

User.destroy_all
Listing.destroy_all


# -------------------------------- Host Users

anna = User.create(email: "abc123@gmail.com", 
                    first_name: "Anna", 
                    last_name: "Smith", 
                    password: "tommy123")

bob = User.create(email: "def123@gmail.com", 
                    first_name: "Bob", 
                    last_name: "Cargo", 
                    password: "tommy123")

chris = User.create(email: "hij123@gmail.com", 
                    first_name: "Chris", 
                    last_name: "Yu", 
                    password: "tommy123")

dave = User.create(email: "klm123@gmail.com", 
                    first_name: "Dave", 
                    last_name: "Kim", 
                    password: "tommy123")


# -------------------------------- Guest Users

eric = User.create(email: "nop123@gmail.com", 
                    first_name: "Eric", 
                    last_name: "Choi", 
                    password: "tommy123")

frank = User.create(email: "qrs123@gmail.com", 
                    first_name: "Frank", 
                    last_name: "Lee", 
                    password: "tommy123")

grace = User.create(email: "tuv123@gmail.com", 
                    first_name: "Grace", 
                    last_name: "Park", 
                    password: "tommy123")

harry = User.create(email: "wxyz123@gmail.com", 
                    first_name: "Harry", 
                    last_name: "Potter", 
                    password: "tommy123")


# -------------------------------- Listings

listing_01 = Listing.create(
    name: "The Throne of Saint Peter.", 
    description: "[description here]", 
    host_id: "1", 
    address: "Vatican City", 
    # address: "Apostolic Palace 00120 Vatican City",
    lat: "41.903611", 
    long: "12.456389", 
    price: 99999.99
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/9GTQ2HngViXJBwMhfioRDPS4")

listing_01.images.attach(io: file, filename: "show_peter.jpg")



listing_02 = Listing.create(
    name: "The Imperial Russian Throne.", 
    description: "[description here]", 
    host_id: "2", 
    address: "Moscow, Russia", 
    # address: "The Moscow Kremlin Moscow, Russia, 103073", 
    lat: "55.751667", 
    long: "37.617778", 
    price: 46500.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/kTskE1vrgMidFJ5sRyTyxfCz")

listing_02.images.attach(io: file, filename: "show_russia.jpg")



listing_03 = Listing.create(
    name: "The Captain's Seat.",
    description: "[description here]", 
    host_id: "1", 
    address: "Ticonderoga, NY", 
    # address: "112 Montcalm Street Ticonderoga, NY 12883", 
    lat: "43.847900", 
    long: "-73.424100", 
    price: 35000.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/iZd9i8nHR78kEihrdfYwk1Kc")

listing_03.images.attach(io: file, filename: "show_captain.jpg")



listing_04 = Listing.create(
    name: "The Throne of King's Landing.", 
    description: "[description here]", 
    host_id: "1", 
    address: "Dubrovnik, Croatia", 
    # address: "Brsalje ul. bb, 20000, Dubrovnik, Croatia", 
    lat: "42.64807", 
    long: "18.09216", 
    price: 15000.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/7rtzdTADkXFR8SzETB13ukm9")

listing_04.images.attach(io: file, filename: "show_got.jpg")



listing_05 = Listing.create(
    name: "Margarita.", 
    description: "[description here]", 
    host_id: "2", 
    address: "Mexico City, Mexico", 
    # address: "Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX, Mexico", 
    lat: "19.427", 
    long: "-99.16771", 
    price: 218.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/48poHNhCzc65gwzcQU1HJeBW")

listing_05.images.attach(io: file, filename: "show_mexico.jpg")



listing_06 = Listing.create(
    name: "Seat on the Beach.", 
    description: "[description here]", 
    host_id: "2", 
    address: "Miami Beach, FL", 
    # address: "South Beach Miami Beach, FL 33139", 
    lat: "-80.1340772", 
    long: "25.7826123", 
    price: 365.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/B9uibZWSsV3A2ytySoG9CWC4")

listing_06.images.attach(io: file, filename: "show_miami.jpg")



listing_07 = Listing.create(
    name: "Mai Tai.", 
    description: "[description here]", 
    host_id: "2", 
    address: "Honolulu, HI", 
    # address: "2552 Kalakaua Avenue, Honolulu, Hawaii 96815",
    lat: "21.30694", 
    long: "-157.85833", 
    price: 465.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/fY7fzFcgSTCoSPBhNshQXGKd")

listing_07.images.attach(io: file, filename: "show_hawaii.jpg")



listing_08 = Listing.create(
    name: "Cosmopolitan.", 
    description: "[description here]", 
    host_id: "2", 
    address: "New York, NY", 
    # address: "157 W 57th Street New York, NY 10019", 
    lat: "40.765201", 
    long: "-73.979166", 
    price: 323.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/YFne7AudH2Mjx3byjZyUZii9")

listing_08.images.attach(io: file, filename: "show_nyc.jpg")



listing_09 = Listing.create(
    name: "Average Chair.", 
    description: "[description here]", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011", 
    lat: "40.737685", 
    long: "-73.996961", 
    price: 17.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/ZjqD74FWQPt9CTVgXFLKUVw2")

listing_09.images.attach(io: file, filename: "show_aa1.jpg")



listing_10 = Listing.create(
    name: "Normal Chair.", 
    description: "[description here]", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011",  
    lat: "40.737685", 
    long: "-73.996961", 
    price: 28.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/8DRoRvZ4gSF6m3g7sxhSXNS4")

listing_10.images.attach(io: file, filename: "show_aa2.jpg")



listing_11 = Listing.create(
    name: "Regular Chair.", 
    description: "[description here]", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011",  
    lat: "40.737685", 
    long: "-73.996961", 
    price: 18.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/Knc9Wv9fTcy5QxLLjcv86nzS")

listing_11.images.attach(io: file, filename: "show_aa3.jpg")



listing_12 = Listing.create(
    name: "The Best Chair.", 
    description: "[description here]", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011",  
    lat: "40.737685", 
    long: "-73.996961", 
    price: 59.00
)

file = open("https://app-chairsbnb-dev.s3.amazonaws.com/bNMANdNVHzdwt1NK6fN6rqif")

listing_12.images.attach(io: file, filename: "show_aa4.jpg")

