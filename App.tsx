import Text from "@components/Text";
import { ImageBackground, StatusBar } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${() => getStatusBarHeight()}px;
  padding-bottom: ${() => getBottomSpace()}px;
`;

const Background = styled(ImageBackground)`
  flex: 1;
`;

export default function App() {
  return (
    <Background
      source={require("@assets/images/background.png")}
      resizeMode="cover"
    >
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Container>
    </Background>
  );
}
