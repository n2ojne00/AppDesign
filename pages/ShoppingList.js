import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

export default function ShoppingList() {
    return(
        <View>
            <View style={styles.searchRow}>
                <TextInput style={styles.textInput} placeholder="Search for meals..." />
              
            </View>
            <ScrollView contentContainerStyle={styles.mealContainer}>

            <Text>Shopping List</Text>
            <View style={styles.shopListName}>
            <TextInput style={styles.listInput} placeholder="List name" /> 
            <Pressable style={styles.heart}><Text>'❤️'</Text></Pressable>
            </View>
            </ScrollView>
        </View>
    );
}