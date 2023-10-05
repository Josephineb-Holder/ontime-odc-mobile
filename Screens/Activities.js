import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { List } from "react-native-paper";
import COLORS from "../Constants/Colors";

const Activities = () => {
  const [expanded, setExpanded] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);

  const toggleAccordion = (month) => {
    if (expanded === month) {
      setExpanded("");
    } else {
      setExpanded(month);
      setSelectedMonth(month);
    }
  };

  const isExpanded = (month) => expanded === month;

  const getMonthNumber = (monthName) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months.indexOf(monthName) + 1;
  };

  const renderCustomHeader = () => {
    return <View />;
  };

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

          <ScrollView>
            <View>
              {months.map((month) => (
                <List.Accordion
                  style={styles.accordionStyle}
                  key={month}
                  title={month}
                  id={`month-${month}-accordion`}
                  expanded={isExpanded(month)}
                  onPress={() => toggleAccordion(month)}
                >
                  {isExpanded(month) && (
                    <Calendar
                      style={styles.calendar}
                      current={
                        selectedMonth
                          ? `2023-${getMonthNumber(selectedMonth)}-01`
                          : undefined
                      }
                      hideArrows={true}
                      mon
                      renderHeader={renderCustomHeader}
                    />
                  )}
                </List.Accordion>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
    marginTop: "10%",
    marginHorizontal: "6%",
    marginVertical: "6%",
    padding: "4%",
    borderRadius: 15,
    backgroundColor: "black",
  },
  accordionStyle: {
    backgroundColor: "lightgray",
  },
});

export default Activities;
