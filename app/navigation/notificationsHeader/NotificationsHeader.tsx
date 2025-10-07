import { BackIcon } from "@/app/navigation/notificationsHeader/BackIcon";
import { NotificationIcon } from "@/app/navigation/notificationsHeader/NotificationIcon";
import { colors, typography } from "@/shared/config/theme";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const NotificationsHeader = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.topBar, { paddingTop: insets.top }]}>
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
        </View>);
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.lg2,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontPrimary,
    },
    topBar: {
        backgroundColor: colors.screenBackground,
        paddingHorizontal: 16,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,

    },
})
