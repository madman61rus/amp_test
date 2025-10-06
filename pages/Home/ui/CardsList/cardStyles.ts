import { StyleSheet } from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const cardStyles = StyleSheet.create({
    card: {
        width: 142,
        height: 98,
        borderRadius: 16,
        overflow: 'hidden',
        padding: 12,
    },
    amount: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.md2,
        fontWeight: typography.fontWeight.semiBold,
        color: colors.fontPrimary
    },
    amountRow: {
        flexDirection: 'row',
        marginTop: 13,
    },
    typeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6
    },
    type: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm2,
        fontWeight: typography.fontWeight.regular,
        color: colors.fontPrimary
    },
});
