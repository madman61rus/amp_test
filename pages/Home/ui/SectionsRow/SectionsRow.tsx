
import TravelIcon from "@/pages/Home/ui/SectionsRow/icons/TravelIcon";
import DeliveryIcon from "@/pages/Home/ui/SectionsRow/icons/DeliveryIcon";
import BonusesIcon from "@/pages/Home/ui/SectionsRow/icons/BonusesIcon";
import SupportIcon from "@/pages/Home/ui/SectionsRow/icons/SupportIcon";
import {View} from "react-native";
import SectionButton from "@/pages/Home/ui/SectionsRow/SectionButton";
import {styles} from "@/pages/Home/ui/SectionsRow/styles";

const buttons = [
    {icon: TravelIcon, title: 'Travel'},
    {icon: DeliveryIcon, title: 'Delivery'},
    {icon: BonusesIcon, title: 'Bonuses'},
    {icon: SupportIcon, title: 'Support'},
]

export const SectionsRow = () => {


    return (
        <View style={styles.container}>
            {buttons.map(({icon, title}) => <SectionButton key={title} icon={icon} title={title} onPress={() => null} /> )}
        </View>
    )
}
