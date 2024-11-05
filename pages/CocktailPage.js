import React from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";  // Assuming styles are correctly defined here

// Imported images
import BeerImage from '../images/Beer.jpg';
import ColdImage from '../images/cold.jpg';
import HotImage from '../images/hotdrink.jpg';
import ShotsImage from '../images/shots.jpg';
import PunchImage from '../images/booli.jpg';


export default function CocktailPage() {
    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchRow}>
                <TextInput style={styles.textInput} placeholder="Search for drinks..." />
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.mealContainer}>
                {/* Row 1 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Chicken')}>
                        <Image source={ColdImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Cold Drinks</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Beef')}>
                        <Image source={HotImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Hot Drinks</Text>
                    </Pressable>
                </View>

                {/* Row 2 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Fish')}>
                        <Image source={BeerImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Beers</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Pasta')}>
                        <Image source={ShotsImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Shots</Text>
                    </Pressable>
                </View>

                {/* Row 3 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Pork')}>
                        <Image source={PunchImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Punch</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Vegan')}>
                        <Image source={PunchImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Non-alcoholic</Text>
                    </Pressable>
                </View>

 
            </ScrollView>
        </View>
    );
}