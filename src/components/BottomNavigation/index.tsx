import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "@screens/Dashboard";
import React from "react";
import { Item, TabBarStyle, Title } from "./styles";

interface ItemNavigationProps {
  title: string;
  icon: "home-outline";
  active: boolean;
}

const ItemNavigation = ({ title, icon, active }: ItemNavigationProps) => {
  return (
    <Item active={active}>
      <Ionicons name={icon} size={20} color={active ? "white" : "black"} />
      {!active && <Title>{title}</Title>}
    </Item>
  );
};

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: TabBarStyle.container,
        tabBarIconStyle: TabBarStyle.icon,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: ({ focused }) => (
            <ItemNavigation title="Home" icon="home-outline" active={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
