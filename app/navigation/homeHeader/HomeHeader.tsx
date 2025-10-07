import HeaderAvatar from "@/app/navigation/homeHeader/HeaderAvatar";
import Qr from "@/app/navigation/homeHeader/Qr";
import { styles } from "@/app/navigation/homeHeader/styles";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeHeader = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const insets = useSafeAreaInsets();

    const goToNotifications = () => {
        navigation.navigate("HomeStack", {screen: "NotificationsStack"});
    }
    return (
        <View style={[styles.topBar, { paddingTop: insets.top }]}>
            <View style={styles.container}>
                <TouchableOpacity hitSlop={10} style={styles.leftContainer} onPress={goToNotifications}>
                    <View style={styles.avatar}><HeaderAvatar/></View>
                    <Text style={styles.name}>{"Charlotte  >"}</Text>
                </TouchableOpacity>
                <TouchableOpacity hitSlop={10} style={styles.qr}><Qr/></TouchableOpacity>
            </View>
        </View>);
}
