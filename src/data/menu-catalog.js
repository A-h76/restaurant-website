const OWNED = {
  provider: 'original-menu-asset',
  sourceUrl: 'owned',
  license: 'All rights reserved — Smart Cook Dera',
};

function dish(id, name, price, description, file = id, query) {
  return {
    id,
    name,
    price,
    description,
    image: `/images/menu/${file}.webp`,
    imageThumb: `/images/menu/${file}-sm.webp`,
    imageStatus: 'verified',
    imageSource: OWNED,
    imageSearchQuery: query || `${name} Pakistani restaurant dish`,
  };
}

function pending(id, name, price, description, query) {
  return {
    id,
    name,
    price,
    description,
    image: '',
    imageThumb: '',
    imageStatus: 'needs-review',
    imageSource: null,
    imageSearchQuery: query || `${name} Pakistani restaurant dish`,
  };
}

export const desiCategories = [
  { name: 'Mutton', urdu: 'مٹن', items: [
    dish('mutton-korma', 'Mutton Korma', 'Full: ₨4000', 'Tender bone-in mutton simmered in a golden onion-yogurt korma gravy with whole spices.', 'mutton-korma', 'mutton korma Pakistani restaurant dish'),
    dish('white-karahi-mutton', 'White Karahi (Mutton)', '₨1100', 'Bone-in mutton in a creamy white yogurt karahi gravy — safed karahi, not the red tomato style.', 'white-karahi-mutton', 'white mutton karahi Pakistani restaurant dish safed karahi'),
    dish('namkeen-rosh', 'Namkeen Rosh', '₨1100', 'Bone-in mutton in a clear, lightly salted pale broth with whole spices. A namkeen stew, not a thick karahi.', 'namkeen-rosh', 'namkeen rosh Pakistani mutton stew'),
    dish('cook-special-mutton', 'Cook Special', 'Half: ₨2200 / Full: ₨4100', 'Chef’s special mutton karahi with extra butter, cream, ginger and green chilli garnish.', 'cook-special-mutton', 'chef special mutton karahi Pakistani restaurant'),
    dish('mutton-white-karahi-hf', 'White Karahi', 'Half: ₨2100 / Full: ₨4000', 'Half or full white mutton karahi — creamy yogurt gravy in a traditional iron karahi.', 'white-karahi-mutton', 'white mutton karahi half full Pakistani'),
    dish('makhni-karahi-mutton', 'Makhni Karahi', 'Half: ₨2100 / Full: ₨4000', 'Mutton karahi in a velvety butter-tomato makhni gravy with cream swirls.', 'makhni-karahi-mutton', 'mutton makhni karahi Pakistani restaurant dish'),
    dish('black-pepper-karahi-mutton', 'Black Pepper Karahi', 'Half: ₨2100 / Full: ₨4000', 'Mutton karahi finished with cracked black pepper for a darker, pepper-forward masala.', 'black-pepper-karahi-mutton', 'black pepper mutton karahi Pakistani'),
    dish('mutton-karahi', 'Mutton Karahi', 'Half: ₨2000 / Full: ₨3800', 'Classic bone-in mutton karahi in a rich red tomato-yogurt gravy, served in an iron karahi.', 'mutton-karahi', 'mutton karahi Pakistani restaurant dish'),
    dish('mutton-dhamal-karahi', 'Mutton Dhamal Karahi', 'Half: ₨2000 / Full: ₨3800', 'Extra-spicy mutton karahi loaded with green chillies and red chilli — the dhamal style.', 'mutton-dhamal-karahi', 'mutton dhamal karahi spicy Pakistani'),
    dish('mutton-desi-ghee-karahi', 'Mutton Desi Ghee Karahi', 'Half: ₨2300 / Full: ₨4200', 'Traditional mutton karahi cooked with desi ghee for a glossy, rich finish.', 'mutton-desi-ghee-karahi', 'mutton desi ghee karahi Pakistani restaurant'),
  ]},
  { name: 'Desi Karahi', urdu: 'دیسی کڑاہی', items: [
    dish('desi-murgh-karahi-special', 'Desi Murgh Karahi Special', 'Half: ₨1900 / Full: ₨3800', 'Premium country-chicken karahi with extra butter, cream and garnish.', 'desi-murgh-karahi-special', 'desi murgh karahi special Pakistani'),
    dish('desi-murgh-white-karahi', 'Desi Murgh White Karahi', 'Half: ₨1900 / Full: ₨3800', 'Desi chicken in a creamy white yogurt karahi gravy. White karahi, not tomato-red.', 'desi-murgh-white-karahi', 'desi murgh white karahi Pakistani'),
    dish('desi-murgh-karahi', 'Desi Murgh Karahi', 'Half: ₨1000 / Full: ₨3500', 'Country chicken (desi murgh) karahi in a traditional red tomato gravy.', 'desi-murgh-karahi', 'desi murgh karahi Pakistani restaurant dish'),
    dish('desi-murgh-zehra-karahi', 'Desi Murgh Zehra Karahi', 'Half: ₨2100 / Full: ₨4000', 'Desi chicken karahi finished with roasted cumin (zeera) seeds.', 'desi-murgh-zehra-karahi', 'desi murgh zeera karahi cumin Pakistani'),
  ]},
  { name: 'Beef', urdu: 'بیف', items: [
    dish('beef-karahi', 'Karahi', 'Half: ₨1100 / Full: ₨2200', 'Beef cubes in a classic tomato-onion karahi gravy, served in an iron karahi.', 'beef-karahi', 'beef karahi Pakistani restaurant dish'),
    dish('beef-white-karahi', 'White Karahi', 'Half: ₨1200 / Full: ₨2300', 'Beef white karahi — cubed beef in a creamy white yogurt gravy.', 'beef-white-karahi', 'beef white karahi Pakistani restaurant'),
    dish('beef-special-karahi', 'Special Karahi', 'Half: ₨1200 / Full: ₨2300', 'Premium beef karahi with extra garnish of butter, ginger and green chilli.', 'beef-special-karahi', 'special beef karahi Pakistani'),
    dish('beef-butt-karahi', 'Butt Karahi', 'Half: ₨1200 / Full: ₨2300', 'Lahori-style butt karahi: oily tomato-forward beef karahi with sliced tomatoes and chillies.', 'beef-butt-karahi', 'butt karahi Lahori beef Pakistani restaurant'),
  ]},
  { name: 'Chicken Karahi', urdu: 'چکن کڑاہی', items: [
    dish('cook-special-chicken-karahi', 'Cook Special', 'Half: ₨1200 / Full: ₨2000', 'Chef’s special chicken karahi with extra butter, cream and kasuri methi.', 'cook-special-chicken-karahi', 'chef special chicken karahi Pakistani'),
    dish('chicken-white-karahi', 'White Karahi', 'Half: ₨1200 / Full: ₨2000', 'Bone-in chicken in a creamy white yogurt karahi gravy.', 'chicken-white-karahi', 'chicken white karahi Pakistani restaurant dish'),
    dish('chicken-makhni-karahi', 'Makhni Karahi', 'Half: ₨1200 / Full: ₨2000', 'Chicken karahi in a buttery tomato-cream makhni gravy.', 'chicken-makhni-karahi', 'chicken makhni karahi Pakistani'),
    dish('chicken-black-pepper-karahi', 'Black Pepper', 'Half: ₨1150 / Full: ₨1950', 'Chicken karahi finished with cracked black pepper.', 'chicken-black-pepper-karahi', 'chicken black pepper karahi Pakistani'),
    dish('chicken-karahi', 'Chicken Karahi', 'Half: ₨1000 / Full: ₨1800', 'Classic bone-in chicken karahi in a bright red tomato-yogurt gravy.', 'chicken-karahi', 'chicken karahi Pakistani restaurant dish'),
  ]},
  { name: 'Chicken Handi', urdu: 'چکن ہانڈی', items: [
    dish('cook-special-chicken-handi', 'Cook Special', 'Half: ₨1250 / Full: ₨2200', 'Chef’s special chicken handi served in a clay handi with extra cream and garnish.', 'cook-special-chicken-handi', 'chef special chicken handi Pakistani'),
    dish('chicken-handi-mughlai', 'Mughlai', 'Half: ₨1250 / Full: ₨2200', 'Chicken in a rich creamy Mughlai gravy with cashews and aromatic spices, served in a handi.', 'chicken-handi-mughlai', 'mughlai chicken handi Pakistani restaurant'),
    dish('chicken-handi-rajasthani', 'Rajasthani', 'Half: ₨1200 / Full: ₨2150', 'Spicier Rajasthani-style chicken handi with dried red chilli and yogurt.', 'chicken-handi-rajasthani', 'rajasthani chicken handi Pakistani'),
    dish('chicken-white-handi', 'White Handi', 'Half: ₨1200 / Full: ₨2150', 'Chicken in a creamy white yogurt gravy, served in a clay handi.', 'chicken-white-handi', 'white chicken handi Pakistani restaurant dish'),
    dish('chicken-hari-mirch-handi', 'Hari Mirch', 'Half: ₨1200 / Full: ₨2150', 'Green chilli chicken handi — a green hari-mirch gravy, not a red tomato curry.', 'chicken-hari-mirch-handi', 'hari mirch chicken handi green chilli Pakistani'),
    dish('chicken-handi', 'Chicken Handi', 'Half: ₨1150 / Full: ₨2000', 'Classic chicken handi in a rich orange-red gravy, served in a clay handi.', 'chicken-handi', 'chicken handi Pakistani restaurant dish'),
    dish('chicken-special-tawa', 'Special Tawa', '₨1300', 'Chicken cooked on a flat iron tawa in a semi-dry masala with onions and peppers.', 'chicken-special-tawa', 'special tawa chicken Pakistani restaurant'),
    dish('chicken-tikka-masala', 'Tikka Masala', '₨1100', 'Boneless chicken tikka in a creamy orange tikka masala gravy.', 'chicken-tikka-masala', 'chicken tikka masala Pakistani restaurant'),
  ]},
  { name: 'Dal Ka Tadka', urdu: 'دال کا تڑکہ', items: [
    dish('dal-makhni', 'Dal Makhni', '₨500', 'Slow-cooked black urad dal in a creamy buttery gravy with a cream swirl.', 'dal-makhni', 'dal makhani Pakistani restaurant dish'),
    dish('dal-mash', 'Dal Mash', '₨450', 'White urad (mash) dal with a garlic-cumin tadka. Creamy white, not yellow chana.', 'dal-mash', 'dal mash urad Pakistani restaurant'),
    dish('dal-chana', 'Dal Chana', '₨400', 'Yellow split chickpea (chana) dal with a cumin and dried-chilli tadka.', 'dal-chana', 'dal chana Pakistani restaurant dish'),
    dish('dal-shahi', 'Dal Shahi', '₨550', 'Royal-style mixed dal finished with cream, ghee and fried onions.', 'dal-shahi', 'dal shahi Pakistani restaurant dish'),
    dish('mix-vegetable', 'Mix Vegetable', '₨550', 'Mixed seasonal vegetables in a light tomato-onion masala.', 'mix-vegetable', 'mix vegetable sabzi Pakistani restaurant'),
  ]},
  { name: 'BBQ', urdu: 'باربی کیو', items: [
    dish('mutton-kebab', 'Mutton Kebab', '2 Pcs: ₨650 / 4 Pcs: ₨1200', 'Charcoal-grilled minced mutton seekh kebabs with onions, lemon and mint chutney.', 'mutton-kebab', 'mutton seekh kebab Pakistani BBQ restaurant'),
    dish('sheesh-tawook', 'Sheesh Tawook', '6 Pcs: ₨550 / 12 Pcs: ₨1100', 'Lemon-garlic yogurt marinated chicken cubes, grilled shish tawook style — pale, not red tikka.', 'sheesh-tawook', 'shish tawook Pakistani restaurant dish'),
    dish('malai-boti', 'Malai Boti', '6 Pcs: ₨550 / 12 Pcs: ₨1050', 'Creamy white malai-marinated grilled chicken cubes. Pale malai, not red tikka.', 'malai-boti', 'chicken malai boti Pakistani BBQ'),
    dish('afghani-boti', 'Afghani Boti', '6 Pcs: ₨550 / 12 Pcs: ₨1000', 'Chicken boti in a pale Afghani yogurt-green chilli marinade, charcoal grilled.', 'afghani-boti', 'afghani boti chicken Pakistani BBQ'),
    dish('tikka-boti', 'Tikka Boti', '6 Pcs: ₨450 / 12 Pcs: ₨850', 'Classic red-orange tandoori chicken tikka cubes with char marks.', 'tikka-boti', 'chicken tikka boti Pakistani BBQ restaurant'),
    dish('kalmi-tikka', 'Kalmi Tikka', '3 Pcs: ₨600 / 6 Pcs: ₨1100', 'Tandoori marinated chicken drumsticks (kalmi) — bone-in legs, not cubes.', 'kalmi-tikka', 'kalmi tikka chicken drumstick Pakistani BBQ'),
    dish('cheese-kebab', 'Cheese Kebab', '2 Pcs: ₨600 / 4 Pcs: ₨1100', 'Grilled minced kebabs with melted cheese — cheese is the signature.', 'cheese-kebab', 'cheese kebab Pakistani BBQ restaurant'),
    dish('reshmi-kebab', 'Reshmi Kebab', '2 Pcs: ₨550 / 4 Pcs: ₨950', 'Silky pale minced chicken kebabs. Light reshmi colour, not dark seekh.', 'reshmi-kebab', 'reshmi kebab Pakistani BBQ restaurant'),
    dish('afghani-kebab', 'Afghani Kebab', '2 Pcs: ₨500 / 4 Pcs: ₨1000', 'Minced kebabs in a pale greenish Afghani yogurt-herb marinade.', 'afghani-kebab', 'afghani kebab Pakistani BBQ'),
    dish('chicken-kebab', 'Chicken Kebab', '2 Pcs: ₨450 / 4 Pcs: ₨900', 'Grilled minced chicken seekh kebabs with herb flecks.', 'chicken-kebab', 'chicken seekh kebab Pakistani BBQ'),
    dish('tikka-piece-chest', 'Tikka Piece (Chest)', '₨400', 'One tandoori chicken breast (chest) piece with red tikka marinade.', 'tikka-piece-chest', 'tandoori chicken chest tikka piece Pakistani'),
    dish('tikka-piece-leg', 'Tikka Piece (Leg)', '₨380', 'One tandoori chicken leg piece with red tikka marinade.', 'tikka-piece-leg', 'tandoori chicken leg tikka piece Pakistani'),
    dish('malai-piece-chest', 'Malai Piece (Chest)', '₨500', 'One creamy malai-marinated grilled chicken breast piece.', 'malai-piece-chest', 'malai chicken chest piece Pakistani BBQ'),
    dish('malai-piece-leg', 'Malai Piece (Leg)', '₨450', 'One creamy malai-marinated grilled chicken leg piece.', 'malai-piece-leg', 'malai chicken leg piece Pakistani BBQ'),
    dish('grill-fish', 'Grill Fish', '₨1500/KG', 'Whole charcoal-grilled fish with lemon and herbs, sold by the kilogram.', 'grill-fish', 'grilled whole fish Pakistani restaurant'),
    dish('bbq-mix-platter', 'BBQ Mix Platter', '₨4500', 'A mixed BBQ platter of seekh kebabs, tikka, malai boti and grilled pieces with chutney and onions.', 'bbq-mix-platter', 'Pakistani BBQ mix platter seekh kebab chicken tikka'),
  ]},
  { name: 'Rice', urdu: 'چاول', items: [
    dish('mutton-kabli-pulao', 'Mutton Kabli Pulao', '₨1100', 'Afghan-style kabuli pulao with mutton, carrots, raisins and almonds — brown rice, not yellow biryani.', 'mutton-kabli-pulao', 'mutton kabuli pulao Pakistani restaurant'),
    dish('jangli-pulao', 'Jangli Pulao', '₨1000', 'Rustic hunter-style pulao with dark spiced rice and bone-in meat. Not biryani, not kabuli.', 'jangli-pulao', 'jangli pulao Pakistani restaurant dish'),
    dish('chicken-biryani', 'Chicken Biryani', 'Half: ₨500 / Full: ₨850', 'Pakistani chicken biryani — saffron rice layered with bone-in chicken, fried onions and mint.', 'chicken-biryani', 'chicken biryani Pakistani restaurant'),
    dish('chicken-fried-rice', 'Chicken Fried Rice', 'Half: ₨450 / Full: ₨750', 'Wok-fried rice with diced chicken, egg, spring onion and vegetables. Not biryani.', 'chicken-fried-rice', 'chicken fried rice Pakistani Chinese restaurant'),
  ]},
  { name: "Soup's", urdu: 'سوپ', items: [
    dish('cook-special-soup', 'Cook Special Soup', 'Half: ₨600 / Full: ₨1100', 'Chef’s special creamy soup with a richer garnish than the regular bowls.', 'cook-special-soup', 'chef special soup Pakistani restaurant'),
    dish('hot-and-sour-soup', 'Hot & Sour', 'Half: ₨550 / Full: ₨1000', 'Indo-Chinese hot and sour soup — reddish-brown, tangy and spicy.', 'hot-and-sour-soup', 'hot and sour soup Pakistani Chinese restaurant'),
    dish('corn-soup', 'Corn Soup', 'Half: ₨550 / Full: ₨1000', 'Creamy yellow sweet corn soup with visible corn kernels.', 'corn-soup', 'corn soup Pakistani restaurant'),
    dish('vegetable-soup', 'Vegetable Soup', 'Half: ₨500 / Full: ₨900', 'Clear vegetable broth with carrots, beans, cabbage and herbs.', 'vegetable-soup', 'vegetable soup Pakistani restaurant'),
  ]},
  { name: 'Tandoor', urdu: 'تندور', items: [
    dish('chicken-cheese-naan', 'Chicken Cheese Naan', '₨400', 'Tandoori naan stuffed with spiced chicken and melted cheese.', 'chicken-cheese-naan', 'chicken cheese naan Pakistani tandoor'),
    dish('cheese-naan', 'Cheese Naan', '₨350', 'Tandoori naan stuffed with melted cheese — no chicken.', 'cheese-naan', 'cheese naan Pakistani restaurant'),
    dish('chicken-naan', 'Chicken Naan', '₨350', 'Tandoori naan stuffed with spiced shredded chicken.', 'chicken-naan', 'chicken naan Pakistani tandoor restaurant'),
    dish('tandoor-paratha', 'Paratha', '₨150', 'Flaky pan-fried layered paratha, glistening with ghee.', 'paratha', 'paratha Pakistani restaurant'),
    dish('kalwanji-naan', 'Kalwanji Naan', '₨100', 'Tandoori naan topped with black nigella (kalonji) seeds.', 'kalwanji-naan', 'kalonji naan Pakistani tandoor'),
    dish('garlic-naan', 'Garlic Naan', '₨100', 'Tandoori naan topped with minced garlic and coriander.', 'garlic-naan', 'garlic naan Pakistani restaurant'),
    dish('roghni-naan', 'Roghni Naan', '₨80', 'Soft, ghee-brushed tandoori naan with sesame — the classic roghni naan.', 'roghni-naan', 'roghni naan Pakistani restaurant'),
    dish('roti', 'Roti (Per Head)', '₨80', 'Whole-wheat tandoori roti. Darker and thinner than naan.', 'roti', 'tandoori roti Pakistani restaurant'),
  ]},
  { name: 'Chinese', urdu: 'چائنیز', items: [
    dish('shashlik-with-rice', 'Shashlik with Rice', '₨900', 'Grilled chicken and pepper shashlik skewers served with rice.', 'shashlik-with-rice', 'chicken shashlik with rice Pakistani Chinese'),
    dish('chicken-manchurian', 'Chicken Manchurian', '₨900', 'Fried chicken balls in a glossy Indo-Chinese Manchurian gravy.', 'chicken-manchurian', 'chicken manchurian Pakistani Chinese restaurant'),
    dish('chilli-dry-with-rice', 'Chilli Dry with Rice', '₨900', 'Semi-dry chilli chicken with peppers, served with rice.', 'chilli-dry-with-rice', 'chilli dry chicken with rice Pakistani Chinese'),
  ]},
  { name: 'Salad & Raita', urdu: 'سلاد اور رائتہ', items: [
    dish('russian-salad', 'Russian Salad', '₨1000', 'Creamy mayonnaise potato salad with carrots, peas and apple.', 'russian-salad', 'russian salad Pakistani restaurant'),
    dish('kachumber-salad', 'Kachumber Salad', '₨150', 'Chopped cucumber, tomato, onion and green chilli with lemon. No mayonnaise.', 'kachumber-salad', 'kachumber salad Pakistani restaurant'),
    dish('fresh-salad', 'Fresh Salad', '₨80', 'Sliced cucumber, tomato, onion and lemon — a simple fresh side salad.', 'fresh-salad', 'fresh salad Pakistani restaurant'),
    dish('white-raita', 'White Raita', 'Small: ₨80 / Full: ₨450', 'Plain yogurt raita with a light cumin sprinkle. White, not mint-green.', 'white-raita', 'white raita Pakistani restaurant'),
    dish('mint-raita', 'Mint Raita', 'Small: ₨80 / Full: ₨450', 'Yogurt raita blended with mint — distinctly green.', 'mint-raita', 'mint raita Pakistani restaurant'),
  ]},
  { name: 'Drinks', urdu: 'ڈرنکس', items: [
    pending('pepsi-345ml', 'Pepsi 345ml', '₨80', 'A chilled 345ml bottle of Pepsi served with the meal.', 'Pepsi 345ml bottle'),
    dish('half-liter-cold-drink', 'Half Liter (500ml)', '₨100', 'A 500ml cold drink.', 'half-liter-cold-drink', '500ml cold drink Pakistani restaurant'),
    dish('coke-tin-pack', 'Coke Tin Pack', '₨120', 'Coca-Cola tin. Branded product photography is held for trademark-safe artwork.', 'coke-tin-pack', 'Coke tin pack Pakistani restaurant'),
    dish('water-small', 'Water Small', '₨70', 'Small bottled drinking water.', 'water-small', 'small bottled water restaurant'),
    dish('water-large', 'Water Large', '₨120', 'Large bottled drinking water.', 'water-large', 'large bottled water restaurant'),
    dish('coke-1-5-ltr', 'Coke 1.5 Ltr', '₨210', '1.5 litre Coca-Cola bottle. Branded photography is held for trademark-safe artwork.', 'coke-1-5-ltr', 'Coke 1.5 liter Pakistani restaurant'),
    dish('coke-1-ltr', 'Coke 1 Ltr', '₨170', '1 litre Coca-Cola bottle. Branded photography is held for trademark-safe artwork.', 'coke-1-ltr', 'Coke 1 liter Pakistani restaurant'),
    dish('mint-margarita', 'Mint Margarita', '₨220', 'Pakistani mint margarita mocktail — frothy mint lemonade with a salted rim. No alcohol.', 'mint-margarita', 'mint margarita mocktail Pakistani restaurant'),
  ]},
  { name: 'Nashta', urdu: 'ناشتہ', items: [
    dish('lassi-jug', 'Lassi Jag', '₨500', 'A jug of sweet yogurt lassi for sharing.', 'lassi-jug', 'lassi jug Pakistani restaurant'),
    dish('lassi-glass', 'Lassi Glass', '₨150', 'A single glass of sweet yogurt lassi.', 'lassi-glass', 'lassi glass Pakistani restaurant'),
    dish('special-chai', 'Special Chai', '₨120', 'Creamy special doodh patti with extra malai.', 'special-chai', 'special chai Pakistani restaurant'),
    dish('simple-chai', 'Simple Chai', '₨80', 'Regular milk tea — simple doodh patti.', 'simple-chai', 'simple chai Pakistani restaurant'),
    dish('lemon-qawa', 'Lemon Qawa', '₨100', 'Light lemon qahwa — golden lemon tea, not milky chai.', 'lemon-qawa', 'lemon qahwa Pakistani restaurant'),
    dish('nashta-paratha', 'Paratha', '₨100', 'Breakfast paratha — flaky layered fried flatbread.', 'paratha', 'paratha Pakistani breakfast'),
    dish('omelette', 'Omelette', '₨130', 'Masala omelette with onion, tomato and green chilli.', 'omelette', 'masala omelette Pakistani restaurant'),
    dish('half-fry-egg', 'Half Fry (Egg)', '₨130', 'Sunny-side-up fried egg with a runny yolk.', 'half-fry-egg', 'half fry egg Pakistani restaurant'),
  ]},
  { name: 'Dessert', urdu: 'ڈیزرٹ', items: [
    dish('lah-e-shirin', 'Lah-e-Shirin', 'Small: ₨550 / Full: ₨2000', 'Lab-e-shireen — creamy dessert with vermicelli, jelly cubes, fruit and nuts.', 'lah-e-shirin', 'lab e shireen Pakistani dessert'),
    dish('ice-cream', 'Ice Cream', '₨120', 'Scoops of ice cream served in a dessert cup.', 'ice-cream', 'ice cream Pakistani restaurant dessert'),
    dish('gulab-jamun', 'Gulab Jamun', '₨80', 'Fried milk dumplings soaked in sugar syrup.', 'gulab-jamun', 'gulab jamun Pakistani dessert'),
  ]},
];

