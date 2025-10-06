import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "@/pages/Home/ui/styles";
import {useNavigation} from "@react-navigation/native";
import { SectionsRow } from "@/pages/Home/ui/SectionsRow";
import {CardsList} from "@/pages/Home/ui/CardsList";
import {Expenses} from "@/pages/Home/ui/Expenses/Expenses";

export const HomeScreen = () => {
    const navigation = useNavigation();


    return <SafeAreaView style={styles.screen}>
        <ScrollView>
        <SectionsRow />
            <CardsList />
            <Expenses />
        </ScrollView>
    </SafeAreaView>
}
