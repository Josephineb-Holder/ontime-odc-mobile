import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, StyleSheet, StatusBar, Touchable, TouchableOpacity } from 'react-native';

import { Searchbar } from 'react-native-paper';
import { eventsData } from './EventsData';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;



const SelectMonths = () => {
  const [search, setSearch] = React.useState('');
  const [selectedMonths, setSelectedMonths] = useState("September");
  const [showArrow, setShowArrow] = useState(false)


  const eventmonths = eventsData;
  // console.log(eventmonths.September)

  const months = Object.keys(eventmonths)
  // console.log(eventmonths.November);

  const SearchBar = () => {
    const onChangeSearch = query => setSearch(query);

    return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={search}
      />
    );
  };

  const toggleDropdown = () => {
    setShowArrow(!showArrow);
  };

  const selectMonths = (months) => {
    setSelectedMonths(months);
    toggleDropdown();
  };

  const navigation = useNavigation();

  const monthsPress = (item) => {
    navigation.navigate("EventsDetails", {
      item,
    });
  };

  // console.log({month: eventmonths[selectedMonths]})


  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
      <View style={styles.searchBar}>
      <SearchBar
        showLoading
        platform="ios"
        cancelButtonTitle="Cancel"
        placeholder='Search' style={{backgroundColor: '#000'}} />
        </View>

      {/* <ScrollView> */}
      <View>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropDownItems}>
        <Text style={styles.headerText}>{selectedMonths || 'Select months'}</Text>
        <Text style={styles.hamburgerIcon}>{showArrow ? "▲" : "▼"}</Text>
      </TouchableOpacity>
      </View>
      </View>
      {showArrow && (
        <View style={styles}>

          {months.map((ele) => (
            <TouchableOpacity key={ele} onPress={() => selectMonths(ele)}>
              <Text style={styles.dropdownmonths}>{ele}</Text>
            </TouchableOpacity>
          ))}
        </View>
      
      )}
      <FlatList data={eventmonths[selectedMonths]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => monthsPress(item)}>
              <View style={styles.monthsCard}>
                <View>
                  <Text style={styles.eventName}>{item.eventName}</Text>
                  <Text style={styles.title}>{item.time}{'\n'}{item.area}</Text>
                </View>
              </View>
            </TouchableOpacity>

          )
        }}
        keyExtractor={item => item.time}
      />
      {/* </ScrollView> */}
     
    </SafeAreaView>
  
  );

}


const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
    marginTop: 10,
  },
  hamburgerIcon: {
    marginHorizontal: 10,
    marginTop: 20,
    color: "orange",
  },
  headerText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginTop: 15,
  },
  searchBar: {
     width: '50%',
     color: "none",
  },
  navContainer: {
    width: 300,
    borderWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center"
    //  flexDirection: 'row',
     

  },

  dropDownItems: {
    height: 60,
    backgroundColor: "white",
    paddingLeft: 20,
    display: "flex",
    position: "fixed",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "orange",
    borderRadius: 100 / 4,
    elevation: 4,
    marginVertical: 10,
    marginHorizontal: 80,

  },

  dropdownmonths: {
    marginTop: 5,
    borderWidth: 1,
    shadowColor: 'white',
    borderColor: 'orange',
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
    elevation: 2,
    marginVertical: 5,
    marginHorizontal: 86,

  },
  // item: {
  //     padding: 20,
  //     borderWidth: 2,
  //     borderRadius: 100 / 4,
  //     // borderColor: '#ccc',
  //     elevation: 4,
  //     marginVertical: 10,
  //     marginHorizontal: 16,
  //   },
  monthsCard: {
    // shadowColor: 'white',
    elevation: 4,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: 'orange',
    borderWidth: 2,
    fontSize: 20

  },


});





export default SelectMonths;