import { notificationsData } from "@/data/notificationsData";
import { MessageRow } from "@/pages/Notifications/ui/all/MessageRow";
import { colors, typography } from "@/shared/config/theme";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const AllScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <SectionList
                sections={notificationsData}
                stickySectionHeadersEnabled={false}
                renderItem={({item}) => <MessageRow data={item} />}
                renderSectionHeader={({ section }) => {
                    const isFirst = section === notificationsData[0];
                    return (
                        <View style={styles.sectionHeaderContainer}>
                            {!isFirst && <View style={styles.separator} />}
                            <Text style={styles.sectionHeader}>{section.title.toUpperCase()}</Text>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.screenBackground,
        paddingHorizontal: 16,
    },
    sectionHeader: {
        fontFamily: 'Inter',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.semiBold,
        color: colors.fontSubtitle,
    },
    sectionHeaderContainer: {
        width: '100%',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.divider,
        marginBottom: 16,
    }
})
