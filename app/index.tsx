import { RootNavigator } from "@/app/navigation/RootNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#000',
            card: '#000',
        },
    };
    return (
    <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
            <RootNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
    );
}

