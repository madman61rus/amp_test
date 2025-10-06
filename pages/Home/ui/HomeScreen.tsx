import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "@/pages/Home/ui/styles";
import {useNavigation} from "@react-navigation/native";
import {HeaderTitle} from "@react-navigation/elements";
import {HomeHeader} from "@/app/navigation/homeHeader/ui";
import SectionsRow from "@/pages/Home/ui/SectionsRow/SectionsRow";

export const HomeScreen = () => {
    const navigation = useNavigation();


    return <SafeAreaView style={styles.screen}>
        <ScrollView>
        <SectionsRow />
        </ScrollView>
    </SafeAreaView>
}
