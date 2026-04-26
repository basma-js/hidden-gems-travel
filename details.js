const countryDetails = document.getElementById("countryDetails");

const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("country");

const extraDetails = {
  Kazakhstan: {
    about: `Kazakhstan is a unique hidden destination in Central Asia, known for its mountains, wide landscapes, and modern cities such as Almaty and Astana.

The capital city is Astana, and the official languages are Kazakh and Russian. English is limited but more commonly used in major cities.

The local currency is the Kazakhstani tenge, and international currencies like USD and EUR are mostly not accepted.

Kazakhstan has a population of over 20 million people and is considered a safe destination for travelers. Saudi citizens can visit visa-free, making it an accessible and convenient option.`,

    currencySymbol: "KZT",
    usd: false,
    eur: false,
    safety: "High",
    visa: false,

    transportation: ["Bus", "Metro", "Taxi apps"],
    payment: "Cash and cards",
    deliveryApps: "Yandex Go, Glovo",
    maps: "Google Maps works well",

    landmarks: [
      "Big Almaty Lake — nature and mountain views (best in morning)",
      "Charyn Canyon — perfect for hiking & photos (2-3 hours trip)",
      "Baiterek Tower — city landmark in Astana (panoramic view)",
      "Kok-Tobe Hill — sunset spot + cable car experience",
      "Almaty City Center — cafes, walking streets, local vibe"
    ],

    hotels: [
  "⭐ Budget Hostel",
  "⭐⭐ Ibis Almaty",
  "⭐⭐⭐ Holiday Inn Almaty",
  "⭐⭐⭐⭐ Rixos Almaty",
  "⭐⭐⭐⭐⭐ The Ritz-Carlton Almaty"
] ,
    food: {
      halal: "Available",
      muslimFriendly: "Yes, especially in major cities",
      dishes: "Beshbarmak, Plov, Lagman",
      restaurants: [
        "Navat — halal-friendly traditional food",
        "Daredzhani — Central Asian cuisine",
        "Assorti — family-friendly restaurant",
        "Line Brew — popular local experience"
      ]
    }
  },

  Vietnam: {

    about: `Vietnam is a unique destination in Southeast Asia, known for its rich culture, beautiful landscapes, beaches, and vibrant cities such as Hanoi and Ho Chi Minh City.

The capital city is Hanoi, and the official language is Vietnamese. English is limited but more commonly used in tourist areas.

The local currency is the Vietnamese Dong, and international currencies like USD and EUR are mostly not accepted for daily payments.

Vietnam has a population of over 100 million people and is considered a moderately safe destination for travelers. Saudi citizens need a visa to visit Vietnam for tourism.`,

    currencySymbol: "VND",

    usd: false,

    eur: false,

    safety: "Medium",

    visa: true,

    transportation: [

      "Grab (most popular app)",

      "Taxi (Mai Linh, Vinasun)",

      "Motorbike rental",

      "Domestic flights"

    ],

    payment: "Cash is widely used, cards in hotels and malls",

    deliveryApps: "GrabFood, ShopeeFood",

    maps: "Google Maps works very well",

    landmarks: [

      "Ha Long Bay",

      "Hoi An Old Town",

      "Da Nang Beaches",

      "Hanoi Old Quarter"

    ],

    hotels: [
  "⭐ Hanoi Backpackers Hostel",
  "⭐⭐ Hanoi La Siesta Hotel",
  "⭐⭐⭐ Fusion Suites Da Nang",
  "⭐⭐⭐⭐ InterContinental Hanoi Westlake Hotel",
  "⭐⭐⭐⭐⭐ Vinpearl Resort Nha Trang"
] ,

    food: {

      halal: "Available (only in selected restaurants)",

      muslimFriendly: "Limited but available in major cities",

      dishes: "Pho, Banh Mi, Spring Rolls",

      restaurants: [

        "Halal Saigon Restaurant",

        "Daun Restaurant",

        "Kampong Cham"

      ]

    }

  } ,
  Mongolia: {
 
about: `Mongolia is a unique destination in East Asia, known for its vast open landscapes, nomadic culture, mountains, and untouched nature.

The capital city is Ulaanbaatar, and the official language is Mongolian. English is limited but more commonly used in tourist areas.

The local currency is the Mongolian Tugrik, and international currencies like USD and EUR are mostly not accepted for daily payments.

Mongolia has a population of over 3 million people and is considered a moderately safe destination for travelers. Saudi citizens can visit visa-free for tourism, making it an accessible travel option.`,
  
currencySymbol: "MNT",
  usd: false,
  eur: false,
  safety: "Medium",
  visa: false,

  transportation: [
    "Taxi (UBCab app)",
    "Private drivers",
    "Tour vans",
    "Domestic flights"
  ],

  payment: "Cash is preferred, cards in hotels",
  deliveryApps: "Tok Tok, UBcab Food",
  apps: "UBCab (taxi), Tok Tok (delivery), Maps.me (offline maps), Yandex Maps",
  maps: "Google Maps works in cities but Maps.me is better for offline and remote areas",

  landmarks: [
    "Gorkhi-Terelj National Park",
    "Chinggis Khaan Statue Complex",
    "Hustai National Park",
    "Ulaanbaatar city center"
  ],

  hotels: [
  "⭐ UB Guesthouse",
  "⭐⭐ Springs Hotel Ulaanbaatar",
  "⭐⭐⭐ Ibis Styles Ulaanbaatar",
  "⭐⭐⭐⭐ Blue Sky Hotel",
  "⭐⭐⭐⭐⭐ Shangri-La Ulaanbaatar"
] ,

  food: {
    halal: "Very limited",
    muslimFriendly: "Very limited",
    dishes: "Buuz, Khorkhog, Bansh",
    restaurants: [
      "Hazara Indian Restaurant",
      "BD’s Mongolian Grill",
      "Namaste UB"
    ]
  }
},
Cambodia: {
 
about: `Cambodia is a unique destination in Southeast Asia, known for its ancient temples, rich history, affordable travel, and cultural sites such as Angkor Wat.

The capital city is Phnom Penh, and the official language is Khmer. English is limited but more commonly used in tourist areas.

The local currency is the Cambodian Riel, and US Dollars are widely accepted in many tourist areas.

Cambodia has a population of over 16 million people and is considered a moderately safe destination for travelers. Saudi citizens need a visa to visit Cambodia for tourism.`,

  currencySymbol: "KHR",
  usd: true,
  eur: false,
  safety: "Medium",
  visa: true,

  transportation: [
    "Tuk Tuk",
    "Grab",
    "Taxi",
    "Private drivers"
  ],

  payment: "Cash (USD widely used)",
  deliveryApps: "GrabFood, Foodpanda",
  apps: "Grab, PassApp Taxi",
  maps: "Google Maps works well",

  landmarks: [
    "Angkor Wat",
    "Phnom Penh Palace",
    "Siem Reap city",
    "Koh Rong island"
  ],

  hotels: [
    "⭐ Onederz Hostel",
    "⭐⭐ Okay Boutique Hotel",
    "⭐⭐⭐ Golden Temple Hotel",
    "⭐⭐⭐⭐ Sokha Hotel",
    "⭐⭐⭐⭐⭐ Raffles Grand Hotel"
  ],

  food: {
    halal: "Available but limited",
    muslimFriendly: "Good in Phnom Penh",
    dishes: "Amok, Khmer BBQ",
    restaurants: [
      "Halal Restaurant Phnom Penh",
      "Cousin’s Burger",
      "Taste of Middle East"
    ]
  }
},
Philippines: {
about: `The Philippines is a unique island destination in Southeast Asia, known for its tropical beaches, islands, friendly people, and places such as Boracay, Cebu, and Palawan.

The capital city is Manila, and the official languages are Filipino and English. English is widely spoken in major cities and tourist areas.

The local currency is the Philippine Peso, and international currencies like USD are mostly not accepted for daily payments.

The Philippines has a population of over 110 million people and is considered a moderately safe destination for travelers. Saudi citizens can visit visa-free for short tourism stays.`,

  currencySymbol: "PHP",
  usd: true,
  eur: false,
  safety: "Medium",
  visa: false,

  transportation: [
    "Grab (main app)",
    "Taxi",
    "Jeepney (local transport)",
    "Domestic flights"
  ],

  payment: "Cash is preferred, cards in malls",
  deliveryApps: "GrabFood, Foodpanda",
  apps: "Grab (taxi & food), Angkas (motorbike taxi)",
  maps: "Google Maps works well",

  landmarks: [
    "Boracay Island",
    "Palawan (El Nido)",
    "Cebu Beaches",
    "Manila city"
  ],

  hotels: [
    "⭐ Red Planet Hotel",
    "⭐⭐ Holiday Inn Express",
    "⭐⭐⭐ Seda Hotels",
    "⭐⭐⭐⭐ Shangri-La Boracay",
    "⭐⭐⭐⭐⭐ Okada Manila"
  ],

  food: {
    halal: "Limited (mainly in Muslim areas)",
    muslimFriendly: "Available in Manila",
    dishes: "Adobo, Seafood, Halo-Halo",
    restaurants: [
      "The Halal Guys Manila",
      "Haji Lane Restaurant",
      "Al Jazeera Restaurant"
    ]
  }
} ,
 Peru: {
  about: `Peru is a unique destination in South America, known for its ancient history, mountains, and cultural heritage such as Machu Picchu.

The capital city is Lima, and the official language is Spanish. English is limited but more commonly used in tourist areas.

The local currency is the Peruvian Sol, and international currencies like USD are accepted in some places.

Peru has a population of over 30 million people and is considered a moderately safe destination for travelers. Saudi citizens can visit visa-free for tourism, making it an accessible travel option.`,

  currencySymbol: "PEN",
  usd: true,
  eur: false,
  safety: "Medium",
  visa: false,

  transportation: [
    "Uber",
    "Taxi",
    "Bus",
    "Domestic flights"
  ],

  payment: "Cash and cards",
  deliveryApps: "Rappi, PedidosYa",
  apps: "Uber, Cabify, Rappi, Maps.me",
  maps: "Google Maps works well",

  landmarks: [
    "Machu Picchu — ancient Inca site",
    "Cusco — historic city and culture",
    "Sacred Valley — mountains and villages",
    "Lima Miraflores — coastal walks and restaurants"
  ],

  hotels: [
    "⭐ Pariwana Hostel Lima",
    "⭐⭐ Ibis Lima Reducto Miraflores",
    "⭐⭐⭐ Casa Andina Standard Cusco",
    "⭐⭐⭐⭐ Hilton Garden Inn Cusco",
    "⭐⭐⭐⭐⭐ JW Marriott Hotel Lima"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited, mainly in Lima",
    dishes: "Ceviche, Lomo Saltado, Quinoa dishes",
    restaurants: [
      "Rico Halal Lima",
      "Ali Baba Restaurant Lima",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Ecuador: {
  about: `Ecuador is a unique destination in South America, known for its diverse nature including mountains, rainforests, and the famous Galápagos Islands.

The capital city is Quito, and the official language is Spanish. English is limited but more commonly used in tourist areas.

The local currency is the US Dollar, and it is widely accepted everywhere.

Ecuador has a population of over 17 million people and is considered a moderately safe destination for travelers. Saudi citizens can visit visa-free for tourism, making it an accessible travel option.`,

  currencySymbol: "USD",
  usd: true,
  eur: false,
  safety: "Medium",
  visa: false,

  transportation: [
    "Taxi",
    "Uber",
    "Bus",
    "Domestic flights"
  ],

  payment: "Cash and cards",
  deliveryApps: "Rappi, Uber Eats",
  apps: "Uber, Cabify, Rappi, Maps.me",
  maps: "Google Maps works well",

  landmarks: [
    "Quito Old Town — historic center",
    "Galápagos Islands — unique wildlife",
    "Baños — waterfalls and adventure",
    "Cotopaxi Volcano — hiking and views"
  ],

  hotels: [
    "⭐ Selina Quito Hostel",
    "⭐⭐ Ibis Quito Hotel",
    "⭐⭐⭐ Hotel Reina Isabel",
    "⭐⭐⭐⭐ Hilton Colon Quito",
    "⭐⭐⭐⭐⭐ JW Marriott Quito"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited",
    dishes: "Ceviche, Empanadas, Llapingachos",
    restaurants: [
      "Halal Food Quito",
      "Indian restaurants",
      "Vegetarian-friendly restaurants"
    ]
  }
} ,

Colombia: {
  about: `Colombia is a unique destination in South America, known for its vibrant culture, coffee, and beautiful cities such as Bogotá and Medellín.

The capital city is Bogotá, and the official language is Spanish. English is limited but more commonly used in tourist areas.

The local currency is the Colombian Peso, and international currencies like USD are accepted in some places.

Colombia has a population of over 50 million people and is considered a moderately safe destination for travelers. Saudi citizens can visit visa-free for tourism, making it an accessible travel option.`,

  currencySymbol: "COP",
  usd: true,
  eur: false,
  safety: "Medium (varies by area)",
  visa: false,

  transportation: [
    "Uber",
    "Taxi",
    "Bus",
    "Domestic flights"
  ],

  payment: "Cash and cards",
  deliveryApps: "Rappi, iFood",
  apps: "Uber, Cabify, Rappi, Maps.me",
  maps: "Google Maps works well",

  landmarks: [
    "Cartagena — historic coastal city",
    "Medellín — modern city and cable cars",
    "Bogotá — capital and museums",
    "Coffee Region — nature and coffee farms"
  ],

  hotels: [
    "⭐ Selina Hostel Medellín",
    "⭐⭐ Ibis Bogotá Hotel",
    "⭐⭐⭐ Hotel Dann Carlton Medellín",
    "⭐⭐⭐⭐ Hilton Bogotá",
    "⭐⭐⭐⭐⭐ Sofitel Legend Santa Clara Cartagena"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited",
    dishes: "Arepas, Bandeja Paisa, Empanadas",
    restaurants: [
      "Halal restaurants in Bogotá",
      "Arab restaurants",
      "Vegetarian-friendly restaurants"
    ]
  }
},

"Costa Rica": {
  about: `Costa Rica is a unique destination in Central America, known for its natural beauty, rainforests, waterfalls, and wildlife.

The capital city is San José, and the official language is Spanish. English is commonly used in tourist areas.

The local currency is the Costa Rican Colón, and US Dollars are widely accepted.

Costa Rica has a population of over 5 million people and is considered a safe destination for travelers. Saudi citizens can visit visa-free for tourism, making it an accessible travel option.`,

  currencySymbol: "CRC",
  usd: true,
  eur: false,
  safety: "High",
  visa: false,

  transportation: [
    "Uber",
    "Taxi",
    "Bus",
    "Car rental"
  ],

  payment: "Cash and cards",
  deliveryApps: "Uber Eats",
  apps: "Uber, Waze, Maps.me",
  maps: "Google Maps works very well",

  landmarks: [
    "Arenal Volcano — hiking and hot springs",
    "Monteverde Cloud Forest — nature reserve",
    "Manuel Antonio Park — beaches and wildlife",
    "La Fortuna — waterfalls and adventure"
  ],

  hotels: [
    "⭐ Selina Hostel San José",
    "⭐⭐ Ibis San José",
    "⭐⭐⭐ Hotel Presidente",
    "⭐⭐⭐⭐ Arenal Springs Resort",
    "⭐⭐⭐⭐⭐ Four Seasons Resort Costa Rica"
  ],

  food: {
    halal: "Very limited (almost none)",
    muslimFriendly: "Limited",
    dishes: "Gallo Pinto, Rice & Beans, Seafood",
    restaurants: [
      "Middle Eastern restaurants",
      "Vegetarian-friendly restaurants",
      "Local seafood restaurants"
    ]
  }
} ,
Slovenia: {
  about: `Slovenia is a unique destination in Central Europe, known for its green landscapes, lakes, caves, and charming cities such as Ljubljana and Bled.

The capital city is Ljubljana, and the official language is Slovene. English is commonly used in tourist areas and major cities.

The local currency is the Euro, and it is widely accepted everywhere.

Slovenia has a population of over 2 million people and is considered a very safe destination for travelers. Saudi citizens need a Schengen visa to visit Slovenia for tourism.`,

  currencySymbol: "EUR",
  usd: false,
  eur: true,
  safety: "High",
  visa: true,

  transportation: [
    "Bus",
    "Train",
    "Taxi",
    "Car rental"
  ],

  payment: "Cards are widely accepted, cash is useful in small towns",
  deliveryApps: "Wolt, Glovo",
  apps: "Ljubljana Bus, Wolt, Glovo, Maps.me",
  maps: "Google Maps works very well",

  landmarks: [
    "Lake Bled — scenic lake and island views",
    "Ljubljana Old Town — riverside walks and cafés",
    "Postojna Cave — famous cave system",
    "Triglav National Park — mountains and nature"
  ],

  hotels: [
    "⭐ Hostel Celica Ljubljana",
    "⭐⭐ B&B Hotel Ljubljana Park",
    "⭐⭐⭐ Hotel Mrak Ljubljana",
    "⭐⭐⭐⭐ Grand Hotel Union Eurostars",
    "⭐⭐⭐⭐⭐ InterContinental Ljubljana"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited, mainly in Ljubljana",
    dishes: "Štruklji, Bled Cream Cake, local seafood",
    restaurants: [
      "Orient Express Ljubljana",
      "Sarajevo '84 Ljubljana",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Croatia: {
  about: `Croatia is a popular European destination located on the Adriatic Sea, known for its beautiful coastline, historic cities, and clear beaches.

The capital city is Zagreb, and the official language is Croatian. English is widely spoken in tourist areas.

The local currency is the Euro, and it is accepted everywhere.

Croatia has a population of around 4 million people and is considered a safe destination for travelers. Saudi citizens need a Schengen visa to visit Croatia.`,

  currencySymbol: "EUR",
  usd: false,
  eur: true,
  safety: "High",
  visa: true,

  transportation: [
    "Bus",
    "Ferries (between islands)",
    "Taxi",
    "Car rental"
  ],

  payment: "Cards widely accepted, cash for small places",
  deliveryApps: "Glovo, Wolt",
  apps: "Bolt, Uber, Wolt, Maps.me",
  maps: "Google Maps works very well",

  landmarks: [
    "Dubrovnik Old Town — historic city walls",
    "Split — Diocletian’s Palace",
    "Plitvice Lakes — waterfalls and nature",
    "Hvar Island — beaches and nightlife"
  ],

  hotels: [
    "⭐ Hostel Angelina Old Town Dubrovnik",
    "⭐⭐ Hotel Dubrovnik Zagreb",
    "⭐⭐⭐ Hotel Marul Split",
    "⭐⭐⭐⭐ Cornaro Hotel Split",
    "⭐⭐⭐⭐⭐ Hotel Excelsior Dubrovnik"
  ],

  food: {
    halal: "Limited",
    muslimFriendly: "Limited",
    dishes: "Seafood, Grilled meats, Risotto",
    restaurants: [
      "Halal Dubrovnik Restaurant",
      "Biberon Sushi & Grill (halal options)",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Serbia: {
  about: `Serbia is a country in Southeast Europe, known for its vibrant culture, nightlife, and historic cities such as Belgrade and Novi Sad.

The capital city is Belgrade, and the official language is Serbian. English is commonly spoken in major cities.

The local currency is the Serbian Dinar, and cards are widely accepted in cities.

Serbia has a population of around 7 million people and is considered a safe and affordable destination. Saudi citizens can visit visa-free for tourism.`,

  currencySymbol: "RSD",
  usd: false,
  eur: false,
  safety: "High",
  visa: false,

  transportation: [
    "Bus",
    "Taxi",
    "Train",
    "Car rental"
  ],

  payment: "Cash and cards",
  deliveryApps: "Glovo, Wolt",
  apps: "CarGo, Yandex Go, Wolt",
  maps: "Google Maps works well",

  landmarks: [
    "Belgrade Fortress — river views",
    "Knez Mihailova Street — shopping area",
    "Novi Sad — cultural city",
    "Tara National Park — nature and mountains"
  ],

  hotels: [
  "⭐ Hostel Bongo Belgrade",
  "⭐⭐ Hotel Slavija Belgrade",
  "⭐⭐⭐ Hotel Moskva Belgrade",
  "⭐⭐⭐⭐ Metropol Palace Belgrade",
  "⭐⭐⭐⭐⭐ Square Nine Hotel Belgrade"
],

  food: {
    halal: "Available",
    muslimFriendly: "Good in cities",
    dishes: "Ćevapi, Grilled meats, Pastries",
    restaurants: [
      "Turkish & Middle Eastern restaurants",
      "Walter Sarajevski Cevap",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Moldova: {
  about: `Moldova is a small country in Eastern Europe, known for its vineyards, countryside, and relaxed atmosphere.

The capital city is Chișinău, and the official language is Romanian. English is limited but used in some areas.

The local currency is the Moldovan Leu, and cash is commonly used.

Moldova has a population of around 2.5 million people and is considered a safe and quiet destination. Saudi citizens can visit visa-free for tourism.`,

  currencySymbol: "MDL",
  usd: false,
  eur: false,
  safety: "Medium",
  visa: false,

  transportation: [
    "Bus",
    "Taxi",
    "Minibus (Marshrutka)"
  ],

  payment: "Cash is preferred",
  deliveryApps: "Glovo",
  apps: "Yandex Go, Glovo",
  maps: "Google Maps works well",

  landmarks: [
    "Orheiul Vechi — historical site",
    "Cricova Winery — underground wine city",
    "Chișinău city center",
    "Milestii Mici Winery"
  ],

  hotels: [
  "⭐ Tapok Hostel Chișinău",
  "⭐⭐ City Park Hotel Chișinău",
  "⭐⭐⭐ Bristol Central Park Hotel",
  "⭐⭐⭐⭐ Radisson Blu Leogrand Hotel",
  "⭐⭐⭐⭐⭐ Nobil Luxury Boutique Hotel"
],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited",
    dishes: "Mămăligă, Grilled meats, Soups",
    restaurants: [
      "Turkish restaurants",
      "Local traditional restaurants",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Hungary: {
  about: `Hungary is a Central European country known for its architecture, thermal baths, and historic cities such as Budapest.

The capital city is Budapest, and the official language is Hungarian. English is widely used in tourist areas.

The local currency is the Hungarian Forint, and cards are widely accepted.

Hungary has a population of around 9.5 million people and is considered a safe destination for travelers. Saudi citizens need a Schengen visa to visit Hungary.`,

  currencySymbol: "HUF",
  usd: false,
  eur: false,
  safety: "High",
  visa: true,

  transportation: [
    "Metro",
    "Bus",
    "Tram",
    "Taxi"
  ],

  payment: "Cards widely accepted, cash sometimes needed",
  deliveryApps: "Wolt, Bolt Food",
  apps: "Bolt, Uber (limited), Wolt",
  maps: "Google Maps works very well",

  landmarks: [
    "Budapest Parliament — iconic building",
    "Buda Castle — historic site",
    "Fisherman’s Bastion — city views",
    "Széchenyi Thermal Bath — spa experience"
  ],

  hotels: [
  "⭐ Maverick City Lodge Budapest",
  "⭐⭐ Hotel Chesscom Budapest",
  "⭐⭐⭐ Hotel Museum Budapest",
  "⭐⭐⭐⭐ Novotel Budapest Danube",
  "⭐⭐⭐⭐⭐ Four Seasons Hotel Gresham Palace Budapest"
  ],
  food: {
    halal: "Available",
    muslimFriendly: "Good in Budapest",
    dishes: "Goulash, Paprikash, Desserts",
    restaurants: [
      "Szeraj Turkish Restaurant",
      "Al-Amir Restaurant",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Namibia: {
  about: `Namibia is a unique destination in Southern Africa, known for its deserts, wildlife, dramatic landscapes, and places such as the Namib Desert and Etosha National Park.

The capital city is Windhoek, and the official language is English. Afrikaans and local languages are also commonly spoken.

The local currency is the Namibian Dollar, and the South African Rand is also accepted in Namibia.

Namibia has a population of over 2 million people and is considered a calm and scenic destination for travelers. Saudi citizens generally need a visa to visit Namibia for tourism.`,

  currencySymbol: "NAD",
  usd: false,
  eur: false,
  safety: "Medium",
  visa: true,

  transportation: [
    "Car rental",
    "Taxi",
    "Private tours",
    "Domestic flights"
  ],

  payment: "Cards are accepted in cities, cash is useful in remote areas",
  deliveryApps: "Limited",
  apps: "LEFA (ride-hailing), Maps.me, Google Maps",
  maps: "Google Maps works in cities; Maps.me is useful for remote areas",

  landmarks: [
    "Sossusvlei — red sand dunes and desert views",
    "Etosha National Park — wildlife safari",
    "Swakopmund — coastal town and activities",
    "Fish River Canyon — scenic canyon views"
  ],

  hotels: [
    "⭐ Chameleon Backpackers Windhoek",
    "⭐⭐ Town Lodge Windhoek",
    "⭐⭐⭐ Avani Windhoek Hotel",
    "⭐⭐⭐⭐ Strand Hotel Swakopmund",
    "⭐⭐⭐⭐⭐ Zannier Hotels Omaanda"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited, mainly in Windhoek",
    dishes: "Grilled meats, seafood, local stews",
    restaurants: [
      "Indian restaurants in Windhoek",
      "Vegetarian-friendly restaurants",
      "Seafood restaurants in Swakopmund"
    ]
  }
},
Botswana: {
  about: `Botswana is a unique destination in Southern Africa, known for its wildlife, safaris, and natural reserves such as the Okavango Delta and Chobe National Park.

The capital city is Gaborone, and the official language is English. Setswana is also widely spoken.

The local currency is the Botswana Pula, and cards are accepted in major areas.

Botswana has a population of around 2.5 million people and is considered a safe and peaceful destination for travelers. Saudi citizens typically need an eVisa to visit Botswana for tourism.`,

  currencySymbol: "BWP",
  usd: false,
  eur: false,
  safety: "High",
  visa: true,

  transportation: [
    "4x4 Safari vehicles",
    "Domestic flights",
    "Taxi",
    "Car rental"
  ],

  payment: "Cards accepted in cities, cash for remote areas",
  deliveryApps: "Limited",
  apps: "Google Maps, Maps.me",
  maps: "Google Maps works in cities, offline maps useful for safaris",

  landmarks: [
    "Okavango Delta — world-famous safari destination",
    "Chobe National Park — elephants and wildlife",
    "Makgadikgadi Salt Pans — unique landscapes",
    "Moremi Game Reserve — nature and safari"
  ],

  hotels: [
    "⭐ Elephant Trails Guesthouse",
    "⭐⭐ Travelodge Gaborone",
    "⭐⭐⭐ Cresta Lodge Gaborone",
    "⭐⭐⭐⭐ Chobe Safari Lodge",
    "⭐⭐⭐⭐⭐ Belmond Eagle Island Lodge"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited",
    dishes: "Seswaa, grilled meats, local dishes",
    restaurants: [
      "Indian restaurants in Gaborone",
      "Local traditional restaurants",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Zambia: {
  about: `Zambia is a unique destination in Southern Africa, known for its wildlife, national parks, and one of the largest waterfalls in the world, Victoria Falls.

The capital city is Lusaka, and the official language is English. Local languages are also widely spoken.

The local currency is the Zambian Kwacha, and cash is commonly used.

Zambia has a population of over 19 million people and is considered a safe and nature-focused destination. Saudi citizens typically need a visa to visit Zambia, which can be obtained online or on arrival.`,

  currencySymbol: "ZMW",
  usd: true,
  eur: false,
  safety: "Medium",
  visa: true,

  transportation: [
    "Taxi",
    "Minibus",
    "Domestic flights",
    "Car rental"
  ],

  payment: "Cash is preferred, cards in hotels",
  deliveryApps: "Limited",
  apps: "Yango, Maps.me",
  maps: "Google Maps works in cities",

  landmarks: [
    "Victoria Falls — one of the largest waterfalls",
    "South Luangwa National Park — safari destination",
    "Lower Zambezi National Park — river and wildlife",
    "Livingstone town — tourist hub near the falls"
  ],

  hotels: [
    "⭐ Jollyboys Backpackers Livingstone",
    "⭐⭐ Protea Hotel Lusaka",
    "⭐⭐⭐ Avani Victoria Falls Resort",
    "⭐⭐⭐⭐ Radisson Blu Lusaka",
    "⭐⭐⭐⭐⭐ Royal Livingstone Hotel by Anantara"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited",
    dishes: "Nshima, grilled meats, local stews",
    restaurants: [
      "Indian restaurants",
      "Local restaurants",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Madagascar: {
  about: `Madagascar is a unique island destination in the Indian Ocean, known for its biodiversity, wildlife, and landscapes found nowhere else in the world.

The capital city is Antananarivo, and the official languages are Malagasy and French. English is limited but used in tourist areas.

The local currency is the Malagasy Ariary, and cash is widely used.

Madagascar has a population of over 28 million people and is considered an adventurous destination for travelers. Saudi citizens typically need a visa on arrival or eVisa to visit Madagascar.`,

  currencySymbol: "MGA",
  usd: true,
  eur: true,
  safety: "Medium",
  visa: true,

  transportation: [
    "Taxi",
    "Bush taxi",
    "Domestic flights",
    "Private drivers"
  ],

  payment: "Cash is preferred",
  deliveryApps: "Very limited",
  apps: "Maps.me, Google Maps",
  maps: "Google Maps works in cities, offline maps recommended",

  landmarks: [
    "Avenue of the Baobabs — iconic trees",
    "Nosy Be — island beaches",
    "Isalo National Park — rock formations",
    "Andasibe National Park — lemurs and wildlife"
  ],

  hotels: [
    "⭐ Madagascar Underground Hostel",
    "⭐⭐ Hôtel Sakamanga",
    "⭐⭐⭐ Palissandre Hotel",
    "⭐⭐⭐⭐ Constance Tsarabanjina",
    "⭐⭐⭐⭐⭐ Miavana Resort"
  ],

  food: {
    halal: "Very limited",
    muslimFriendly: "Limited",
    dishes: "Rice dishes, seafood, grilled meats",
    restaurants: [
      "Indian restaurants",
      "Local Malagasy restaurants",
      "Vegetarian-friendly restaurants"
    ]
  }
},
Australia: {
  about: `Australia is a country in Oceania known for its modern cities, beaches, and unique wildlife such as kangaroos and koalas.

The capital city is Canberra, and the official language is English.

The currency is the Australian Dollar, and it is accepted everywhere.

Australia has a population of over 26 million people and is considered a safe and well-developed destination. Saudi citizens need a tourist visa before traveling.`,

  currencySymbol: "AUD",
  usd: false,
  eur: false,
  safety: "High",
  visa: true,

  transportation: [
    "Train (Metro & regional)",
    "Bus",
    "Tram (Melbourne)",
    "Uber & Taxi",
    "Domestic flights"
  ],

  payment: "Cards widely accepted",
  deliveryApps: "Uber Eats, DoorDash, Menulog",
  apps: "Uber, Google Maps, Opal, Myki",
  maps: "Google Maps works very well",

  landmarks: [
    "Sydney Opera House",
    "Great Barrier Reef",
    "Bondi Beach",
    "Melbourne City",
    "Uluru"
  ],

  hotels: [
    "⭐ Wake Up! Sydney Central",
    "⭐⭐ Ibis Budget Sydney Airport",
    "⭐⭐⭐ Holiday Inn Express Melbourne Southbank",
    "⭐⭐⭐⭐ Hyatt Regency Sydney",
    "⭐⭐⭐⭐⭐ Park Hyatt Sydney"
  ],

  food: {
    halal: "Available",
    muslimFriendly: "Good in major cities",
    dishes: "Seafood, BBQ, International food",
    restaurants: [
      "El Jannah",
      "Al Aseel Restaurant",
      "Cairo Takeaway Sydney"
    ]
  }
} ,
"New Zealand": {
  about: `New Zealand is an island country in Oceania known for its stunning nature, mountains, lakes, and outdoor activities.

The capital city is Wellington, and the main language is English.

The currency is the New Zealand Dollar.

New Zealand has a population of around 5 million people and is considered one of the safest countries in the world. Saudi citizens need a visa (NZeTA) before traveling.`,

  currencySymbol: "NZD",
  usd: false,
  eur: false,
  safety: "High",
  visa: true,

  transportation: [
    "Car rental",
    "Bus",
    "Domestic flights",
    "Taxi & Uber"
  ],

  payment: "Cards widely accepted",
  deliveryApps: "Uber Eats, DoorDash",
  apps: "Uber, Google Maps",
  maps: "Google Maps works very well",

  landmarks: [
    "Milford Sound",
    "Queenstown",
    "Lake Tekapo",
    "Auckland City",
    "Rotorua"
  ],

  hotels: [
    "⭐ Haka Lodge Auckland",
    "⭐⭐ Ibis Budget Auckland Central",
    "⭐⭐⭐ Holiday Inn Queenstown Remarkables Park",
    "⭐⭐⭐⭐ Novotel Rotorua Lakeside",
    "⭐⭐⭐⭐⭐ Hilton Auckland"
  ],

  food: {
    halal: "Available",
    muslimFriendly: "Good in main cities",
    dishes: "Seafood, Lamb, International food",
    restaurants: [
      "Little Turkish Cafe Auckland",
      "Halal Turkish Restaurant Wellington",
      "Petra Shawarma Queenstown"
    ]
  }
} ,
Fiji: {
  about: `Fiji is a tropical island country in the South Pacific Ocean known for its beaches, clear waters, and relaxed island lifestyle.

The capital city is Suva, and English is widely spoken.

The currency is the Fijian Dollar.

Fiji has a population of around 900,000 people and is considered a safe and peaceful destination. Saudi citizens can visit Fiji visa-free for short stays.`,
  currencySymbol: "FJD",
  usd: true,
  eur: false,
  safety: "High",
  visa: false,

  transportation: [
    "Taxi",
    "Bus",
    "Boat transfers",
    "Domestic flights"
  ],

  payment: "Cash and cards",
  deliveryApps: "Limited",
  apps: "Google Maps",
  maps: "Google Maps works in cities",

  landmarks: [
    "Nadi Beaches",
    "Mamanuca Islands",
    "Denarau Island",
    "Suva City",
    "Coral Coast"
  ],

  hotels: [
    "⭐ Bamboo Backpackers Nadi",
    "⭐⭐ Smugglers Cove Beach Resort",
    "⭐⭐⭐ Tanoa International Hotel",
    "⭐⭐⭐⭐ Sofitel Fiji Resort & Spa",
    "⭐⭐⭐⭐⭐ InterContinental Fiji Golf Resort & Spa"
  ],

  food: {
    halal: "Available",
    muslimFriendly: "Good",
    dishes: "Seafood, Curry, Rice dishes",
    restaurants: [
      "Saffron Tandoori Restaurant",
      "Indigo Indian Restaurant",
      "Grace Road Kitchen"
    ]
  }
}

};


function getImageName(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

async function fetchCountryData() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    if (!response.ok) {
      throw new Error("Country not found");
    }

    const data = await response.json();
    const country = data[0];
    const extra = extraDetails[countryName];

    if (!extra) {
      throw new Error("Extra details not found");
    }

    const flag = country.flags.png;
    const imageName = getImageName(countryName);

    let quickLine = [];

    quickLine.push(`💰 ${extra.currencySymbol}`);
    quickLine.push(`🛡 ${extra.safety}`);

    if (extra.visa) {
      quickLine.push("🛂 Visa required");
    } else {
      quickLine.push("🛂 Visa-free");
    }

    if (extra.usd) quickLine.push("💵 USD accepted");
    if (extra.eur) quickLine.push("💶 EUR accepted");

    countryDetails.innerHTML = `
      <div class="details-hero">
        <div class="details-title">
          <h1>${countryName} <img src="${flag}" alt="flag" class="flag-icon"></h1>

          <p class="about-text">${extra.about.replace(/\n/g, "<br>")}</p>

          <p class="quick-line">
            ${quickLine.join(" | ")}
          </p>
        </div>

        <div class="image-box">
          <img src="images/${imageName}.jpg" alt="${countryName}" class="country-main-img">
        </div>
      </div>

      <div class="details-cards">
        <div class="detail-card transport-card">
          <h3>🚆 Transportation</h3>
          <p><strong>Options:</strong> ${extra.transportation.join(" → ")}</p>
          <p><strong>Payment:</strong> ${extra.payment}</p>
          <p><strong>Delivery apps:</strong> ${extra.deliveryApps}</p>
          <p><strong>Apps:</strong> ${extra.apps || "Not available"}</p>
          <p><strong>Maps:</strong> ${extra.maps}</p>
        </div>

        <div class="detail-card">
          <h3>📍 Places to Walk Around</h3>
          <ul>
            ${extra.landmarks.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-card">
          <h3>🏨 Hotels</h3>
          <ul>
            ${extra.hotels.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-card">
          <h3>🍽 Restaurants & Muslim-Friendly Food</h3>
          <p><strong>Halal:</strong> ${extra.food.halal}</p>
          <p><strong>Muslim-friendly:</strong> ${extra.food.muslimFriendly}</p>
          <p><strong>Must try food:</strong> ${extra.food.dishes}</p>

          <p><strong>Recommended restaurants:</strong></p>
          <ul>
            ${extra.food.restaurants.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  } catch (error) {
    countryDetails.innerHTML = `
      <p class="form-message error">Error loading country details. Please try again.</p>
    `;
  }
}

fetchCountryData();