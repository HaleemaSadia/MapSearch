import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PlacePrediction } from '../utils/types';

type Props = {
    suggestions: PlacePrediction[];
    onSelect: (placeId: string) => void;
};

const SuggestionsList: React.FC<Props> = ({ suggestions, onSelect }) => {
    return (
        <FlatList
            style={styles.list}
            data={suggestions}
            keyExtractor={(item) => item.place_id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => onSelect(item.place_id)}
                >
                    <Text style={styles.textStyle}>{item.description}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

export default SuggestionsList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#4B4B4C',
    },
    textStyle: {
        color: "#fff"
    }
});