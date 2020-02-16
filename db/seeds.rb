# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

User.destroy_all
User.reset_pk_sequence

Listing.destroy_all
Listing.reset_pk_sequence


# -------------------------------- Users

anna = User.create(email: 'abc123@gmail.com', 
                    first_name: 'Anna', 
                    last_name: 'Smith', 
                    password: 'hunter12')

bob = User.create(email: 'def123@gmail.com', 
                    first_name: 'Bob', 
                    last_name: 'Cargo', 
                    password: 'hunter12')

chris = User.create(email: 'hij123@gmail.com', 
                    first_name: 'Chris', 
                    last_name: 'Yu', 
                    password: 'hunter12')

dave = User.create(email: 'klm123@gmail.com', 
                    first_name: 'Dave', 
                    last_name: 'Kim', 
                    password: 'hunter12')

eric = User.create(email: 'nop123@gmail.com', 
                    first_name: 'Eric', 
                    last_name: 'Choi', 
                    password: 'hunter12')

frank = User.create(email: 'qrs123@gmail.com', 
                    first_name: 'Frank', 
                    last_name: 'Lee', 
                    password: 'hunter12')

grace = User.create(email: 'tuv123@gmail.com', 
                    first_name: 'Grace', 
                    last_name: 'Park', 
                    password: 'hunter12')

harry = User.create(email: 'wxyz123@gmail.com', 
                    first_name: 'Harry', 
                    last_name: 'Potter', 
                    password: 'hunter12')


# -------------------------------- Listings

listing_01 = Listing.create(
    name: "The Throne of Saint Peter.", 
    description: "", 
    host_id: "1", 
    address: "Apostolic Palace 00120 Vatican City", 
    lat: "41.903611", 
    long: "12.456389", 
    price: 99999.99
)

file = open('')

listing_01.images.attach(io: file, filename: '.jpg')



listing_02 = Listing.create(
    name: "Egg Chair.", 
    description: "", 
    host_id: "1", 
    address: "504 Battery Place New York, NY 10004", 
    lat: "40.695833", 
    long: "-74.013611", 
    price: 55000.00
)

file = open('')

listing_02.images.attach(io: file, filename: '.jpg')



listing_03 = Listing.create(
    name: "The Captain's Seat.", 
    description: "", 
    host_id: "1", 
    address: "112 Montcalm Street Ticonderoga, NY 12883", 
    lat: "43.847900", 
    long: "-73.424100", 
    price: 15000.00
)

file = open('')

listing_03.images.attach(io: file, filename: '.jpg')



listing_04 = Listing.create(
    name: "The Throne of King's Landing.", 
    description: "", 
    host_id: "1", 
    address: "Brsalje ul. bb, 20000, Dubrovnik, Croatia", 
    lat: "42.64807", 
    long: "18.09216", 
    price: 10000.00
)

file = open('')

listing_04.images.attach(io: file, filename: '.jpg')



listing_05 = Listing.create(
    name: "Seat on the Beach.", 
    description: "", 
    host_id: "2", 
    address: "South Beach Miami Beach, FL 33139", 
    lat: "-80.1340772", 
    long: "25.7826123", 
    price: 365.00
)

file = open('')

listing_05.images.attach(io: file, filename: '.jpg')



listing_06 = Listing.create(
    name: "The Moscow Mule.", 
    description: "", 
    host_id: "2", 
    address: "The Moscow Kremlin Moscow, Russia, 103073", 
    lat: "55.751667", 
    long: "37.617778", 
    price: 465.00
)

file = open('')

listing_06.images.attach(io: file, filename: '.jpg')



listing_07 = Listing.create(
    name: "The Cosmopolitan.", 
    description: "", 
    host_id: "2", 
    address: "157 W 57th Street New York, NY 10019", 
    lat: "40.765201", 
    long: "-73.979166", 
    price: 323.00
)

file = open('')

listing_07.images.attach(io: file, filename: '.jpg')



listing_08 = Listing.create(
    name: "The Margarita.", 
    description: "", 
    host_id: "2", 
    address: "Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX, Mexico", 
    lat: "19.427", 
    long: "-99.16771", 
    price: 218.00
)

file = open('')

listing_08.images.attach(io: file, filename: '.jpg')



listing_09 = Listing.create(
    name: "Average Chair.", 
    description: "", 
    host_id: "3", 
    address: "90 5th Avenue New York, NY 10011", 
    lat: "40.737685", 
    long: "-73.996961", 
    price: 17.00
)

file = open('')

listing_09.images.attach(io: file, filename: '.jpg')



listing_10 = Listing.create(
    name: "Normal Chair.", 
    description: "", 
    host_id: "3", 
    address: "90 5th Avenue New York, NY 10011", 
    lat: "40.737685", 
    long: "-73.996961", 
    price: 28.00
)

file = open('')

listing_10.images.attach(io: file, filename: '.jpg')



listing_11 = Listing.create(
    name: "Regular Chair.", 
    description: "", 
    host_id: "3", 
    address: "90 5th Avenue New York, NY 10011", 
    lat: "40.737685", 
    long: "-73.996961", 
    price: 18.00
)

file = open('')

listing_11.images.attach(io: file, filename: '.jpg')



listing_12 = Listing.create(
    name: "The Best Chair.", 
    description: "", 
    host_id: "3", 
    address: "90 5th Avenue New York, NY 10011", 
    lat: "40.737685", 
    long: "-73.996961", 
    price: 59.00
)

file = open('')

listing_12.images.attach(io: file, filename: '.jpg')

