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


# -------------------------------- Guests

guest_05 = User.create(email: "abc123@gmail.com", 
                    first_name: "Anna", 
                    last_name: "Smith", 
                    password: "tommy123")

guest_06 = User.create(email: "def123@gmail.com", 
                    first_name: "Bob", 
                    last_name: "Cargo", 
                    password: "tommy123")

guest_07 = User.create(email: "hij123@gmail.com", 
                    first_name: "Chris", 
                    last_name: "Yu", 
                    password: "tommy123")

guest_08 = User.create(email: "klm123@gmail.com", 
                    first_name: "Dave", 
                    last_name: "Kim", 
                    password: "tommy123")

guest_01 = User.create(email: "nop123@gmail.com", 
                    first_name: "Eric", 
                    last_name: "Choi", 
                    password: "tommy123")

guest_02 = User.create(email: "qrs123@gmail.com", 
                    first_name: "Frank", 
                    last_name: "Lee", 
                    password: "tommy123")

guest_03 = User.create(email: "tuv123@gmail.com", 
                    first_name: "Grace", 
                    last_name: "Park", 
                    password: "tommy123")

guest_04 = User.create(email: "wxyz123@gmail.com", 
                    first_name: "Harry", 
                    last_name: "Potter", 
                    password: "tommy123")


# -------------------------------- Listings

listing_01 = Listing.create(
    name: "The Throne of Saint Peter.", 
    description: "The relic itself is described as an oaken chair damaged by cuts and worms. The Chair has metal rings attached to each side, allowing use as a sedia gestatoria. The back and front of the chair are trimmed with carved ivory. This description comes from 1867, when the relic was photographed and displayed for veneration.

    The reliquary, like many of the medieval period, takes the form of the relic it protects, i.e. the form of a chair. Symbolically, the chair Bernini designed had no earthly counterpart in actual contemporary furnishings. It is formed entirely of scrolling members, enclosing a coved panel where the upholstery pattern is rendered as a low relief of Christ instructing Peter to tend to His sheep. Large angelic figures flank an openwork panel beneath a highly realistic bronze seat cushion, vividly empty: the relic is encased within.

    The cathedra is lofted on splayed scrolling bars that appear to be effortlessly supported by four over-lifesize bronze Doctors of the Church: Western doctors Saint Ambrose and Saint Augustine of Hippo on the outsides, wearing miters, and Eastern doctors Saint John Chrysostom and Saint Athanasius on the insides, both bare-headed. The cathedra appears to hover over the altar in the basilica's apse, lit by a central tinted window through which light streams, illuminating the gilded glory of sunrays and sculpted clouds that surrounds the window. Like Bernini's Ecstasy of Saint Theresa, this is a definitive fusion of the Baroque arts, unifying sculpture and richly polychrome architecture and manipulating effects of light.

    Above, on the golden background of the frieze, is the Latin inscription: \"O Pastor Ecclesiae, tu omnes Christi pascis agnos et oves\" (O pastor of the Church, you feed all Christ's lambs and sheep). On the right is the same writing in Greek. Behind the altar is placed Bernini's monument enclosing the wooden chair, both of which are seen as symbolic of the authority of the Bishop of Rome as Vicar of Christ and successor of Saint Peter.",
    host_id: "1", 
    address: "Vatican City", 
    # address: "Apostolic Palace 00120 Vatican City",
    lat: "41.903611", 
    long: "12.456389", 
    price: 99999.99
)


