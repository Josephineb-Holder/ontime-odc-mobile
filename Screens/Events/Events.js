import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, StyleSheet, StatusBar, Touchable, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { eventsData } from './EventsData';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
// import SearchFilter from './SearchFilter';



const SelectMonths = () => {
  //const [search, setSearch] = useState('');
  const [selectedMonths, setSelectedMonths] = useState("September");
  const [showArrow, setShowArrow] = useState(false);
 

  const eventmonths = eventsData;
  // console.log(eventmonths.September)

  const months = Object.keys(eventmonths)
  // console.log(eventmonths.November);

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = eventmonths => setSearchQuery(eventmonths);

      <Searchbar
        placeholder="Search by Courses"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ borderColor: '#FF7900', backgroundColor: 'white', borderWidth: 2, width: "1%"}}
        /> 
     
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
      {/* <ScrollView> */}
        <View style={styles.topBar}>
          <View style={styles.barItem}>
            <Searchbar
              placeholder="Search"
              value={search}
            />
           
          </View>

          <View style={styles.barItem}>
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
        <View>
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
          keyExtractor={item => item.eventName}
        />
        </View>
      {/* </ScrollView> */}
      

    </SafeAreaView>

  );

}


const styles = StyleSheet.create({
  container: {
    // width: windowWidth,
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
    marginTop: 10,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40  ,
    justifyContent: 'space-between',
    alignItems: "center",
    flexWrap: 'nowrap',
    marginHorizontal: 8,
    marginVertical: 10,
  },

  barItem: {
    flex: 2
  },

  hamburgerIcon: {
    marginHorizontal: 0,
    marginTop: 20,
    color: "#FF7900",
  },
  headerText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginTop: 15,
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
    borderColor: "#FF7900",
    borderRadius: 100 / 4,
    elevation: 4,
    marginVertical: 10,
    // marginHorizontal: 80,
    width: "100%"

  },

  dropdownmonths: {
    marginTop: 5,
    borderWidth: 1,
    shadowColor: 'white',
    borderColor: '#FF7900',
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
    elevation: 2,
    marginVertical: 5,
    marginHorizontal: 86,
},
  monthsCard: {
    // shadowColor: 'white',
    elevation: 4,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#FF7900',
    borderWidth: 2,
    fontSize: 20
  },
});

export default SelectMonths;