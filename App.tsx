import { BottomNavigation } from "@components/BottomNavigation";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { theme, ThemeProps } from "@lib/theme";
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground, StatusBar } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled, { ThemeProvider } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding-top: ${() => getStatusBarHeight()}px;
  padding-bottom: ${() => getBottomSpace()}px;
`;

const Background = styled(ImageBackground)`
  flex: 1;
`;

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer theme={theme.navigationTheme}>
      <ThemeProvider theme={theme as ThemeProps}>
        <Background
          source={require("@assets/images/background.png")}
          resizeMode="cover"
        >
          <StatusBar
            barStyle="default"
            backgroundColor="transparent"
            translucent
          />
          <Container>
            <BottomNavigation />
          </Container>
        </Background>
      </ThemeProvider>
    </NavigationContainer>
  );
}
