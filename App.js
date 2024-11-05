import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FrontPage from './pages/Frontpage';
import MealPage from './pages/MealPage';
import CocktailPage from './pages/CocktailPage';
import ShoppingList from './pages/ShoppingList';
import { Ionicons } from '@expo/vector-icons'; // Use this for Expo projects

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FrontPage"
          component={FrontPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
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
          name="Cocktails"
          component={CocktailPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wine-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Shopping List"
          component={ShoppingList}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
