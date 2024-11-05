import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    searchRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textInput: {
        flex: 0.9,
        height: 50,
        borderColor: '#386641',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
      },
      listInput: {
        flex: 0.7,
        height: 50,
        borderColor: '#386641',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
      },
    
    mealContainer: {
        padding: 10,
        justifyContent: 'center', // Center vertically
      },

      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },

      mealBox: {
        flex: 1,
        height: 140, // Adjust the height of each box
        backgroundColor: '#386641', // Light blue color
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },

      menuBox: {
        flex: 1,
        height: 150, // Adjust the height of each box
        backgroundColor: '#386641',
      },
   
      foodImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'cover',
      },
      foodLabel: {
        height: '20%',
        fontSize: 20,
        color: '#ffffff',
        margin: 3,
      },
      shopListName: {
        flexDirection: 'row',
        justifyContent: 'center',
        
      },
      heart: {
        backgroundColor: '#EBA6A9',
        borderWidth: 1,
        borderColor: '#ca8d90',
        flex: 0.15,
        borderRadius: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 10,
      }

});