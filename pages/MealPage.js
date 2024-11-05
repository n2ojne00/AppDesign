import React from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";  // Assuming styles are correctly defined here

// Imported images
import SnacksImage from '../images/snacks.jpg';
import PorkImage from '../images/pork.jpg';
import SalmonImage from '../images/salmon.jpg';
import ChickenImage from '../images/chicken.jpg';
import SteakImage from '../images/steak.jpg';
import VeganImage from '../images/vegan.jpg';
import BerryImage from '../images/strawberries.jpg';
import PastaImage from '../images/pasta.jpg';



export default function MealPage() {
    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchRow}>
                <TextInput style={styles.textInput} placeholder="Search for meals..." />
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.mealContainer}>
                {/* Row 1 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Chicken')}>
                        <Image source={ChickenImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Chicken</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Beef')}>
                        <Image source={SteakImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Beef</Text>
                    </Pressable>
                </View>

                {/* Row 2 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Fish')}>
                        <Image source={SalmonImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Fish</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Pasta')}>
                        <Image source={PastaImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Pasta</Text>
                    </Pressable>
                </View>

                {/* Row 3 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Pork')}>
                        <Image source={PorkImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Pork</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Vegan')}>
                        <Image source={VeganImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Vegan</Text>
                    </Pressable>
                </View>

                {/* Row 4 */}
                <View style={styles.row}>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Desserts')}>
                        <Image source={BerryImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Desserts</Text>
                    </Pressable>
                    <Pressable style={styles.mealBox} onPress={() => alert('Selected: Snacks')}>
                        <Image source={SnacksImage} style={styles.foodImage} />
                        <Text style={styles.foodLabel}>Snacks</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Text style={styles.menuBox}>Menu of the week</Text>
                </View>
            </ScrollView>
        </View>
    );
}
