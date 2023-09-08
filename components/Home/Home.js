import React from 'react';
import {
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

checkInObj = {
  date: 'Mon. September 5, 2023',
  // dateString: this.date.toDateString(),
  hour: '10',
  min: '20',
  mn: 'AM',
};

function Home() {
  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView style={styles.appMain}>
          <View style={styles.contentMain}>
            <View style={styles.contentContainer}>
              <Text style={styles.subHeader}>Today's Status</Text>
              <View style={styles.checkInContentCont}>
                <View>
                  <Text style={styles.checkInContentHeader}>Day</Text>
                  <Text>Mon.</Text>
                </View>
                <View>
                  <Text style={styles.checkInContentHeader}>Date</Text>
                  <Text>Sept. 04, 2023</Text>
                </View>
                <View>
                  <Text style={styles.checkInContentHeader}>Time</Text>
                  <Text>10:00 AM</Text>
                </View>
              </View>
              <TouchableHighlight style={styles.checkInBtn}>
                <Text style={styles.checkInBtnText}>Check-Out</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.contentMain}>
            <Text style={styles.contentHeader}>Latest Events</Text>
            {/* <View>
              <View>
                <TouchableHighlight></TouchableHighlight>
              </View>
              <View></View>
            </View> */}
          </View>
          <View style={styles.contentMain}>
            <Text style={styles.contentHeader}>Latest Activities</Text>
            <View style={styles.contentContainer}>
              <View style={styles.activitiesContentCont}>
                <View style={styles.content}>
                  <Text style={styles.checkInContentHeader}>Purpose</Text>
                  <Text>Study</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.checkInContentHeader}>Date</Text>
                  <Text>Sept. 04, 2023</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.checkInContentHeader}>Check-in</Text>
                  <Text>10:00 AM</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.checkInContentHeader}>Check-out</Text>
                  <Text>10:00 AM</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  appMain: {
    padding: '4%',
  },

  contentMain: {
    marginBottom: 50,
  },

  contentContainer: {
    borderWidth: 1,
    borderColor: '#FF7900',
    padding: 10,
    borderRadius: 10,
    overflow: 'scroll',
  },

  contentHeader: {
    fontSize: 20,
    marginBottom: 10,
  },

  checkInContentCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  activitiesContentCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },

  checkInBtn: {
    borderWidth: 1,
    backgroundColor: '#FF7900',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  checkInBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 600,
  },

  subHeader: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 20,
  },

  checkInContentHeader: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    marginBottom: 6,
  },

  content: {
    paddingLeft: 30,
    paddingRight: 30,
  },

  btnText: {
    color: '#FF7900',
  },
});

export default Home;