listing_02 = Listing.create(
    name: "The Imperial Russian Throne", 
    description: "During the Russian Empire, the throne in St. George's Hall (the \"Greater Throne Room\") in the Winter Palace was regarded as the throne of Russia. It sits atop a seven-stepped dais with a proscenium arch above and the symbol of the Imperial Family behind (the two-headed eagle). Peter I's Room (the \"Smaller Throne Room\") is modest in comparison to the former. The throne was made for Empress Anna Ivanovna in London. There is also a throne in the Grand Throne Room of the Peterhof Palace.

    In some countries with a monarchy, thrones are still used and have important symbolic and ceremonial meaning. Among the most famous thrones still in usage are St Edward's Chair, on which the British monarch is crowned, and the thrones used by monarchs during the state opening of parliaments in the United Kingdom, the Netherlands, Canada, Australia, and Japan among others.

    Some republics use distinctive throne-like chairs in some state ceremonial. The President of Ireland sits on a former viceregal throne during his or her inauguration ceremony while Lords Mayor of many British and Irish cities often preside over local councils from throne-like chairs.

    Due to its symbolic nature, a toilet is often jokingly referred to as \"a throne\".", 
    host_id: "2", 
    address: "Moscow, Russia", 
    # address: "The Moscow Kremlin Moscow, Russia, 103073", 
    lat: "55.751667", 
    long: "37.617778", 
    price: 46500.00
)


listing_03 = Listing.create(
    name: "The Captain's Seat",
    description: "What is the ultimate chair in the galaxy? Besides the Emperor's Throne Chair from Return of the Jedi, the most iconic galactic seat belongs to the Captain, er Admiral, of the USS Enterprise (NCC-1701), James Tiberius Kirk!

    Although it's not very ergonomic, Captain Kirk's command chair is just the place to be when some pesky Klingons decloak right off your starboard bow, the shields are down and Warp Drive isn't ready. Whether you are a hardcore Trekkie with a starship bridge styled living room or you just want to sit in the coolest chair in the office, Captain Kirk's Chair from the original television show is ultimate in authoritative furniture and one really amazing collectible! This full-scale chair is limited to only 1,701 (get it?) pieces and all of the details from the original television prop and features built-in sound fx and voice samples at the touch of a button as well. Now, fire those photon torpedoes, order Scotty to give you more power and most importantly, never mess around with Tribbles.", 
    host_id: "1", 
    address: "Ticonderoga, NY", 
    # address: "112 Montcalm Street Ticonderoga, NY 12883", 
    lat: "43.847900", 
    long: "-73.424100", 
    price: 35000.00
)


listing_04 = Listing.create(
    name: "The Throne of King's Landing", 
    description: "The Iron Throne was the throne upon which the King of the Andals, the Rhoynar, and the First Men sat, located in the Great Hall of the Red Keep in the city of King's Landing. Besides the monarchs themselves, only their Hand could sit on the Iron Throne. The Iron Throne was also a metonym referring to the monarchy that rules the Seven Kingdoms and the authority of the monarchy (e.g. \"rebellion against the Iron Throne\").

    In the aftermath of the Battle of King's Landing, the Iron Throne was destroyed by Drogon and the formerly hereditary monarchy was transformed into an elective one, with the lords and ladies of Westeros electing each new ruler in a Great Council, the first and incumbent elected monarch being King Bran the Broken. The monarch also henceforth only ruled six of the Seven Kingdoms, the North having been granted independence.", 
    host_id: "1", 
    address: "Dubrovnik, Croatia", 
    # address: "Brsalje ul. bb, 20000, Dubrovnik, Croatia", 
    lat: "42.64807", 
    long: "18.09216", 
    price: 15000.00
)


listing_05 = Listing.create(
    name: "Margarita", 
    description: "Want to book a seat in Mexico City? Whether you're off for a romantic vacation, family trip, or an all-inclusive holiday, Mexico City seats are affordable!

    The Presidente InterContinental in Mexico City is an award-winning seat in Polanco, one of the capital's most dynamic cultural, business and shopping areas. This prestigious seat is close to the National Museum of Anthropology, Chapultepec Park and Castle and the National Auditorium. Nearby Mazaryk Avenue and Antara Mall are also worth seeing.", 
    host_id: "2", 
    address: "Mexico City, Mexico", 
    # address: "Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX, Mexico", 
    lat: "19.427", 
    long: "-99.16771", 
    price: 218.00
)


