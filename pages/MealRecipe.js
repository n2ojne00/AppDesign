import React from 'react';
import { Image, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import BackgroundImage from '../images/background.jpg';



export default function MealRecipe() {
    return (
        <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.background}>
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchRow}>
                <FontAwesome name="search" size={20} color="#6A994E" style={styles.icon} />
                <TextInput style={styles.textInput} placeholder="Search for meals..." />
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.mealContainer}>
 

            </ScrollView>
        </View>
        </ImageBackground>
    );
}
