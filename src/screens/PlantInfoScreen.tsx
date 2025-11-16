import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PlantInfoHeader } from '@/components/plant-info/PlantInfoHeader';
import { PowerSummary } from '@/components/plant-info/PowerSummary';
import { StatsCards } from '@/components/plant-info/StatsCards';
import { StationAccordion } from '@/components/plant-info/StationAccordion';
import { MaintenanceCard } from '@/components/plant-info/MaintenanceCard';
import { InfoBanner } from '@/components/plant-info/InfoBanner';
import { useTheme } from '@/context/ThemeContext';

export default function PlantInfoScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.screenBg }]}>
      <PlantInfoHeader />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PowerSummary />
        <StatsCards />
        <StationAccordion />
        <MaintenanceCard />
        <InfoBanner />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
});
