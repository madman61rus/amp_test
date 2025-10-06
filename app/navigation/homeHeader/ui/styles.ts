import {StyleSheet} from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const styles = StyleSheet.create({
    topBar: {
        backgroundColor: colors.screenBackground,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8.5
    },
    avatar: {
        padding: 10,
    },
    name: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.md,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontPrimary,
    },
    qr: {
        padding: 10
    }
})
