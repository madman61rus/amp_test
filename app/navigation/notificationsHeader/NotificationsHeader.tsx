import {Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "@/app/navigation/notificationsHeader/styles";
import {BackIcon} from "@/app/navigation/notificationsHeader/BackIcon";
import {NotificationIcon} from "@/app/navigation/notificationsHeader/NotificationIcon";
import {useNavigation} from "@react-navigation/native";

export const NotificationsHeader = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView edges={['top']} style={styles.topBar}>
            <View style={styles.container}>
                <TouchableOpacity hitSlop={10} onPress={navigation.goBack}>
                    <BackIcon />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Notifications</Text>
                </View>
                <TouchableOpacity>
                    <NotificationIcon />
                </TouchableOpacity>
            </View>

        </SafeAreaView>);
}
