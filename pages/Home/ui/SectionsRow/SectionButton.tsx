import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "@/pages/Home/ui/SectionsRow/buttonStyles";

export type SectionButtonProps = {
    icon: React.ElementType;
    title: string;
    onPress?: () => void;
};

export default function SectionButton({ icon: Icon, title, onPress }: SectionButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon size={24} color="#007AFF" />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
