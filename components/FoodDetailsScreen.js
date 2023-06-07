import React,{useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Data } from '../App';

const FoodDetailsScreen = ({navigation}) => {
  const foodData = useContext(Data)

  const ListFooterComponent = () => {
    return (
        <FlatList
          contentContainerStyle={{ paddingBottom: 200 }}
          horizontal={true}
          data={foodData}
          renderItem={({ item }) =>
            <View>
              <TouchableOpacity onPress={()=>navigation.popToTop()}>
                <View style={styles.container}>
                  <Image source={{ uri: item.image }} style={styles.img2} />
                  <View style={{flexDirection:'row'}}>
                  <Text style={styles.title}>{item.id}.  </Text>
                  <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          }
        />
    )
  }

  return (
   <View>
    <FlatList
        ListFooterComponent={<ListFooterComponent style={{ flexGrow: 1, justifyContent: 'flex-end' }} />}
        data={foodData}
        renderItem={({ item }) =>
        <View style={styles.container}>
        <Text style={styles.title}>{item.id}.</Text>
        <Image source={{ uri: item.image }} style={styles.img} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.details}>Price: ${item.price}</Text>
        <Text style={styles.details}>Ingredients: {item.ingredients.join(', ')}</Text>
        <Text style={styles.details}>Ratings: {item.rating}</Text>
        <Text style={styles.details}>Reviews: {item.reviews.rating}</Text>
      </View>
        }
      />

   </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 20,
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  img: {
    marginTop: 30,
    width: 300, height: 150,
    borderRadius: 20,
    resizeMode: 'stretch', backgroundColor: '#FFFFFF'
  },
  img2: {
    width: 150, height: 150,
    borderRadius: 20,
    resizeMode: 'stretch', backgroundColor: '#FFFFFF'
  },
});

export default FoodDetailsScreen;