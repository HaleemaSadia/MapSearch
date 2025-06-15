import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Place } from "../utils/types";


export type RootStackParamList = {

    Home: undefined;
    MapScreen: {
        region: Place
    };

};

export type HomeScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Home"
>;

export type MapScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "MapScreen"
>;

