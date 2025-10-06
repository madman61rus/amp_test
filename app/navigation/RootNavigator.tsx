import { BottomTabBar } from "@/app/navigation/bottomBar";
import { HomeHeader } from "@/app/navigation/homeHeader/ui";
import { HomeScreen } from "@/pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createBottomTabNavigator();

export const RootNavigator = () => {
    return <Stack.Navigator tabBar={(props) => <BottomTabBar {...props} />} screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home"  component={HomeScreen} options={{
            header: () => <HomeHeader />
        }} />
        <Stack.Screen name="Payments" component={HomeScreen} />
        <Stack.Screen name="History" component={HomeScreen} />
        <Stack.Screen name="Analytics" component={HomeScreen} />
        <Stack.Screen name="Chats" component={HomeScreen} />
    </Stack.Navigator>
}
