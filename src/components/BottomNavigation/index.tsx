import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "@screens/Dashboard";
import MyAddresses from "@screens/MyAddresses";
import React from "react";
import { Item, TabBarStyle, Title } from "./styles";

interface ItemNavigationProps {
  title: string;
  icon: "home-outline" | "map-outline";
  active: boolean;
}

const ItemNavigation = ({ title, icon, active }: ItemNavigationProps) => {
  return (
    <Item active={active}>
      <Ionicons name={icon} size={20} color="white" />
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
        tabBarShowLabel: false,
        tabBarStyle: TabBarStyle.container,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <ItemNavigation title="Home" icon="home-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAddresses"
        component={MyAddresses}
        options={{
          tabBarIcon: ({ focused }) => (
            <ItemNavigation
              title="Adresses"
              icon="map-outline"
              active={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
