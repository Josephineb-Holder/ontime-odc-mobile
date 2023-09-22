import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";
import { List } from 'react-native-paper';
import COLORS from "../Constants/Colors";

const Activities = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.gray,
        }}
      >
        <View style={styles.viewStyle}>
          <Text style={styles.eventText}>Attending: React Native Class</Text>
          <Text style={styles.eventText}>Subject: Coding School</Text>
          <Text style={styles.eventText}>Purpose: Training</Text>
        </View>
        <Calendar style={styles.calendar} />
        <ScrollView>
        
        <View>
        <List.Section >
      <List.Accordion style={styles.accordionStyle}
        title="Select Month"
        left={props => <List.Icon {...props} icon="calendar" />}>
        <List.Item title="January" />
        <List.Item title="February" />
        <List.Item title="March" />
        <List.Item title="April" />
        <List.Item title="May" />
        <List.Item title="June" />
        <List.Item title="February" />
        <List.Item title="August" />
        <List.Item title="September" />
        <List.Item title="October" />
        <List.Item title="November" />
        <List.Item title="December" />

      </List.Accordion>
    </List.Section>
        </View>
        </ScrollView>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    color: COLORS.primary,
    fontSize: 14,
    marginHorizontal: "8%",
    marginVertical: "3%",
    padding: "3%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E34518",
  },
  eventText: {
    paddingLeft: 15,
  },
  calendar: {
    borderWidth: 2,
    borderColor: "#E34518",
    marginTop: "20%",
    marginHorizontal: "6%",
    marginVertical: "6%",
    padding: "6%",
    borderRadius: 15,
    backgroundColor: "black",
  },
  accordionStyle:{
     backgroundColor: "lightgray"
  }
});

export default Activities;
