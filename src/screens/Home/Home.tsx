import { View, TextInput} from "react-native";
import { HomeScreenProps } from "../../navigation/types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PlacePrediction } from "../../utils/types";
import { RootState } from "../../store";
import { addToHistory } from "../../store/slices/historySlice";
import { useLazyGetPlaceDetailsQuery, useLazySearchPlacesQuery } from "../../store/api/placesApi";
import { styles } from "./styles";
import SuggestionsList from "../../components/SuggestionList";
import HistoryList from "../../components/HistoryList";

const HomeScreen = ({ navigation }: HomeScreenProps) => {

    const history = useSelector((state: RootState) => state.history.items);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);
    const [triggerSearch, { data: searchData, isFetching: isSearching }] = useLazySearchPlacesQuery();
    const [getPlaceDetails, { data: detailsData, isFetching: isFetchingDetails, error }] = useLazyGetPlaceDetailsQuery();


    useEffect(() => {
        if (searchData && searchData.predictions) {
            setSuggestions(searchData.predictions as PlacePrediction[]);
        }
    }, [searchData]);

    const fetchSuggestions = (text: string) => {
        setInput(text);
        if (text.length < 2) {
            setSuggestions([]);
            return;
        }
        triggerSearch(text);
    };

    const handleSelectPrediction = async (placeId: string) => {
        const result = await getPlaceDetails(placeId).unwrap();

        const location = result.result.geometry.location;

        const place = {
            place_id: result.result.place_id,
            name: result.result.name,
            address: result.result.formatted_address,
            location: {
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
        };

        dispatch(addToHistory(place));
        setSuggestions([]);
        navigation.navigate('MapScreen', { region: place });
    };


    return (
        <View style={styles.container}>
            {/* Search Input */}
            <TextInput
                value={input}
                onChangeText={fetchSuggestions}
                placeholder="Search for places"
                placeholderTextColor="#ccc"
                style={styles.input}
            />

            <View style={styles.content}>
                {/* History List */}
                <HistoryList history={history} />
                
                {/* Suggestion List */}
                {suggestions.length > 0 && (
                    <View style={styles.overlay}>
                        <SuggestionsList
                            suggestions={suggestions}
                            onSelect={handleSelectPrediction}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

export default HomeScreen