import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { MapScreenProps } from '../../navigation/types';
import MapView, { Marker } from 'react-native-maps';
import { darkMapStyle } from './styles';

const MapScreen = ({ route }: MapScreenProps) => {
  const { region } = route.params;


  return (
    <View style={styles.container}>
      {region?.location && (
        <MapView style={styles.map} customMapStyle={darkMapStyle} region={region.location}>
          <Marker
            coordinate={region.location}
            title={region.name}
            description={region.address}
          />
        </MapView>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1
  },
});


export default MapScreen;