listing_06 = Listing.create(
    name: "Seat on the Beach", 
    description: "At the shore in Miami Beach, visitors can swim, surf and jet ski in the warm and crystal-clear Atlantic waters. You can also nap on the white sands, work on a tan or simply watch the beautiful people, especially at South Beach, a favorite of models and celebrities.
    
    People watching is a great pastime in Miami's South Beach, which draws celebrities and beautiful people in skimpy swim attire to see and be seen. The wide and fine, white sand-covered beaches are popular spots for fashion photo shoots, so you're sure to see models. The area is known for its hip clubs and wild nightlife as well as numerous excellent restaurants.
    ", 
    host_id: "2", 
    address: "Miami Beach, FL", 
    # address: "South Beach Miami Beach, FL 33139", 
    lat: "-80.1340772", 
    long: "25.7826123", 
    price: 365.00
)


listing_07 = Listing.create(
    name: "Mai Tai", 
    description: "The mere mention of Hawaii is enough to prompt visions of grass skirts and colorful cocktails with tiny umbrellas. While you will find some kitsch in Honolulu, you’ll also find art museums, bike paths, and some of the most beautiful scenery in the world. Popular Waikiki Beach has soft sands and great surf. For majestic Oahu views scramble to the top of Diamond Head – a 350-acre volcanic crater. Historic structures like Iolani Palace and Ali'iolani Hale are worth a visit on a non-beach day.
    
    Seat with modern artful design. Location center of Honolulu. Walking distance to Ala Moana Center, Waikiki (hotel shuttle available), Ala Moana Beach Park, Kaka'ako neighborhood restaurants, street art and shops.
    ", 
    host_id: "2", 
    address: "Honolulu, HI", 
    # address: "2552 Kalakaua Avenue, Honolulu, Hawaii 96815",
    lat: "21.30694", 
    long: "-157.85833", 
    price: 465.00
)


listing_08 = Listing.create(
    name: "Cosmopolitan", 
    description: "The Cosmopolitan offers a corporate environment with a large conference room. The public spaces and spacious rooms in the building create an immediate sense of effortless luxury and unparalleled comfort. We have the elegance of a luxury corporate building, but the casual feel that families with small children feel comfortable at. Guest are welcome to enjoy 24 hour refreshments in our Grand Lobby, including Library Hotel Collection’s signature Continental Breakfast Buffet each morning, wine and cheese receptions each evening from 5PM-8PM, and coffee, tea, cookies and fruit served throughout the day. Wi-Fi is available throughout the building and bottled water is provided daily. Also included are passes to a nearby New York Sports Club. The Cosmopolitan is home to an Italian restaurant called, Bread & Tulips! This rustic Italian restaurant offers authentic Italian cuisine, an extensive wine list, and craft cocktails for adults. They also offer a fun filled children’s menu including pizza and spaghetti with meatballs. The Cosmopolitan is conveniently located just North of Madison Square Park. NoMad is a very vibrant area with amazing restaurants and shops to visit during your stay. We are also just a short walk to many NYC attractions such as the Empire State Building, the Flatiron Building & the Museum of Math! The Cosmopolitan is located just two blocks from the 6 Train and a quick 5 minute walk to the R & W train line!
    ", 
    host_id: "2", 
    address: "New York, NY", 
    # address: "157 W 57th Street New York, NY 10019", 
    lat: "40.765201", 
    long: "-73.979166", 
    price: 323.00
)


listing_09 = Listing.create(
    name: "Average Chair", 
    description: "Hack Academy is a coding school that offers online and in-person training programs with no tuition cost until you’re hired as a Software Engineer earning over $50,000. The career changing outcomes that Hack Academy has produced since being founded in 2012 is a major reason why it’s considered the most respected code school in the industry. Hack Academy has placed over 3,000 people in full-time Software Engineering roles at average salaries of $101,000 in San Francisco, $90,000 in New York, and $80,000 nationally. Their alumni work at over 1,000 companies worldwide, including Google, Apple, Netflix, Twitter, and more. Hack Academy understands the skills that make a successful software engineer, and more importantly, how to teach them to you. If you don’t succeed after completing the program, you pay nothing, and that’s how it should be.
    
    Reserve your seat before it's too late!", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011", 
    lat: "40.737685", 
    long: "-73.996961", 
    price: 17.00
)


