import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import React, { useState,useContext } from 'react'
import { Data } from '../App';
export default function ({ navigation }) {
  const foodData = useContext(Data)
  const [searchText, setSearchText] = useState('');
  const [filteredFoodItems, setFilteredFoodItems] = useState(foodData);

  const handleSearch = () => {
    const filteredItems = foodData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredFoodItems(filteredItems);
  };

  return (
    <View>
      <View style={styles.searchInput}>
        <TextInput
          style={{ fontSize: 16, fontWeight: '700' }}
          placeholder="Search food name"
          value={searchText}
          onChangeText={(txt) => { setSearchText(txt), handleSearch }}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRus25rEHlbiwSHzGfUsTRxaOFvL6Y5IwzWJf6Ys4&s" }} style={styles.searchicon} />
        </TouchableOpacity>
      </View>
      {/* ==============Flatlist============================= */}

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-around', alignItems: 'flex-start' }}
        numColumns={2}
        data={filteredFoodItems}
        renderItem={({ item,index }) =>
          <View>
            <TouchableOpacity
              onPress={onPress=()=>{
                navigation.navigate('FoodDetails'),index}}>
              <View style={styles.container}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  img: {
    width: 150, height: 150,
    borderRadius: 10,
    resizeMode: 'stretch', backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  searchInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    fontWeight: '600',
    marginTop: 15,
    borderRadius: 20,
    justifyContent: "space-between",
  }, 
  searchicon: {
    width: 20, height: 20,
    marginTop: 15,
  }
});
