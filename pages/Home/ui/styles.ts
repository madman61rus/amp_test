import {StyleSheet} from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.screenBackground,
        flex: 1,
        paddingHorizontal: 16,
    },
    sectionHeader: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.md,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontPrimary,
    },
    header: {
        marginBottom: 24
    }
});
