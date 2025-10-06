import {StyleSheet} from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 7.5,
        alignItems: 'center',
        marginTop: 24,
    },
    title: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.sm,
        color: colors.fontPrimary,
        marginTop: 8,
        fontWeight: typography.fontWeight.medium

    }
})