export const fastFoodCategories = [
  { name: "Premium Pizza's", note: 'Sizes available — M: ₨1150 / L: ₨1750', items: [
    dish('lava-pizza', 'Lava Pizza', null, 'Stuffed-crust pizza with molten cheese lava pulling from the crust.', 'lava-pizza', 'lava pizza Pakistani restaurant'),
    dish('mati-boti-pizza', 'Mati Boti Pizza', null, 'Pizza topped with grilled chicken boti chunks and melted cheese.', 'mati-boti-pizza', 'mati boti pizza Pakistani restaurant'),
    dish('royal-pizza', 'Royal Pizza', null, 'Loaded premium pizza with mixed chicken, extra cheese and peppers.', 'royal-pizza', 'royal pizza Pakistani restaurant'),
    dish('stuff-crust-pizza', 'Stuff Crust', null, 'Pizza with a cheese-stuffed crust — melted cheese inside the rim.', 'stuff-crust-pizza', 'stuffed crust pizza Pakistani restaurant'),
    dish('crispy-pizza', 'Crispy', null, 'Thin crispy-crust pizza with chicken and cheese.', 'crispy-pizza', 'crispy thin crust pizza Pakistani restaurant'),
    dish('crown-crust-pizza', 'Crown Crust', null, 'Pizza with a raised crown-style crust around the edge.', 'crown-crust-pizza', 'crown crust pizza Pakistani restaurant'),
  ]},
  { name: "Special Pizza's", note: 'S: ₨550 / M: ₨1050 / L: ₨1550', items: [
    dish('cook-special-pizza', 'Cook Special', null, 'Chef’s loaded special pizza with extra toppings and cheese.', 'cook-special-pizza', 'chef special pizza Pakistani restaurant'),
    dish('afghani-pizza', 'Afghani', null, 'Pizza with pale Afghani-style chicken, green chilli and white sauce.', 'afghani-pizza', 'afghani pizza Pakistani restaurant'),
    dish('kebabish-pizza', 'Kebabish', null, 'Pizza topped with sliced seekh kebab and melted cheese.', 'kebabish-pizza', 'kebabish pizza seekh kebab Pakistani'),
    dish('supreme-pizza', 'Supreme', null, 'Supreme pizza loaded with chicken, peppers, onions, olives and mushrooms.', 'supreme-pizza', 'supreme pizza Pakistani restaurant'),
    dish('nawabi-pizza', 'Nawabi', null, 'Creamy Nawabi-style pizza with white sauce, chicken and extra cheese.', 'nawabi-pizza', 'nawabi pizza Pakistani restaurant'),
  ]},
  { name: "Regular Pizza's", note: 'S: ₨450 / M: ₨950 / L: ₨1400', items: [
    dish('tikka-pizza', 'Tikka', null, 'Pizza topped with red tandoori chicken tikka cubes, peppers and onions.', 'tikka-pizza', 'chicken tikka pizza Pakistani restaurant'),
    dish('fajita-pizza', 'Fajita', null, 'Pizza topped with fajita chicken strips and mixed bell peppers.', 'fajita-pizza', 'fajita pizza Pakistani restaurant'),
    dish('achari-pizza', 'Achari', null, 'Achari pizza with pickle-spice chicken, mustard seed and fennel notes.', 'achari-pizza', 'achari pizza Pakistani restaurant'),
    dish('vegetable-pizza', 'Vegetable', null, 'Vegetarian pizza with peppers, onions, mushrooms, olives and tomato — no meat.', 'vegetable-pizza', 'vegetable pizza Pakistani restaurant'),
  ]},
  { name: "Burger's", items: [
    dish('grilled-burger', 'Grilled Burger', '₨650', 'Burger with a grilled chicken fillet — grill marks, not fried zinger breading.', 'grilled-burger', 'grilled chicken burger Pakistani restaurant'),
    dish('cook-special-burger', 'Cook Special Burger', '₨600', 'Chef’s loaded special burger with extra cheese and stacked fillings.', 'cook-special-burger', 'chef special burger Pakistani restaurant'),
    dish('tower-burger', 'Tower Burger', '₨600', 'Tall double-patty tower burger.', 'tower-burger', 'tower burger Pakistani restaurant'),
    dish('pizza-burger', 'Pizza Burger', '₨600', 'Burger finished with mozzarella, pizza sauce and oregano.', 'pizza-burger', 'pizza burger Pakistani restaurant'),
    dish('zinger-burger', 'Zinger', '₨380', 'Spicy crispy fried chicken burger with craggy breading.', 'zinger-burger', 'zinger burger Pakistani restaurant'),
    dish('patty-burger', 'Patty Burger', '₨250', 'Simple small patty burger — a lighter, plainer bun-and-patty.', 'patty-burger', 'patty burger Pakistani restaurant'),
  ]},
  { name: "Shawarma's", items: [
    dish('cook-special-shawarma', 'Cook Special', '₨400', 'Loaded chef’s special shawarma with extra fillings and sauce.', 'cook-special-shawarma', 'chef special shawarma Pakistani restaurant'),
    dish('grilled-shawarma', 'Grilled', '₨400', 'Shawarma wrap with grilled chicken strips, garlic sauce and salad.', 'grilled-shawarma', 'grilled chicken shawarma Pakistani'),
    dish('zinger-shawarma', 'Zinger', '₨350', 'Shawarma filled with crispy fried zinger-style chicken, not grilled meat.', 'zinger-shawarma', 'zinger shawarma Pakistani restaurant'),
    dish('chicken-shawarma', 'Chicken', '₨200', 'Classic chicken shawarma wrap with garlic sauce.', 'chicken-shawarma', 'chicken shawarma Pakistani restaurant'),
  ]},
  { name: "Pasta's", items: [
    dish('crispy-pasta', 'Crispy', 'Half: ₨500 / Full: ₨750', 'Pasta topped with crispy fried chicken pieces.', 'crispy-pasta', 'crispy pasta fried chicken Pakistani'),
    dish('special-pasta', 'Special', 'Half: ₨450 / Full: ₨700', 'Loaded special pasta with chicken strips, peppers and herbs.', 'special-pasta', 'special pasta Pakistani restaurant'),
    dish('cheesy-pasta', 'Cheesy', 'Half: ₨400 / Full: ₨600', 'Pasta in a thick melted cheese sauce — extra cheesy, no fried chicken.', 'cheesy-pasta', 'cheesy pasta Pakistani restaurant'),
  ]},
  { name: "Paratha's & Rolls", items: [
    dish('cook-special-paratha', 'Cook Special Paratha', '₨500 / ₨400', 'Loaded stuffed paratha roll with extra chicken, cheese and sauces.', 'cook-special-paratha-roll', 'cook special paratha roll Pakistani'),
    dish('malai-roll', 'Malai Roll', '₨450 / ₨450', 'Paratha roll filled with creamy malai chicken boti.', 'malai-roll', 'malai roll Pakistani restaurant'),
    dish('kebab-roll', 'Kebab Roll', '₨400 / ₨380', 'Paratha roll wrapped around sliced seekh kebab, onion and chutney.', 'kebab-roll', 'kebab roll Pakistani restaurant'),
    dish('twister-roll', 'Twister Roll', '₨350', 'Tortilla twister with crispy fried chicken strips, lettuce and mayo.', 'twister-roll', 'twister roll Pakistani restaurant'),
    dish('chicken-roll', 'Chicken Roll', '₨280', 'Simple chicken paratha roll.', 'chicken-roll', 'chicken roll Pakistani restaurant'),
  ]},
  { name: "Sandwich's", items: [
    dish('cook-special-sandwich', 'Cook Special', '₨700', 'Loaded chef’s special sandwich with extra stacked fillings.', 'cook-special-sandwich', 'chef special sandwich Pakistani restaurant'),
    dish('grilled-sandwich', 'Grilled', '₨650', 'Toasted grilled sandwich with grill marks, melted cheese and chicken.', 'grilled-sandwich', 'grilled sandwich Pakistani restaurant'),
    dish('club-sandwich', 'Club', '₨450', 'Triple-layer club sandwich cut into triangles.', 'club-sandwich', 'club sandwich Pakistani restaurant'),
  ]},
  { name: 'Fries', items: [
    dish('masala-fries', 'Masala Fries', 'S: ₨220 / M: ₨300 / L: ₨400', 'French fries tossed in red chilli masala spice.', 'masala-fries', 'masala fries Pakistani restaurant'),
    dish('salted-fries', 'Salted Fries', 'S: ₨200 / M: ₨260 / L: ₨350', 'Classic golden salted fries — no masala, no cheese.', 'salted-fries', 'salted fries Pakistani restaurant'),
    dish('loaded-fries', 'Loaded Fries', '₨650', 'Fries loaded with melted cheese, chicken and sauces.', 'loaded-fries', 'loaded fries Pakistani restaurant'),
    dish('extra-topping', 'Extra Topping', 'S: ₨100 / M: ₨150 / L: ₨200', 'Extra cheese and chicken topping add-on.', 'extra-topping', 'extra pizza topping Pakistani restaurant'),
    dish('cheese-slice', 'Cheese Slice', '₨50', 'A single cheese slice add-on.', 'cheese-slice', 'cheese slice restaurant add on'),
  ]},
  { name: "Crispy's", items: [
    dish('hot-wings', 'Hot Wings', '2 Pcs: ₨200 / 5 Pcs: ₨500', 'Crispy fried chicken wings in a glossy hot sauce.', 'hot-wings', 'hot wings Pakistani restaurant'),
    dish('grilled-wings', 'Grilled Wings', '3 Pcs: ₨320 / 5 Pcs: ₨500', 'Char-grilled chicken wings — not fried, not hot-sauce coated.', 'grilled-wings', 'grilled wings Pakistani restaurant'),
    dish('nuggets', 'Nuggets', '2 Pcs: ₨220 / 5 Pcs: ₨400', 'Golden breaded chicken nuggets.', 'nuggets', 'chicken nuggets Pakistani restaurant'),
    dish('crispy-chest-piece', 'Chest Piece', '₨380', 'Crispy fried chicken breast piece.', 'crispy-chest-piece', 'fried chicken chest piece Pakistani'),
    dish('crispy-leg-piece', 'Leg Piece', '₨350', 'Crispy fried chicken leg / drumstick piece.', 'crispy-leg-piece', 'fried chicken leg piece Pakistani'),
    dish('garlic-mayo', 'Garlic Mayo', '₨100', 'Creamy garlic mayonnaise dip.', 'garlic-mayo', 'garlic mayo dip Pakistani restaurant'),
    dish('dip-sauce', 'Dip Sauce', '₨50', 'Spicy red chilli dip sauce.', 'dip-sauce', 'dip sauce Pakistani restaurant'),
  ]},
  { name: 'Finger Fish', items: [
    dish('finger-fish', 'Finger Fish', 'Half: ₨1400 / Full: ₨2500', 'Golden fried fish fingers / goujons with lemon. Not whole grilled fish.', 'finger-fish', 'finger fish fried Pakistani restaurant'),
  ]},
];

