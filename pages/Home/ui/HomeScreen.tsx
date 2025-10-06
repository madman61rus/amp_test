
import {Text, SectionList, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "@/pages/Home/ui/styles";
import { SectionsRow } from "@/pages/Home/ui/SectionsRow";
import {CardsList} from "@/pages/Home/ui/CardsList";
import {Expenses} from "@/pages/Home/ui/Expenses/Expenses";
import {data} from "@/data/expensesData";
import {ExpenseDataRow} from "@/pages/Home/ui/ExpenseDataRow/ExpenseDataRow";

export const HomeScreen = () => {

    return <SafeAreaView style={styles.screen}>
        <SectionList
            sections={data}
            renderItem={({ item }) => <ExpenseDataRow data={item} />}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.sectionHeader}>{title}</Text>
            )}
            ListHeaderComponent={
            <View style={styles.header}>
                <SectionsRow />
                <CardsList />
                <Expenses />
            </View>
        }
        />
    </SafeAreaView>
}
