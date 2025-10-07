
import { AllScreen } from "@/pages/Notifications/ui/all";
import { DeliveryScreen } from "@/pages/Notifications/ui/delivery";
import { PaymentsScreen } from "@/pages/Notifications/ui/payments";
import { SystemScreen } from "@/pages/Notifications/ui/system";
import { TravelScreen } from "@/pages/Notifications/ui/travel";
import { colors, typography } from "@/shared/config/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TabStack = createMaterialTopTabNavigator();


export const NotificationsStack = () => {
    return (
        <TabStack.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: colors.screenBackground },
                tabBarActiveTintColor: colors.fontSecondary,
                tabBarInactiveTintColor: colors.fontPrimary,
                tabBarLabelStyle: {
                    fontFamily: 'Inter',
                    fontSize: typography.fontSize.sm2,
                    fontWeight: typography.fontWeight.regular,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.fontSecondary
                }
            }}
        >
            <TabStack.Screen name="All" component={AllScreen}  />
            <TabStack.Screen name="Payments" component={PaymentsScreen}  />
            <TabStack.Screen name="System" component={SystemScreen}  />
            <TabStack.Screen name="Delivery" component={DeliveryScreen}  />
            <TabStack.Screen name="Travel" component={TravelScreen}  />
        </TabStack.Navigator>
    );
}
