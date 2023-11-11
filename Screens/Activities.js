import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { List } from "react-native-paper";
import COLORS from "../Constants/Colors";
import { BackgroundImage } from "react-native-elements/dist/config";

const Activities = () => {
  const [expanded, setExpanded] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDetails, setEventDetails] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleAccordion = (month) => {
    if (expanded === month) {
      setExpanded("");
    } else {
      setExpanded(month);
      setSelectedMonth(month);
      setSelectedDate(null);
    }
  };

  const eventsData = {
    // "2023-01-05": "Job readiness Training",
    // "2023-01-15": "React Native Coding Class",
    // "2023-01-20": "Business Development Class",
    // "2023-10-20": "Business Development Class",
    // "2023-10-10": "UI,UX Design Class",
    // "2023-10-5": "Techies Meet-Up",
    // "2023-10-27": "Think Link a boss Trianing",
    "2023-01-05": {
      title: "Job readiness Training",
      description: "A training program for job readiness.",
      image: require("../assets/python.jpg"),
      time: "12:40 - 1:35 pm",
      duration: "Oct 10  Dec-20",
      room: "Fab Lab",
    },
    "2023-01-15": {
      title: "React Native Coding Class",
      description: "Learn React Native development.",
      image: require("../assets/python.jpg"),
      time: "10:00 am - 12:30 pm",
      duration: "Nov 5 - Dec 15",
      room: "Tech Hub",
    },
    "2023-01-20": {
      title: "Job readiness Training",
      description: "A training program for job readiness.",
      image: require("../assets/python.jpg"),
      time: "12:30 - 1:30 pm",
      duration: "Oct 10  Dec-20",
      room: "Fab Lab",
    },
    "2023-10-20": {
      title: "Job readiness Training",
      description: "A training program for job readiness.",
      image: require("../assets/python.jpg"),
      time: "12:30 - 1:30 pm",
      duration: "Oct 10  Dec-20",
      room: "Fab Lab",
    },
    "2023-10-10": {
      title: "Job readiness Training",
      description: "A training program for job readiness.",
      image: require("../assets/python.jpg"),
      time: "12:30 - 1:30 pm",
      duration: "Oct 10  Dec-20",
      room: "Fab Lab",
    },
    "2023-10-5": {
      title: "Job readiness Training",
      description: "A training program for job readiness.",
      image: require("../assets/python.jpg"),
      time: "12:30 - 1:30 pm",
      duration: "Oct 10 - Dec-20",
      room: "Fab Lab",
    },
    "2023-10-27": {
      title: "Job readiness Training",
      description: "A training program for job readiness.",
      image: require("../assets/python.jpg"),
      time: "12:30 - 1:30 pm",
      duration: "Oct 10  Dec-20",
      room: "Fab Lab",
    },
  };

  const markedDates = {};

  markedDates[selectedDate] = {
    selected: true,
    marked: true,

    // dotColor: "blue",
  };

  for (const date in eventsData) {
    markedDates[date] = {
      marked: true,
      dotColor: "#E34518",
    };
  }

  // const handleDayPress = (day) => {
  //   const event = eventsDays[day.dateString];
  //   if (event) {
  //     setSelectedDate(day.dateString);
  //     setEventDetails(event);
  //     setModalVisible(true);
  //   }
  // };

  const handleDayPress = (day) => {
    const eventData = eventsData[day.dateString];
    if (eventData) {
      setSelectedDate(day.dateString);
      setEventDetails(eventData);
      setModalVisible(true);
    }
  };

  const isExpanded = (month) => expanded === month;

  const getMonthNumber = (monthName) => {
    const months = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };

    return months[monthName];
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
                          : null
                      }
                      hideArrows={true}
                      mon
                      renderHeader={renderCustomHeader}
                      onDayPress={handleDayPress}
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
              <ScrollView>
                <View
                  style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50%",
                  }}
                >
                  {/* <Image
                    source={eventDetails.image}
                    style={styles.eventImage}
                  />
                  <Text>Event Details for {selectedDate}</Text>
                  <Text>{eventDetails}</Text> */}
                  {/* <ImageBackground
                    blurRadius={4}
                    style={styles.eventBackgroundimg}
                    source={eventDetails.image}
                  /> */}
                  <Image
                    source={eventDetails.image}
                    style={styles.eventImage}
                  />
                  <Text>Event Details for {selectedDate}</Text>
                  <Text>Title: {eventDetails.title}</Text>
                  <Text>Description: {eventDetails.description}</Text>
                  <Text>Time: {eventDetails.time}</Text>
                  <Text>Duration: {eventDetails.duration}</Text>
                  <Text>Room: {eventDetails.room}</Text>

                  <Button
                    title="Close"
                    onPress={() => setModalVisible(false)}
                    style={styles.modalbutton}
                  />
                </View>
              </ScrollView>
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
    backgroundColor: "#E34518",
  },
  eventText: {
    fontSize: "17",
    color: "white",
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
  eventBackgroundimg: {
    borderColor: "orange",
    marginBottom: "8%",
    // padding: 30,
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 6,
    // flex: 1,
    resizeMode: "cover",
    // marginVertical: "10%",
    // marginHorizontal: "10%",
  },
  eventImage: {
    width: "87%",
    height: "100%",
    borderColor: "#E34518",
    marginBottom: "8%",
    borderWidth: 3,
    borderRadius: 6,
  },
  modalbutton: {
    borderColor: "#E34518",
    borderWidth: 3,
    borderRadius: 6,
  },
});

export default Activities;
