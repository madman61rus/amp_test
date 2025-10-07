import { NotificationsStack } from "@/app/navigation/NotificationsStack";
import { HomeHeader } from "@/app/navigation/homeHeader";
import { NotificationsHeader } from "@/app/navigation/notificationsHeader/NotificationsHeader";
import { HomeScreen } from "@/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen} options={{
                header: () => <HomeHeader />
            }} />
            <Stack.Screen name="NotificationsStack" component={NotificationsStack} options={{
                header: () => <NotificationsHeader />,
                contentStyle: { backgroundColor: '#000' }
            }} />
        </Stack.Navigator>
    );
};

