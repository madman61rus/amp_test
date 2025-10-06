import {View, Image, Text} from "react-native";
import {styles} from "@/pages/Home/ui/ExpenseDataRow/styles";
import {ExpensesDataType} from "@/data/expensesData";
import {formatDate} from "@/shared/utils/date";


export const ExpenseDataRow = ({data}: {data: ExpensesDataType}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={data.avatar} style={styles.avatar} />
                <View>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.typeContainer}>
                        <View style={styles.typeSign} />
                        <Text style={styles.type}>{data.type}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.name}>{`${data.currency} ${data.amount}`}</Text>
                <Text style={styles.type}>{formatDate(data.date)}</Text>
            </View>
        </View>
    );
}
