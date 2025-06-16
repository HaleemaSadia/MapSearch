import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const placesApi = createApi({
  reducerPath: 'placesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://maps.googleapis.com/maps/api/place/',
  }),
  endpoints: (builder) => ({
    searchPlaces: builder.query<any, string>({
      query: (input) => `autocomplete/json?input=${input}&key=${Config.GOOGLE_API_KEY}&language=en`,
    }),
    getPlaceDetails: builder.query<any, string>({
      query: (placeId) => `details/json?place_id=${placeId}&key=${Config.GOOGLE_API_KEY}`,
    }),
  }),
});

export const {
  useSearchPlacesQuery,
  useLazySearchPlacesQuery,
  useGetPlaceDetailsQuery,
  useLazyGetPlaceDetailsQuery,
} = placesApi;