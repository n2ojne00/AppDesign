import { FlatList, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BackgroundImage from '../images/background.jpg';

export default function ShoppingList() {
    return (
      
             <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.background}>
             <View style={styles.container}>
            <View style={styles.searchRow}>
            <FontAwesome name="search" size={20} color="#6A994E" style={styles.icon} />
                <TextInput style={styles.textInput} placeholder="Search for meals..." />

            </View>
            <ScrollView contentContainerStyle={styles.mealContainer}>

                <Text>Shopping List</Text>
                <View style={styles.shopListName}>
                    <TextInput style={styles.listInput} placeholder="List name" />
                    <Pressable style={styles.heart}><Text>'🤍'</Text></Pressable>
                   
                </View>
                <Text>Search restaurants near you</Text>
            </ScrollView>
            </View>
            </ImageBackground>
   
    );
}