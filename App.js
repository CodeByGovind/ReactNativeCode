import React,{createContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodItem from './components/FoodItem';
import FoodDetailsScreen from './components/FoodDetailsScreen';
const Stack = createStackNavigator();

const Data =createContext()
export default function App() {
  const foodData = [
    {
      id: 1,
      title: 'Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cbOoUObsMcHFB_qFVE6Ktn6or3ocKJXbxzxZL50z&s',
      description: 'Delicious pizza with a variety of toppings',
      price: 210.9,
      ingredients: ['dough', 'cheese', 'tomato sauce', 'toppings'],
      rating: 4.5,
      reviews: [
        { id: 1, rating: 4, comment: 'Great pizza!' },
        { id: 2, rating: 5, comment: 'Best pizza in town!' },
      ],
    },
    {
      id: 2,
      title: 'Burger',
      image: 'https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png',
      description: 'Juicy burger with a side of fries',
      price: 89.99,
      ingredients: ['bun', 'patty', 'cheese', 'lettuce', 'tomato'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty burger!' },
        { id: 2, rating: 3, comment: 'Average burger.' },
      ],
    },
    {
      id: 3,
      title: 'Vada Pav',
      image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347356/india-food-vada-pav/india-food-vada-pav-1120x732.jpg',
      description: 'Vada Pav is a favorite sandwich-style snack from Mumbai,',
      price: 78.99,
      ingredients: ['chickpea batter; and pav, or white bread rolls'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty Vada Pav!' },
        { id: 2, rating: 3, comment: 'Average Vada Pav.' },
      ],
    },
    {
      id: 4,
      title: 'Pakora',
      image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347434/india-food-chicken-pakora/india-food-chicken-pakora-1120x732.jpg',
      description: 'Pakora is a savory, deep-fried Indian snack made with chunks of vegetables such as potato, cauliflower etc.',
      price: 89.88,
      ingredients: ['chickpea flour, seasoned with turmeric, salt, chili, or other spices, and deep-fried in ghee'],
      rating: 6.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty Pakora!' },
        { id: 2, rating: 3, comment: 'Average Pakora.' },
      ],
    },
    {
      id: 5,
      title: 'Dahi Vada',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKralI5CzbKS7sIMpm7jJ5tgV8BDHMP1ooHw&usqp=CAU',
      description: 'Dahi vada is a type of chaat originating from the Indian subcontinent. It is prepared by soaking vadas in thick dahi',
      price: 149,
      ingredients: ['Yoghurt', 'Urad dal', 'Vada'],
      rating: 7.1,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty !' },
        { id: 2, rating: 3, comment: 'Average .' },
      ],
    },
    {
      id: 6,
      title: 'Idli',
      image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg',
      description: 'Idli is a traditional,popular breakfast item in many South Indian ',
      price: 119,
      ingredients: ['fermented lentils and rice, which is then steamed'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty Idli!' },
        { id: 2, rating: 3, comment: 'Average Idli.' },
      ],
    },
    {
      id: 7,
      title: 'Burger',
      image: 'https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png',
      description: 'Juicy burger with a side of fries',
      price: 8.99,
      ingredients: ['bun', 'patty', 'cheese', 'lettuce', 'tomato'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty burger!' },
        { id: 2, rating: 3, comment: 'Average burger.' },
      ],
    },
    {
      id: 8,
      title: 'Vada Pav',
      image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347356/india-food-vada-pav/india-food-vada-pav-1120x732.jpg',
      description: 'Vada Pav is a favorite sandwich-style snack from Mumbai,',
      price: 78.99,
      ingredients: ['chickpea batter; and pav, or white bread rolls'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty Vada Pav!' },
        { id: 2, rating: 3, comment: 'Average Vada Pav.' },
      ],
    },
    {
      id: 9,
      title: 'Pakora',
      image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347434/india-food-chicken-pakora/india-food-chicken-pakora-1120x732.jpg',
      description: 'Pakora is a savory, deep-fried Indian snack made with chunks of vegetables such as potato, cauliflower etc.',
      price: 89.88,
      ingredients: ['chickpea flour, seasoned with turmeric, salt, chili, or other spices, and deep-fried in ghee'],
      rating: 6.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty Pakora!' },
        { id: 2, rating: 3, comment: 'Average Pakora.' },
      ],
    },
    {
      id: 10,
      title: 'Dahi Vada',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKralI5CzbKS7sIMpm7jJ5tgV8BDHMP1ooHw&usqp=CAU',
      description: 'Dahi vada is a type of chaat originating from the Indian subcontinent. It is prepared by soaking vadas in thick dahi',
      price: 149,
      ingredients: ['Yoghurt', 'Urad dal', 'Vada'],
      rating: 7.1,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty !' },
        { id: 2, rating: 3, comment: 'Average .' },
      ],
    },
    {
      id: 11,
      title: 'Idli',
      image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg',
      description: 'Idli is a traditional,popular breakfast item in many South Indian ',
      price: 119,
      ingredients: ['fermented lentils and rice, which is then steamed'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty Idli!' },
        { id: 2, rating: 3, comment: 'Average Idli.' },
      ],
    },
    {
      id: 12,
      title: 'Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cbOoUObsMcHFB_qFVE6Ktn6or3ocKJXbxzxZL50z&s',
      description: 'Delicious pizza with a variety of toppings',
      price: 210.9,
      ingredients: ['dough', 'cheese', 'tomato sauce', 'toppings'],
      rating: 4.5,
      reviews: [
        { id: 1, rating: 4, comment: 'Great pizza!' },
        { id: 2, rating: 5, comment: 'Best pizza in town!' },
      ],
    },
    {
      id: 13,
      title: 'Burger',
      image: 'https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png',
      description: 'Juicy burger with a side of fries',
      price: 8.99,
      ingredients: ['bun', 'patty', 'cheese', 'lettuce', 'tomato'],
      rating: 4.2,
      reviews: [
        { id: 1, rating: 4, comment: 'Tasty burger!' },
        { id: 2, rating: 3, comment: 'Average burger.' },
      ],
    },

    // Add more food items as needed
  ];
  return (
    <Data.Provider value={foodData}>
         <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          name="FoodItem"
          component={FoodItem}
          options={{ headerShown:false}}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetailsScreen}
          options={{ headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Data.Provider>
  )
}
export {Data}