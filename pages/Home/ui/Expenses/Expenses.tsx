import {View, Text} from "react-native";
import {styles} from "@/pages/Home/ui/Expenses/styles";
import {colors} from "@/shared/config/theme";
import {Expense, ExpenseType} from "@/pages/Home/ui/Expenses/Expense";

const expenses: ExpenseType[] = [
    {
        percent: '60%',
        color: '#CC3F02',
    },
    {
        percent: '20%',
        color: '#FE5900',
    },
    {
        percent: '10%',
        color: '#FF9332',
    },
    {
        percent: '10%',
        color: '#FFD8A5',
    }
]

export const Expenses = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>
                    <Text style={styles.title}>Expenses in </Text>
                    <Text style={[styles.title, {color: colors.fontSecondary}]}>June</Text>
                </Text>
                <Text style={styles.amount}>$5000</Text>
            </View>
            <View style={styles.expenseContainer}>
                {expenses.map(expense => <Expense key={`${expense.color}${expense.percent}`} percent={expense.percent} color={expense.color} />)}
            </View>
        </View>
    );
}
