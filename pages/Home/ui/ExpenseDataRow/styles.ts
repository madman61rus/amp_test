import {StyleSheet} from "react-native";
import {colors, typography} from "@/shared/config/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 16,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 16
    },
    name: {
        fontFamily: 'Inter',
        fontWeight: typography.fontWeight.medium,
        fontSize: typography.fontSize.sm2,
        color: colors.fontPrimary
    },
    type: {
        fontFamily: 'Inter',
        fontWeight: typography.fontWeight.regular,
        fontSize: typography.fontSize.sm2,
        color: colors.fontSubtitle
    },
    typeContainer: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 4,
        alignItems: 'center'
    },
    typeSign: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: colors.fontSecondary,
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 12
    }
})
