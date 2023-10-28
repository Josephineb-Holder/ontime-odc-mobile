import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { List } from "react-native-paper";
import COLORS from "../Constants/Colors";

const Activities = () => {
  const [expanded, setExpanded] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleAccordion = (month) => {
    if (expanded === month) {
      setExpanded("");
    } else {
      setExpanded(month);
      setSelectedMonth(month);
    }
  };

  const eventsDays = {
    "2023-01-05": "Job readiness Training",
    "2023-01-15": "React Native Coding Class",
    "2023-01-20": "Business Development Class",
    "2023-10-20": "Business Development Class",
    "2023-10-10": "UI,UX Design Class",
    "2023-10-5": "Techies Meet-Up",
    "2023-10-27": "Think Link a boss Trianing",
  };

  const markedDates = {};

  markedDates[selectedDate] = {
    selected: true,
    marked: true,

    // dotColor: "blue",
  };

  for (const date in eventsDays) {
    markedDates[date] = {
      marked: true,
      dotColor: "#E34518",
    };
  }

  const handleDayPress = (day) => {
    const event = eventsDays[day.dateString];
    if (event) {
      setSelectedDate(day.dateString);
      setEventDetails(event);
      setModalVisible(true);
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
            backgroundColor: COLORS.white,
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
                  title={<Text style={styles.monthTitle}>{month}</Text>}
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
                      onDayPress={handleDayPress}
                      // markedDates={{
                      //   [selectedDate]: { selected: true },
                      // }}
                      markedDates={markedDates}
                      theme={{
                        backgroundColor: "white",
                        calendarBackground: "white",
                        textSectionTitleColor: "gray",
                      }}
                    />
                  )}
                </List.Accordion>
              ))}
            </View>

            <Modal
              visible={isModalVisible}
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Event Details for {selectedDate}</Text>
                <Text>{eventDetails}</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </View>
            </Modal>
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
    marginHorizontal: "4%",
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
    marginHorizontal: "4%",
    marginVertical: "3%",
    shadowColor: "black",
    shadowOffset: { width: 9, height: 5 },
    shadowRadius: 4,
    shadowOpacity: 40.26,
    // elevation: 4,
    borderRadius: 10,
    marginBottom: 7,
    backgroundColor: "white",
  },
  monthTitle: {
    color: "#E34518",
  },
});

export default Activities;
