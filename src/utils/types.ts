export type Place = {
  place_id: string;
  name: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
};

export type PlacePrediction = {
  place_id: string;
  description: string;
};