let foods = [
    {
      id: 1,
      foodName: "Margherita Pizza",
      foodDescription: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
      rating: 4.5,
      deliveryTime: "25 minutes",
      imageUrl: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      foodName: "Veggie Burger",
      foodDescription: "Grilled veggie patty with lettuce, tomato, onion, and special sauce.",
      rating: 4.2,
      deliveryTime: "30 minutes",
      imageUrl: "https://picsum.photos/seed/burger/400/300"
    },
    {
      id: 3,
      foodName: "Chicken Biryani",
      foodDescription: "Fragrant basmati rice cooked with marinated chicken and spices.",
      rating: 4.7,
      deliveryTime: "45 minutes",
      imageUrl: "https://picsum.photos/seed/biryani/400/300"
    },
    {
      id: 4,
      foodName: "Pasta Alfredo",
      foodDescription: "Creamy Alfredo pasta made with parmesan cheese and butter.",
      rating: 4.3,
      deliveryTime: "20 minutes",
      imageUrl: "https://picsum.photos/seed/alfredo/400/300"
    },
    {
      id: 5,
      foodName: "Sushi Platter",
      foodDescription: "Assorted sushi rolls with fresh salmon, tuna, and avocado.",
      rating: 4.8,
      deliveryTime: "35 minutes",
      imageUrl: "https://picsum.photos/seed/sushi/400/300"
    },
    {
      id: 6,
      foodName: "Paneer Tikka",
      foodDescription: "Chargrilled paneer cubes marinated in yogurt and spices.",
      rating: 4.6,
      deliveryTime: "18 minutes",
      imageUrl: "https://picsum.photos/seed/paneertikka/400/300"
    },
    {
      id: 7,
      foodName: "Caesar Salad",
      foodDescription: "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
      rating: 4.1,
      deliveryTime: "15 minutes",
      imageUrl: "https://picsum.photos/seed/caesarsalad/400/300"
    },
    {
      id: 8,
      foodName: "Tacos",
      foodDescription: "Mexican-style tacos with seasoned beef, salsa, and cheese.",
      rating: 4.4,
      deliveryTime: "22 minutes",
      imageUrl: "https://picsum.photos/seed/tacos/400/300"
    },
    {
      id: 9,
      foodName: "Ramen Noodles",
      foodDescription: "Japanese noodle soup with broth, pork, egg, and vegetables.",
      rating: 4.6,
      deliveryTime: "40 minutes",
      imageUrl: "https://picsum.photos/seed/ramen/400/300"
    },
    {
      id: 10,
      foodName: "Fried Chicken",
      foodDescription: "Crispy golden fried chicken with a hint of spices.",
      rating: 4.7,
      deliveryTime: "28 minutes",
      imageUrl: "https://picsum.photos/seed/friedchicken/400/300"
    },
    {
      id: 11,
      foodName: "Pav Bhaji",
      foodDescription: "Mumbai-style spicy mashed vegetable curry with buttered bread.",
      rating: 4.5,
      deliveryTime: "20 minutes",
      imageUrl: "https://picsum.photos/seed/pavbhaji/400/300"
    },
    {
      id: 12,
      foodName: "Shawarma Roll",
      foodDescription: "Middle Eastern wrap filled with marinated chicken and sauces.",
      rating: 4.4,
      deliveryTime: "18 minutes",
      imageUrl: "https://picsum.photos/seed/shawarma/400/300"
    },
    {
      id: 13,
      foodName: "Chole Bhature",
      foodDescription: "Spiced chickpeas served with fluffy fried bread.",
      rating: 4.6,
      deliveryTime: "26 minutes",
      imageUrl: "https://picsum.photos/seed/cholebhature/400/300"
    },
    {
      id: 14,
      foodName: "Pancakes",
      foodDescription: "Fluffy pancakes topped with maple syrup and butter.",
      rating: 4.3,
      deliveryTime: "16 minutes",
      imageUrl: "https://picsum.photos/seed/pancakes/400/300"
    },
    {
      id: 15,
      foodName: "Fish Curry",
      foodDescription: "Spicy South Indian fish curry cooked with tamarind.",
      rating: 4.5,
      deliveryTime: "38 minutes",
      imageUrl: "https://picsum.photos/seed/fishcurry/400/300"
    },
    {
      id: 16,
      foodName: "Spring Rolls",
      foodDescription: "Crispy rolls stuffed with vegetables and served with chili dip.",
      rating: 4.2,
      deliveryTime: "12 minutes",
      imageUrl: "https://picsum.photos/seed/springrolls/400/300"
    },
    {
      id: 17,
      foodName: "Idli Sambar",
      foodDescription: "Soft idlis served with hot sambar and coconut chutney.",
      rating: 4.6,
      deliveryTime: "14 minutes",
      imageUrl: "https://picsum.photos/seed/idlisambar/400/300"
    },
    {
      id: 18,
      foodName: "Steak",
      foodDescription: "Juicy grilled beef steak cooked to perfection.",
      rating: 4.7,
      deliveryTime: "50 minutes",
      imageUrl: "https://picsum.photos/seed/steak/400/300"
    },
    {
      id: 19,
      foodName: "Chocolate Cake",
      foodDescription: "Rich and moist chocolate cake with fudge frosting.",
      rating: 4.9,
      deliveryTime: "15 minutes",
      imageUrl: "https://picsum.photos/seed/chocolatecake/400/300"
    },
    {
      id: 20,
      foodName: "Dosa",
      foodDescription: "Crispy South Indian dosa served with chutney and sambar.",
      rating: 4.6,
      deliveryTime: "22 minutes",
      imageUrl: "https://picsum.photos/seed/dosa/400/300"
    },
    {
      id: 21,
      foodName: "Falafel Wrap",
      foodDescription: "Crispy falafel balls wrapped in pita bread with hummus.",
      rating: 4.3,
      deliveryTime: "24 minutes",
      imageUrl: "https://picsum.photos/seed/falafel/400/300"
    },
    {
      id: 22,
      foodName: "Cheeseburger",
      foodDescription: "Classic cheeseburger with cheddar, lettuce, and tomato.",
      rating: 4.4,
      deliveryTime: "19 minutes",
      imageUrl: "https://picsum.photos/seed/cheeseburger/400/300"
    },
    {
      id: 23,
      foodName: "Momos",
      foodDescription: "Steamed Himalayan dumplings stuffed with vegetables or chicken.",
      rating: 4.5,
      deliveryTime: "17 minutes",
      imageUrl: "https://picsum.photos/seed/momos/400/300"
    },
    {
      id: 24,
      foodName: "Butter Chicken",
      foodDescription: "Creamy tomato-based curry with tender chicken pieces.",
      rating: 4.8,
      deliveryTime: "42 minutes",
      imageUrl: "https://picsum.photos/seed/butterchicken/400/300"
    },
    {
      id: 25,
      foodName: "Ice Cream Sundae",
      foodDescription: "Scoops of ice cream topped with chocolate syrup and nuts.",
      rating: 4.7,
      deliveryTime: "13 minutes",
      imageUrl: "https://picsum.photos/seed/icecream/400/300"
    }
  ];
  

export default foods;