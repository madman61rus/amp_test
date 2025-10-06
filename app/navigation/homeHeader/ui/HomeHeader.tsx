import {Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "@/app/navigation/homeHeader/ui/styles";
import HeaderAvatar from "@/app/navigation/homeHeader/ui/HeaderAvatar";
import Qr from "@/app/navigation/homeHeader/ui/Qr";

export const HomeHeader = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.topBar}>
            <View style={styles.container}>
                <TouchableOpacity hitSlop={10} style={styles.leftContainer}>
                    <View style={styles.avatar}><HeaderAvatar/></View>
                    <Text style={styles.name}>{"Charlotte  >"}</Text>
                </TouchableOpacity>
                <TouchableOpacity hitSlop={10} style={styles.qr}><Qr/></TouchableOpacity>
            </View>
        </SafeAreaView>);
}
