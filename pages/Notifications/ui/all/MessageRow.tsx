import { NotificationDataType } from "@/data/notificationsData";
import { colors, typography } from "@/shared/config/theme";
import { formatDate } from "@/shared/utils/date";
import { capitalize } from "@/shared/utils/strings";
import { Image, StyleSheet, Text, View } from "react-native";

export const MessageRow = ({data}: {data: NotificationDataType} ) => {
    console.log(data);
    let operationSign = '';

    switch (data.type) {
        case "send":
            operationSign = '-';
            break;
        case "receive":
            operationSign = '+';
            break;
    }

    return (
        <View style={styles.container}>
        <Image source={data.image} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    {!data.isRead && <View style={styles.read} />}
                </View>
                {data.type === 'notification' ?
                    <Text  style={styles.body}>{data.body}</Text> :
                    <View>
                        <Text style={styles.amount}>{`${operationSign}${data.currency}${data.amount}`}</Text>
                        <Text style={styles.card}>{`${capitalize(data.cardType)} ••${data.cardNumber}`}</Text>
                        <Text style={styles.card}>{`${data.currency}${data.cardAmount}`}</Text>
                    </View>
                }
                <Text style={styles.bottomContainer}>
                <Text style={styles.bottomText}>{`${formatDate(data.date)} • ${data.section}`}</Text>
                    </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 24,
        gap: 12,
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 16,
    },
    content: {
        flex: 1,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm2,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontPrimary,
    },
    body: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm2,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontSubtitle,
        width: '75%',
        marginTop: 6,
    },
    read: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: colors.fontSecondary
    },
    bottomText: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        color: colors.fontSubtitle2,
    },
    bottomContainer: {
        marginTop: 6,
    },
    amount: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.lg2,
        fontWeight: typography.fontWeight.semiBold,
        color: colors.fontSecondary,
        marginTop: 6,
    },
    card: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm2,
        fontWeight: typography.fontWeight.regular,
        color: colors.fontCard,
        marginTop: 6,
    }
});
