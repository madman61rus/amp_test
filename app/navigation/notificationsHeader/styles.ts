import {StyleSheet} from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const styles = StyleSheet.create({
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
        paddingBottom: 16,
    },
})
