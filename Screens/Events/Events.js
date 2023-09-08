import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Searchbar } from 'react-native-paper';
import { eventsData } from '../EventsData';



const SelectMonths = () => {
  const [search, setSearch] = React.useState('');
  const [selectedMonths, setSelectedMonths] = useState("September");
  const [showArrow, setShowArrow] = useState(false)


  const eventmonths = eventsData;
  // console.log(eventmonths.September)

  const months = Object.keys(eventmonths)

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
  }

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
          <Text>{selectedMonths || 'Select a county'}</Text>
          <Text style={styles.hamburgerIcon}>{showArrow ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {showArrow && (
          <View style={styles.dropdown}>
            {months.map((ele) => (
              <TouchableOpacity key={ele} onPress={() => selectMonths(ele)}>
                <Text style={styles.dropdowncounties}>{ele}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {/* <FlatList data={} */}
      </ScrollView>
    </SafeAreaView>
  );

}




export default SelectMonths;