listing_10 = Listing.create(
    name: "Normal Chair", 
    description: "Hack Academy is a coding school that offers online and in-person training programs with no tuition cost until you’re hired as a Software Engineer earning over $50,000. The career changing outcomes that Hack Academy has produced since being founded in 2012 is a major reason why it’s considered the most respected code school in the industry. Hack Academy has placed over 3,000 people in full-time Software Engineering roles at average salaries of $101,000 in San Francisco, $90,000 in New York, and $80,000 nationally. Their alumni work at over 1,000 companies worldwide, including Google, Apple, Netflix, Twitter, and more. Hack Academy understands the skills that make a successful software engineer, and more importantly, how to teach them to you. If you don’t succeed after completing the program, you pay nothing, and that’s how it should be.
    
    Reserve your seat before it's too late!", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011",  
    lat: "40.737685", 
    long: "-73.996961", 
    price: 28.00
)


listing_11 = Listing.create(
    name: "Regular Chair", 
    description: "Hack Academy is a coding school that offers online and in-person training programs with no tuition cost until you’re hired as a Software Engineer earning over $50,000. The career changing outcomes that Hack Academy has produced since being founded in 2012 is a major reason why it’s considered the most respected code school in the industry. Hack Academy has placed over 3,000 people in full-time Software Engineering roles at average salaries of $101,000 in San Francisco, $90,000 in New York, and $80,000 nationally. Their alumni work at over 1,000 companies worldwide, including Google, Apple, Netflix, Twitter, and more. Hack Academy understands the skills that make a successful software engineer, and more importantly, how to teach them to you. If you don’t succeed after completing the program, you pay nothing, and that’s how it should be.
    
    Reserve your seat before it's too late!", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011",  
    lat: "40.737685", 
    long: "-73.996961", 
    price: 18.00
)


listing_12 = Listing.create(
    name: "The Best Chair", 
    description: "Hack Academy is a coding school that offers online and in-person training programs with no tuition cost until you’re hired as a Software Engineer earning over $50,000. The career changing outcomes that Hack Academy has produced since being founded in 2012 is a major reason why it’s considered the most respected code school in the industry. Hack Academy has placed over 3,000 people in full-time Software Engineering roles at average salaries of $101,000 in San Francisco, $90,000 in New York, and $80,000 nationally. Their alumni work at over 1,000 companies worldwide, including Google, Apple, Netflix, Twitter, and more. Hack Academy understands the skills that make a successful software engineer, and more importantly, how to teach them to you. If you don’t succeed after completing the program, you pay nothing, and that’s how it should be.
    
    Reserve your seat before it's too late!", 
    host_id: "3", 
    address: "New York, NY", 
    # address: "90 5th Avenue New York, NY 10011",  
    lat: "40.737685", 
    long: "-73.996961", 
    price: 59.00
)


listing_01.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_peter.jpg"), filename: "show_peter.jpg")
listing_01.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/peter1.jpg"), filename: "peter1.jpg")
listing_01.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/peter2.jpg"), filename: "peter2.jpg")
listing_01.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/peter3.jpg"), filename: "peter3.jpg")
listing_01.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/peter4.jpg"), filename: "peter4.jpg")
listing_01.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_51.png"), filename: "ratings_chart_51.png")

listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_russia.jpg"), filename: "show_russia.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia1.jpg"), filename: "russia1.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia2.jpg"), filename: "russia2.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia3.jpg"), filename: "russia3.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia4.jpeg"), filename: "russia4.jpeg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_52.png"), filename: "ratings_chart_52.png")

listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_captain.jpg"), filename: "show_captain.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek1.jpg"), filename: "trek1.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek2.jpg"), filename: "trek2.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek3.jpg"), filename: "trek3.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek4.jpg"), filename: "trek4.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_53.png"), filename: "ratings_chart_53.png")

listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_got.jpg"), filename: "show_got.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got1.jpg"), filename: "got1.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got2.jpg"), filename: "got2.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got3.jpg"), filename: "got3.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got4.jpg"), filename: "got4.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_51.png"), filename: "ratings_chart_51.png")

listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_mexico.jpg"), filename: "show_mexico.jpg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico1.jpeg"), filename: "mexico1.jpeg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico2.jpg"), filename: "mexico2.jpg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico3.jpeg"), filename: "mexico3.jpeg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico4.jpg"), filename: "mexico4.jpg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_41.png"), filename: "ratings_chart_41.png")

listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_miami.jpg"), filename: "show_miami.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami1.jpg"), filename: "miami1.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami2.jpeg"), filename: "miami2.jpeg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami3.jpg"), filename: "miami3.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami4.jpg"), filename: "miami4.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_42.png"), filename: "ratings_chart_42.png")

listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_hawaii.jpg"), filename: "show_hawaii.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii1.jpg"), filename: "hawaii1.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii2.jpg"), filename: "hawaii2.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii3.jpg"), filename: "hawaii3.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii4.jpg"), filename: "hawaii4.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_43.png"), filename: "ratings_chart_43.png")

listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_nyc.jpg"), filename: "show_nyc.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc1.jpg"), filename: "nyc1.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc2.jpg"), filename: "nyc2.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc3.jpg"), filename: "nyc3.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc4.jpg"), filename: "nyc4.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_41.png"), filename: "ratings_chart_41.png")

listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa1.jpg"), filename: "show_aa1.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_31.png"), filename: "ratings_chart_31.png")

listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa2.jpg"), filename: "show_aa2.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_32.png"), filename: "ratings_chart_32.png")

listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa3.jpg"), filename: "show_aa3.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_33.png"), filename: "ratings_chart_33.png")

listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa4.jpg"), filename: "show_aa4.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/ratings_chart_31.png"), filename: "ratings_chart_31.png")





review_0101 = Review.create(
    body: "This was a great place to be close to Vatican City. It’s a very short walk to the city. Peter was very informative and helpful. He arranged for a driver to pick us up and drop us off at the airport. Although there were small communication issues with the taxi to our departing flight, everything else was wonderful",
    listing_id: listing_01.id,
    author_id: guest_01.id,
    overall_rating: 4.50,
)


review_0102 = Review.create(
    body: "Super convenient to everything, especially Vatican, and the most accommodating host we've ever met. We've stayed here twice and will be back again.",
    listing_id: listing_01.id,
    author_id: guest_04.id,
    overall_rating: 5.00,
)


review_0103 = Review.create(
    body: "Peter is literally the greatest host I've ever met. He is a genuine guy who made me feel welcome. His seat is clean, tidy, and has that classic Italiano feel to it with a modern hint. Also, he helped me figure out the best way to see everything I wanted in regards to his place. Next time I'm in Rome, I know where I want to stay.",
    listing_id: listing_01.id,
    author_id: guest_05.id,
    overall_rating: 4.70,
)


review_0201 = Review.create(
    body: "The seat is very well located, very clean and has an amazing coushin. The metro is about a 5 minute walk and you can always find the place since it is close to a landmark (cathedral of Christ the Savior). The space is a bit limited but very well organized. The host is great but after check-in she can be a bit unresponsive.",
    listing_id: listing_02.id,
    author_id: guest_08.id,
    overall_rating: 4.35,
)


review_0202 = Review.create(
    body: "This seat is in a great location in Moscow!!! A 15-20 min walk to the Kremlin and Red Square. Perfect place because we slept there in the evening and ventured during the day :) diamond in the rough and the hosts were great!!",
    listing_id: listing_02.id,
    author_id: guest_08.id,
    overall_rating: 4.52,
)


review_0203 = Review.create(
    body: "Olga's chair was the perfect base for exploring Moscow. It is a neat, tidy seat in a quiet section of a wonderful neighborhood, close to a great supermarket and restaurants and cafes. The seat was soft and everything was sparkling clean. There is nice natural light and it is very secure and there were amenities we could use.",
    listing_id: listing_02.id,
    author_id: guest_04.id,
    overall_rating: 4.97,
)


review_0301 = Review.create(
    body: "Excellent chair from the Original Star Trek series. Owner has original blueprints, and recreated the set from this. Whole tour is a walk thru of the set, which makes u feel you are on the ship! Some original props are also here. Owner is in process of building a Next Gen tour in a building next door.",
    listing_id: listing_03.id,
    author_id: guest_01.id,
    overall_rating: 4.42,
)


