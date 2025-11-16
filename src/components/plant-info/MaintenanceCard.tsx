import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from '../StyledText';
import { useTheme } from '@/context/ThemeContext';

export function MaintenanceCard() {
  const { colors } = useTheme();
  const progress = 35; // Example progress percentage

  return (
    <View style={[styles.container, { backgroundColor: colors.maintenanceCardBg, borderColor: colors.plantCardBorder }]}>
      <StyledText weight="700" style={[styles.title, { color: colors.outageTitle }]}>Upcoming Maintenance</StyledText>
      <View style={styles.content}>
        <View>
          <StyledText weight="600" style={[styles.nextText, { color: colors.outageTitle }]}>Next: Refueling</StyledText>
          <StyledText style={[styles.subText, { color: colors.plantCardMuted }]}>U3 maintenance</StyledText>
        </View>
        <View style={styles.daysLeftContainer}>
          <StyledText weight="800" style={[styles.daysLeft, { color: colors.plantSafetyIcon }]}>87 <StyledText weight="500" style={[styles.daysLeftLabel, { color: colors.plantSafetyIcon }]}>Days Left</StyledText></StyledText>
          <StyledText style={[styles.dateText, { color: colors.outageItemDate }]}>Jan 17, 2026</StyledText>
        </View>
      </View>
      <StyledText style={[styles.subText, { color: colors.plantCardMuted }]}>Planned Outage</StyledText>
      <View style={[styles.progressBarContainer, { backgroundColor: colors.leaveProgressBg }]}>
        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: colors.plantSafetyIcon }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  nextText: {
    fontSize: 14,
  },
  subText: {
    fontSize: 12,
    marginTop: 4,
  },
  daysLeftContainer: {
    alignItems: 'flex-end',
  },
  daysLeft: {
    fontSize: 20,
  },
  daysLeftLabel: {
    fontSize: 12,
  },
  dateText: {
    fontSize: 11,
    marginTop: 2,
  },
  progressBarContainer: {
    height: 6,
    borderRadius: 8,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 8,
  },
});