export const deals = [
  { ...dish('deal-a', 'Deal A', '₨1000', 'Two small pizzas — tikka and fajita — with a 2 litre drink.', 'deal-a', 'tikka fajita pizza combo drink Pakistani'), items: ['1x Tikka Pizza (S)', '1x Fajita Pizza (S)', '1x Drink 2 Ltr'] },
  { ...dish('deal-b', 'Deal B', '₨840', 'Small tikka pizza, one zinger burger and a 300ml drink.', 'deal-b', 'tikka pizza zinger burger combo Pakistani'), items: ['1x Tikka Pizza (S)', '1x Zinger Burger', '1x Drink 300ml'] },
  { ...dish('deal-1', 'Deal 1', '₨400', 'Patty burger, regular fries and a 300ml drink.', 'deal-1', 'patty burger fries drink combo Pakistani'), items: ['1x Patty Burger', '1x Fries (Regular)', '1x Drink 300ml'] },
  { ...dish('deal-2', 'Deal 2', '₨500', 'Zinger burger, regular fries and a 300ml drink.', 'deal-2', 'zinger burger fries drink combo Pakistani'), items: ['1x Zinger Burger', '1x Fries (Regular)', '1x Drink 300ml'] },
  { ...dish('deal-3', 'Deal 3', '₨750', 'Two zinger burgers and a 300ml drink.', 'deal-3', 'two zinger burgers combo Pakistani'), items: ['2x Zinger Burger', '1x Drink 300ml'] },
  { ...dish('deal-4', 'Deal 4', '₨650', 'Two tower burgers and a 300ml drink.', 'deal-4', 'two tower burgers combo Pakistani'), items: ['2x Tower Burger', '1x Drink 300ml'] },
  { ...dish('deal-5', 'Deal 5', '₨550', 'Ten hot wings and a 300ml drink.', 'deal-5', 'hot wings drink combo Pakistani'), items: ['10 Pcs Hot Wings', '1x Drink 300ml'] },
  { ...dish('deal-6', 'Deal 6', '₨750', 'Zinger burger, one fried leg piece and a 300ml drink.', 'deal-6', 'zinger burger leg piece combo Pakistani'), items: ['1x Zinger Burger', '1x Leg Piece', '1x Drink 300ml'] },
  { ...dish('deal-7', 'Deal 7', '₨1050', 'Medium tikka pizza and a 2 litre drink.', 'deal-7', 'medium tikka pizza drink combo Pakistani'), items: ['1x Tikka Pizza (M)', '1x Drink 2 Ltr'] },
  { ...dish('deal-8', 'Deal 8', '₨2900', 'Large tikka pizza, large fajita pizza and a 1.5 litre drink.', 'deal-8', 'two large pizzas combo Pakistani'), items: ['1x Tikka Pizza (L)', '1x Fajita Pizza (L)', '1x Drink 1.5 Ltr'] },
  { ...dish('deal-9', 'Deal 9', '₨610', 'Small tikka pizza, regular fries and a 300ml drink.', 'deal-9', 'tikka pizza fries drink combo Pakistani'), items: ['1x Tikka Pizza (S)', '1x Fries Regular', '1x Drink 300ml'] },
  { ...dish('deal-10', 'Deal 10', '₨1550', 'Large tikka pizza with a 1.5 litre drink and a 300ml drink.', 'deal-10', 'large tikka pizza drinks combo Pakistani'), items: ['1x Tikka Pizza (L)', '1x Drink 1.5 Ltr', '1x Drink 300ml'] },
  { ...dish('deal-11', 'Deal 11', '₨1900', 'Zinger burger, full fries and a 1.5 litre drink.', 'deal-11', 'zinger burger full fries combo Pakistani'), items: ['1x Zinger Burger', '1x Fries (Full)', '1x Drink 1.5 Ltr'] },
  { ...dish('deal-12', 'Deal 12', '₨1950', 'Two small pizzas — tikka and fajita — with a 1.5 litre drink.', 'deal-12', 'two small pizzas 1.5 litre combo Pakistani'), items: ['1x Tikka Pizza (S)', '1x Fajita Pizza (S)', '1x Drink 1.5 Ltr'] },
];

export const dealCategory = { name: 'Deals', urdu: 'ڈیلز', items: deals };

export function allMenuCategories() {
  return [...desiCategories, ...fastFoodCategories, dealCategory];
}
