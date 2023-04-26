import React, { useRef,useEffect } from "react";
import { View, StyleSheet, Text, Dimensions,Button } from "react-native";
import MapView from 'react-native-maps';





const MapViews = () => {


  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // height:Dimensions.get('screen').height
  }
});
export default MapViews;