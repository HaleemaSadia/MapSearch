import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Place } from '../utils/types';

type Props = {
    history: Place[];
};

const HistoryList: React.FC<Props> = ({ history }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handlePress = (place: Place) => {
        navigation.navigate('MapScreen', { region: place });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>History</Text>
            <FlatList
                data={history}
                keyExtractor={(item) => item.place_id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <View style={styles.item}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={styles.descriptionStyle}>{item.address}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HistoryList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12,
        color: "#f1f1f2"
    },
    item: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#4B4B4C',
    },
    textStyle: {
        color: "#e3e3e4",
        fontSize: 16,
    },
    descriptionStyle: {
        color: "#9c9da1"
    }
});