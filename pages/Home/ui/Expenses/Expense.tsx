import {DimensionValue, View} from "react-native";

export type ExpenseType = {
    percent: DimensionValue;
    color: string;
}

export const Expense = ({color, percent}: ExpenseType) => {
    return (
        <View style={[styles.container, {width: percent, backgroundColor: color}]}></View>
    )
}

const styles = {
    container: {
        height: 8,
        borderRadius: 3,
    }
}
