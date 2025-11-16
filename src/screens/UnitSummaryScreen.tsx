import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { UnitSummaryScreenRouteProp } from '@/types/navigation';
import { UnitSummaryHeader } from '@/components/unit-summary/UnitSummaryHeader';
import { NetPowerCard } from '@/components/unit-summary/NetPowerCard';
import { ContainmentStats } from '@/components/unit-summary/ContainmentStats';
import { GeneratorPowerCard } from '@/components/unit-summary/GeneratorPowerCard';
import { ReactorPowerCard } from '@/components/unit-summary/ReactorPowerCard';
import { TurbineSpeedCard } from '@/components/unit-summary/TurbineSpeedCard';
import { SystemStats } from '@/components/unit-summary/SystemStats';
import { InfoBanner } from '@/components/plant-info/InfoBanner';
import { useTheme } from '@/context/ThemeContext';

export default function UnitSummaryScreen() {
  const { colors } = useTheme();
  const route = useRoute<UnitSummaryScreenRouteProp>();
  const { unitName, color } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: colors.screenBg }]}>
      <UnitSummaryHeader unitName={unitName} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <NetPowerCard unitName={unitName} color={color} />
        <ContainmentStats />
        <View style={styles.cardsContainer}>
          <GeneratorPowerCard />
          <ReactorPowerCard />
          <TurbineSpeedCard />
          <SystemStats />
          <InfoBanner />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 16,
  },
});