review_0302 = Review.create(
    body: "If you are a Star Trek original series fan, run don’t walk (or better yet beam yourself there!) to visit the seat. We happened upon it while visiting the Adirondacks this summer. It is a hidden gem, quietly nestled in the tiny town of Ticonderoga NY. My daughter and I were absolutely thrilled when we discovered it! Loved every minute on the chair and want to go back!! A must try for a Trekkie!",
    listing_id: listing_03.id,
    author_id: guest_07.id,
    overall_rating: 4.89,
)


review_0303 = Review.create(
    body: "If you're at Lake George or in Saratoga Springs (where we stayed) this is a must visit and family friendly. Whether a casual fan or just curious and in the area.. very much worth the trip. An amazing tour through a cultural phenomenon that has made a significant impact on our society. Pictures do not do it justice. Lovingly recreated with a staff that is as committed and friendly as its founder. This is Hollywood history and fandom done right!",
    listing_id: listing_03.id,
    author_id: guest_06.id,
    overall_rating: 4.64,
)


review_0401 = Review.create(
    body: "The city covers the north shore of the Blackwater Rush and covers three tall hills, named after Aegon and his two sisters, Visenya and Rhaenys. Aegon's High Hill, surmounted by the Red Keep, the royal castle located in the south-eastern corner of the city, overlooks the bay directly, whilst Visenya's Hill to the west is crowned by the marble-walled Great Sept of Baelorand its seven crystal towers. The Hill of Rhaenys in the north is capped by the collapsed ruins of the Dragonpit dome, its bronze doors shut for a century and a half since the last dragon died.",
    listing_id: listing_04.id,
    author_id: guest_01.id,
    overall_rating: 4.77,
)


review_0402 = Review.create(
    body: "Many assume, wrongly, that the reign of King Aegon I Targaryen began on the day he landed at the mouth of the Blackwater Rush, beneath the three hills where the city of King’s Landing would eventually stand. His Grace ordered the construction of a ring of walls about King’s Landing, as high and strong as those that protected Oldtown and Lannisport. The task of building them was conferred upon Grand Maester Gawen and Ser Osmund Strong, the Hand of the King. To honor the Seven, Aegon decreed that the city would have seven gates, each defended by a massive gatehouse and defensive towers.",
    listing_id: listing_04.id,
    author_id: guest_05.id,
    overall_rating: 4.98,
)


review_0403 = Review.create(
    body: "No one should end up on the Iron Throne at the end of Game of Thrones. The Iron Throne and the notion of centralized power should be abolished by the time the final credits roll on the show’s last episode. Maybe the scattered survivors of the final war will roam around Westeros as itinerant hunter-gatherers, or the seven kingdoms will shut each other off and become seven separately ruled states. Maybe literally everyone will be dead. All of those sound better than putting another king or queen on that spiky old throne and starting this whole dance over again. It’s high time to end the game, and end the throne.",
    listing_id: listing_04.id,
    author_id: guest_06.id,
    overall_rating: 4.29,
)


review_0501 = Review.create(
    body: "Beautiful spot in the center of everything. Always felt comfortable in the seat and loved coming home at night to it. The best part, it has a relaxing patio above Roma which has practically a 360 view of the city. You can easily walk or take a quick Uber to all the best areas and restaurants of CDMX, and you’ll also get plenty of good exercise going up all the steps to get to the seat. Trust me, it’s worth it!",
    listing_id: listing_05.id,
    author_id: guest_02.id,
    overall_rating: 4.49,
)


review_0502 = Review.create(
    body: "We had an amazing stay at Alex’s passive seat. Great views and very private roof terrace. Very inspirational! Also, you’re staying in one of a coolest areas of Mexico City. You can’t go wrong here.",
    listing_id: listing_05.id,
    author_id: guest_07.id,
    overall_rating: 4.59,
)


