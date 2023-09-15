import { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, Linking } from "react-native";
// import { Button } from "react-native-paper";

function EventsDetails({ route }) {
  const [eventsDetails, setEventsDetails] = useState(
    route.params.item || null
  );
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.imgView}>
            <Image
              style={styles.photo}
              source={{
                uri: eventsDetails?.photo,
              }}
            />
          </View>
          <View style={styles.eventsInfo}>
            <Text style={styles.eventName}>{eventsDetails?.eventName}</Text>
            <Text style={styles.description}>Description: {eventsDetails?.description}</Text>
            <Text style={styles.time}>Time:  {eventsDetails?.time}</Text>
            <Text style={styles.duration}>Duration: {eventsDetails?.duration}</Text>
            <Text style={styles.days}>{eventsDetails?.days}</Text>
            <Text style={styles.area}>{eventsDetails?.area}</Text>
            <Text style={styles.button}onPress={() => Linking.openURL(eventsDetails?.link)}>
             Apply Now</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: 200,
    borderWidth: 3, 
    borderColor: "#FF7900",
    marginBottom: 30,
    marginTop: 50
    
  },
  imgView: {
    marginHorizontal: 10,
  },
  eventsInfo: {
    marginHorizontal: 20,
  },
  eventName: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 20,
    color: "black",
  },
  time: {
    color: "#c0032c",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },

  description: {
    lineHeight: 20,
    textAlign: "justify",
    marginBottom: 20,
    marginTop: 20
  },
  duration: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
  days: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
  time: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
  area: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF7900",
    marginHorizontal: 50,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    margin: 20,
    color: "white",
    fontWeight: 700,
    padding: 10,
    borderWidth: 3,
    borderColor: '#FF7900'
    

  }
});

export default EventsDetails;