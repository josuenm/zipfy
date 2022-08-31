import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "@screens/Dashboard";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Dashboard} />
    </Tab.Navigator>
  );
};
