import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe3d7b0',
    flex: 1,
  },
  background: {
    flex: 1,  // Makes the background take the full height of the screen
    opacity: 90,
  },


  //Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafff0f6',
    borderWidth: 3,
    borderColor: '#6A994E',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },

  //Food/Drink categories
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
    height: 140,
    backgroundColor: '#386641',
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderLeftWidth: 3,
    borderRightWidth: 3,
   borderColor: '#acffbbd2', 

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

  },

  //Menus off the week?
  menuBox: {
    flex: 1,
    height: 150, 
    backgroundColor: '#386641',
  },

  //Shopping list page
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
  },

  listInput: {
    flex: 0.7,
    height: 50,
    borderColor: '#386641',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },

});