review_0503 = Review.create(
    body: "Alex's seat is wonderful! From the very beginning communication was so easy with Alex. He always responded within a day. Any question I had while in Mexico he was also quick to answer and we frequently saw him and his family tending to the seat. The seat is even more beautiful than the pictures. I spent every morning and evening on the terrace and love how light the space was. The location is perfect and very close to great street food and excellent restaurants. When I come back to Mexico we will definitely be staying with Alex again.",
    listing_id: listing_05.id,
    author_id: guest_05.id,
    overall_rating: 4.69,
)


review_0601 = Review.create(
    body: "Great location by the beach. Not many food choices walking distance. Starbucks and The Tavern closest thing. Need more support from host during busy hours. Very friendly otherwise. Seat was what I expected. Location by far best part of my stay.",
    listing_id: listing_06.id,
    author_id: guest_02.id,
    overall_rating: 4.79,
)


review_0602 = Review.create(
    body: "You get what you pay for. If you’re looking for something near the beach then that is what you will get. The seat itself is great. Overall feels very good and I would stay here again when I have the budget to stay here!",
    listing_id: listing_06.id,
    author_id: guest_04.id,
    overall_rating: 4.89,
)


review_0603 = Review.create(
    body: "This seat is very nicely positioned on Miami Beach - very close to the beach, public parking, and lots of restaurants and stores along the main avenue. They provide complimentary towels, which is a nice touch! The only issue we had was that the beach was crowded and it was hard to relax with the noise going at all hours. Other than that, the seat was very clean, the host was welcoming, and it was a great location",
    listing_id: listing_06.id,
    author_id: guest_08.id,
    overall_rating: 4.19,
)


review_0701 = Review.create(
    body: "Philip’s chair was perfect. Incredibly comfy, phenomenal location, and he included parking which made life so much easier. I took advantage of the lovely lanai, which was very spacious. Check-in and check-out was a breeze. It was emasculate in terms of cleanliness, and the extra beach towels and beach amenities were so convenient. Thanks again for a great stay! I very much hope to stay here again in the future.",
    listing_id: listing_07.id,
    author_id: guest_02.id,
    overall_rating: 4.87,
)


review_0702 = Review.create(
    body: "Philip’s seat is everything described and more. Full of unlisted amenities, very clean & attention to detail is made to make their guests as comfortable & welcome. Only minutes off of the beach, quick access to shopping & all that Oahu has to offer. Philip is extremely friendly & available on a moments notice for assistance. I was kinda sad to leave.. I will definitely check availability with Philip 1st should I get back to the island.",
    listing_id: listing_07.id,
    author_id: guest_07.id,
    overall_rating: 4.76,
)


review_0703 = Review.create(
    body: "Philip is quick to respond and easy to work with. The chair is close to shopping and beach. I got a free valet parking that I didn’t expect. His chair is great, he has everything I needed in his place and would love to stay their again.",
    listing_id: listing_07.id,
    author_id: guest_08.id,
    overall_rating: 4.65,
)


review_0801 = Review.create(
    body: "Graziella responded quickly and check in and check out was very simple. The chair is very clean and is an incredibly good deal. Easy walk to multiple subway lines that get you into Manhattan in ~30 mins. Neighborhood was pretty quiet and felt very safe.",
    listing_id: listing_08.id,
    author_id: guest_02.id,
    overall_rating: 4.54,
)


review_0802 = Review.create(
    body: "This was a great example of a GREAT HOST. She communicated in a timely manner each and every time I had a question. Which is very rare so her attentiveness and communication skills were definitely appreciated. Oh THAT chair room is BEAUTIFUL!",
    listing_id: listing_08.id,
    author_id: guest_06.id,
    overall_rating: 4.43,
)


review_0803 = Review.create(
    body: "Great affordable seat to stay if you're visiting New York. 30 min Uber ride from LGA and a 10 min walk to the J train. Graziella was very nice and let us check in earlier in the morning (a neighbor greeted us and handed off the keys). The seat is well furnished and very clean. Highly recommend",
    listing_id: listing_08.id,
    author_id: guest_05.id,
    overall_rating: 4.32,
)


review_0901 = Review.create(
    body: "Hack Academy's seat is in a fantastic location of NYC. Very easy to get downtown. They were extremely responsive to any of my messages and his check in directions were on point. The seat is just what you need.",
    listing_id: listing_09.id,
    author_id: guest_03.id,
    overall_rating: 4.21,
)


