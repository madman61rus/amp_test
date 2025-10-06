import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {PlusIcon} from "@/pages/Home/ui/CardsList/PlusIcon";

export const AddButton = ({onPress}: {onPress: () => void}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <PlusIcon />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
    }
})
