import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from '../StyledText';
import RefreshIcon from '@/assets/icons/RefreshIcon';
import { Power } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

export function NetPowerCard({ unitName, color }: { unitName: string, color: string }) {
  const { colors } = useTheme();
  return (
    <View style={styles.wrapper}>
      <View style={styles.updateContainer}>
        <StyledText style={[styles.updateText, { color: colors.plantSummaryBg }]}>Updated 3 seconds ago</StyledText>
        <RefreshIcon />
      </View>
      <View style={[styles.container, { backgroundColor: color }]}>
        <View>
          <StyledText weight="700" style={[styles.powerOutput, { color: colors.plantSummaryText }]}>
            1,350<StyledText weight="700" style={[styles.powerOutputDecimal, { color: colors.plantSummaryText }]}>.67</StyledText>
            <StyledText weight="700" style={[styles.powerUnit, { color: colors.plantSummaryText }]}> MW</StyledText>
          </StyledText>
          <StyledText style={[styles.currentPowerLabel, { color: colors.plantSummaryMuted }]}>Net Power</StyledText>
        </View>
        <View style={styles.unitBadge}>
          <Power size={14} color={color} />
          <StyledText weight="600" style={[styles.unitText, { color }]}>{unitName}</StyledText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  updateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
    gap: 8,
  },
  updateText: {
    fontSize: 13,
  },
  container: {
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  powerOutput: {
    fontSize: 32,
  },
  powerOutputDecimal: {
    fontSize: 32,
  },
  powerUnit: {
    fontSize: 16,
  },
  currentPowerLabel: {
    fontSize: 13,
    marginTop: 4,
  },
  unitBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 6,
  },
  unitText: {
    fontSize: 13,
  },
});
