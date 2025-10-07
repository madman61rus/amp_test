import { colors } from "@/shared/config/theme";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTabItems } from './model/useTabItems';

export const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
    const insets = useSafeAreaInsets();
    const tabs = useTabItems();

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingBottom: insets.bottom,
                backgroundColor: colors.screenBackground,
                // remove top separator and any shadow
                borderTopWidth: 0,
                shadowOpacity: 0,
                shadowRadius: 0,
                shadowOffset: { width: 0, height: 0 },
                elevation: 0,
            }}
        >
            {tabs.map(({ name, Icon }) => {
                const isActive = state.routes[state.index]?.name === name;
                return (
                    <TouchableOpacity
                        key={name}
                        onPress={() => navigation.navigate(name as never)}
                        style={{ alignItems: 'center', padding: 10 }}
                    >
                        <Icon color={isActive ? '#FE5900' : '#FFF'} size={24} />
                        <Text style={{color: isActive ? '#FE5900' : '#FFF'}}>{name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
};

