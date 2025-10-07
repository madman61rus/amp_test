import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import {colors} from "@/shared/config/theme";

export const DeliveryScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.screenBackground
    }
})
