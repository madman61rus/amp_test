import {StyleSheet} from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const styles = StyleSheet.create({
    container: {
        marginTop: 24
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.lg2,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontPrimary,
    },
    amount: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm2,
        fontWeight: typography.fontWeight.regular,
        color: colors.fontPrimary,
    },
    expenseContainer: {
        flexDirection: 'row',
        gap: 2,
        width: '98%',
        marginTop: 16,
    }
})
