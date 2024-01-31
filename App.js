import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/themeExtender";

import AuthStackScreen from "./src/components/authFlow/AuthStackScreen";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}
