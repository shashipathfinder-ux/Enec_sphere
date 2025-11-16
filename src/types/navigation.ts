import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  PlantInfo: undefined;
  UnitSummary: { unitName: string; color: string };
};

export type MainDrawerParamList = {
  Main: undefined;
};

// Prop types for Screens
export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Home'>,
  DrawerNavigationProp<MainDrawerParamList>
>;

export type PlantInfoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PlantInfo'>;

export type UnitSummaryScreenRouteProp = RouteProp<RootStackParamList, 'UnitSummary'>;
export type UnitSummaryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UnitSummary'>;
