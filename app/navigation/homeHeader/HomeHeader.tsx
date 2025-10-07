import {Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "@/app/navigation/homeHeader/styles";
import HeaderAvatar from "@/app/navigation/homeHeader/HeaderAvatar";
import Qr from "@/app/navigation/homeHeader/Qr";
import {useNavigation} from "@react-navigation/native";

export const HomeHeader = () => {
    const navigation = useNavigation();

    const goToNotifications = () => {
        navigation.navigate("HomeStack", {screen: "NotificationsStack"});
    }
    return (
        <SafeAreaView edges={['top']} style={styles.topBar}>
            <View style={styles.container}>
                <TouchableOpacity hitSlop={10} style={styles.leftContainer} onPress={goToNotifications}>
                    <View style={styles.avatar}><HeaderAvatar/></View>
                    <Text style={styles.name}>{"Charlotte  >"}</Text>
                </TouchableOpacity>
                <TouchableOpacity hitSlop={10} style={styles.qr}><Qr/></TouchableOpacity>
            </View>
        </SafeAreaView>);
}
