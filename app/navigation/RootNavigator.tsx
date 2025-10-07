import { BottomTabBar } from "@/app/navigation/bottomBar";
import { HomeStack } from "@/app/navigation/HomeStack";
import { HomeScreen } from "@/pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {PaymentsScreen} from "@/pages/Notifications/ui/payments";

const Stack = createBottomTabNavigator();

export const RootNavigator = () => {
    return <Stack.Navigator tabBar={(props) => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack"  component={HomeStack}  />
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen name="History" component={HomeScreen} />
        <Stack.Screen name="Analytics" component={HomeScreen} />
        <Stack.Screen name="Chats" component={HomeScreen} />
    </Stack.Navigator>
}
