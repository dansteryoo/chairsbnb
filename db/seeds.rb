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

listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_russia.jpg"), filename: "show_russia.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia1.jpg"), filename: "russia1.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia2.jpg"), filename: "russia2.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia3.jpg"), filename: "russia3.jpg")
listing_02.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/russia4.jpeg"), filename: "russia4.jpeg")

listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_captain.jpg"), filename: "show_captain.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek1.jpg"), filename: "trek1.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek2.jpg"), filename: "trek2.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek3.jpg"), filename: "trek3.jpg")
listing_03.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/trek4.jpg"), filename: "trek4.jpg")

listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_got.jpg"), filename: "show_got.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got1.jpg"), filename: "got1.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got2.jpg"), filename: "got2.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got3.jpg"), filename: "got3.jpg")
listing_04.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/got4.jpg"), filename: "got4.jpg")

listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_mexico.jpg"), filename: "show_mexico.jpg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico1.jpeg"), filename: "mexico1.jpeg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico2.jpg"), filename: "mexico2.jpg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico3.jpeg"), filename: "mexico3.jpeg")
listing_05.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/mexico4.jpg"), filename: "mexico4.jpg")

listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_miami.jpg"), filename: "show_miami.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami1.jpg"), filename: "miami1.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami2.jpeg"), filename: "miami2.jpeg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami3.jpg"), filename: "miami3.jpg")
listing_06.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/miami4.jpg"), filename: "miami4.jpg")

listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_hawaii.jpg"), filename: "show_hawaii.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii1.jpg"), filename: "hawaii1.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii2.jpg"), filename: "hawaii2.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii3.jpg"), filename: "hawaii3.jpg")
listing_07.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hawaii4.jpg"), filename: "hawaii4.jpg")

listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_nyc.jpg"), filename: "show_nyc.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc1.jpg"), filename: "nyc1.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc2.jpg"), filename: "nyc2.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc3.jpg"), filename: "nyc3.jpg")
listing_08.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/nyc4.jpg"), filename: "nyc4.jpg")

listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa1.jpg"), filename: "show_aa1.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_09.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")

listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa2.jpg"), filename: "show_aa2.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_10.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")

listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa3.jpg"), filename: "show_aa3.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_11.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")

listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/show_aa4.jpg"), filename: "show_aa4.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack4.jpg"), filename: "hack4.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack3.jpg"), filename: "hack3.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack2.jpg"), filename: "hack2.jpg")
listing_12.images.attach(io: open("https://app-chairsbnb-dev.s3.amazonaws.com/hack1.jpg"), filename: "hack1.jpg")


