import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "@screens/Dashboard";
import { Item, Navigator, Title } from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TouchableOpacity activeOpacity={0.6}>
                <Item>
                  <Ionicons name="home-outline" size={20} color="white" />
                  <Title>Home</Title>
                </Item>
              </TouchableOpacity>
            );
          },
          // tabBarActiveTintColor: "tomato",
          // tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};
