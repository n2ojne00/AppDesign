
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MealList from './pages/MealList';
import MealPage from './pages/MealPage';
import CocktailPage from './pages/CocktailPage';
import ShoppingList from './pages/ShoppingList';
import BackgroundImage from './images/background.jpg';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles/styles';
import MealRecipe from './pages/MealRecipe';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.background}>
        <Tab.Navigator>

          <Tab.Screen
            name="Meals"
            component={MealPage}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="fast-food-outline" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="MealList"
            component={MealList}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="MealRecipe"
            component={MealRecipe}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Cocktails"
            component={CocktailPage}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="wine-outline" color={color} size={size} />
              ),
            }}
          />


          {/**
          <Tab.Screen
            name="Shopping List"
            component={ShoppingList}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" color={color} size={size} />
              ),
            }}
          />

           */}

        </Tab.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}