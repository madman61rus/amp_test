import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTabItems } from './model/useTabItems';
import {colors} from "@/shared/config/theme";

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
                borderTopWidth: 1,
                borderTopColor: '#eee',
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