review_0902 = Review.create(
    body: "Excellent chair - central, clean spacious. Stayed here for 6 months while I was learning how to code. Seat had everything I needed. Thanks for having me",
    listing_id: listing_09.id,
    author_id: guest_04.id,
    overall_rating: 4.11,
)


review_0903 = Review.create(
    body: "Ask from the Host to send you House Rules before, so you will be aware of all restrictions of using the space. Note you have to check out at 9:00 exactly.",
    listing_id: listing_09.id,
    author_id: guest_01.id,
    overall_rating: 3.45,
)


review_1001 = Review.create(
    body: "A very great seat to sit in. The area was nice and the chair was super comfortable. A lot of storage space and places to hang your clothes. Great communication and very helpful.",
    listing_id: listing_10.id,
    author_id: guest_03.id,
    overall_rating: 3.59,
)


review_1002 = Review.create(
    body: "This is a good place to sit in Manhattan. The chair has enough space, common areas are clean, everything is well maintained. It's located close to subway lines. Host was responsive",
    listing_id: listing_10.id,
    author_id: guest_01.id,
    overall_rating: 3.99,
)


review_1003 = Review.create(
    body: "The checkin and checkout process is really a pain. First, you can only check in at 7pm, but you have to checkout at 9am. That's actually half a day. Second, the host is totally inflexible with leaving luggage before. Third, you have to go to search the keys by yourself somewhere many blocks distant and walking with the luggage through half the city. It cost me one day of sightseeing.",
    listing_id: listing_10.id,
    author_id: guest_05.id,
    overall_rating: 3.25,
)


review_1101 = Review.create(
    body: "Property manager does not allow owner to Airbnb his apartment. First, I must admit I did stay 37 minutes passed his 9:00 AM checkout. As I was about to open the door to leave, someone knocked on the door. It was the property manager. He asked me who I was and why I was there. Before I could answer, he told me \"this is Airbnb right?\" Then he told me I was there illegally and I needed to get lost immediately. I don't recommend having to deal with that.",
    listing_id: listing_11.id,
    author_id: guest_03.id,
    overall_rating: 3.76,
)


review_1102 = Review.create(
    body: "The host was not there, so this is not even “hosting” - it’s renting chairs. The bathroom had hair in the sink, hair/dirt in the toilet, hair in the shower. My chair was too hot and the temperature couldn’t be adjusted (either heat is off and it’s cold or heat is on and it’s literally 90’F). Tried opening a window. It was almost impossible to close it without applying your full body’s pressure - I ended up pulling my muscle. Felt like a hostel overall.",
    listing_id: listing_11.id,
    author_id: guest_06.id,
    overall_rating: 3.51,
)


review_1103 = Review.create(
    body: "Great location. Flat was quite okay but could have been cleaner.",
    listing_id: listing_11.id,
    author_id: guest_07.id,
    overall_rating: 3.88,
)


review_1201 = Review.create(
    body: "Hack Academy was incredibly gracious to be available at such short notice to check me in! The space was fantastic and had a wonderful city vibe. Nothing negative. Everything was accurate and exceeded expectations. Thank you so much!! Will certainly come again if in the area and available.",
    listing_id: listing_12.id,
    author_id: guest_03.id,
    overall_rating: 3.11,
)


review_1202 = Review.create(
    body: "Chair is stylish, clean, and neat. Loved the color scheme! Location was great for the value given that it was holidays. Appreciate the host checking in regularly.",
    listing_id: listing_12.id,
    author_id: guest_04.id,
    overall_rating: 3.67,
)


review_1203 = Review.create(
    body: "Great location within a 5 minute walk to Astor place subway station to take you anywhere you want to go, SO much stuff to do all within a few minutes walk. The chair was clean and cozy. Provided anything I needed promptly and the other guests were so friendly. The area is clean and safe and there’s someone working in the lobby at all times.",
    listing_id: listing_12.id,
    author_id: guest_06.id,
    overall_rating: 4.09,
)