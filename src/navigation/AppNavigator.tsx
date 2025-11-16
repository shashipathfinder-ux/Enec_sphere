import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import PlantInfoScreen from '@/screens/PlantInfoScreen';
import UnitSummaryScreen from '@/screens/UnitSummaryScreen';
import { MainDrawerParamList, RootStackParamList } from '@/types/navigation';
import { useTheme } from '@/context/ThemeContext';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<MainDrawerParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlantInfo" component={PlantInfoScreen} />
      <Stack.Screen name="UnitSummary" component={UnitSummaryScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.primaryGradient[1],
          width: 250,
        },
        drawerLabelStyle: {
          color: colors.white,
          fontFamily: 'Inter-Medium',
        },
        drawerActiveBackgroundColor: colors.primaryGradient[2],
      }}
    >
      <Drawer.Screen
        name="Main"
        component={RootStackNavigator}
        options={{
          drawerLabel: 'Home',
        }}
      />
      {/* Add other screens here */}
    </Drawer.Navigator>
  );
}
