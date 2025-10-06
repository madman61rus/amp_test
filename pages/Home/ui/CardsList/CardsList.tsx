import {FlatList, View} from "react-native";
import {CardType, Card} from "@/pages/Home/ui/CardsList/Card";
import {styles} from "@/pages/Home/ui/CardsList/styles";
import {AddButton} from "@/pages/Home/ui/CardsList/AddButton";

const cards = [
    {
        type: 'debit',
        amount: 4200,
        currency: '$',
        number: '4534',
        onPress: () => {}
    },
    {
        type: 'virtual',
        amount: 5900,
        currency: '$',
        number: '4534',
        onPress: () => {}
    }
] as CardType[];

export const CardsList = ()=> {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={cards}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({item}) => <Card key={`${item.type}-${item.number}`} card={item} />}
            />
            <AddButton onPress={() => 0} />
        </View>

    )
}
