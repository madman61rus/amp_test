// eslint-disable-next-line import/namespace
import { cardStyles } from "./cardStyles";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import debit from "./assets/debit.jpg";
import CardSign from "@/pages/Home/ui/CardsList/CardSign";
import {capitalize} from "@/shared/utils/strings";

export type CardType = {
    type: 'debit' | 'virtual',
    amount: number,
    currency: string,
    number: string,
    onPress: () => void,
}

export const Card = ({card}: {card: CardType}) => {
    return (
        <TouchableOpacity onPress={card.onPress}>
           <ImageBackground style={cardStyles.card} imageStyle={{ borderRadius: 16 }} source={debit}>
               <CardSign />
               <View style={cardStyles.amountRow}>
                   <Text style={cardStyles.amount}>{card.currency}</Text>
                   <Text style={cardStyles.amount}>{card.amount}</Text>
               </View>
               <View style={cardStyles.typeRow}>
                   <Text style={cardStyles.type}>{capitalize(card.type)}</Text>
                   <Text style={cardStyles.type}>{`...${card.number}`}</Text>
               </View>

           </ImageBackground>
        </TouchableOpacity>
    );
}
