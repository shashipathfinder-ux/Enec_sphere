import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { StyledText } from '../StyledText';
import { useTheme } from '@/context/ThemeContext';

export function AttendanceCard() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StyledText weight="500" style={[styles.dateText, { color: colors.textPrimary }]}>
        My attendance, Wednesday October 29, 2025
      </StyledText>
      <View style={styles.blurWrapper}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={20}
        />
        <View style={styles.cardContent}>
          <View style={styles.timeSection}>
            <StyledText weight="500" style={[styles.time, { color: colors.textPrimary }]}>
              10:45<StyledText weight="500" style={[styles.amPm, { color: colors.textPrimary }]}>AM</StyledText>
            </StyledText>
            <StyledText weight="600" style={[styles.label, { color: colors.textMuted }]}>
              Clock-in
            </StyledText>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeSection}>
            <StyledText weight="500" style={[styles.timePlaceholder, { color: colors.textPrimary }]}>
              --:--
            </StyledText>
            <StyledText weight="600" style={[styles.label, { color: colors.textMuted }]}>
              Clock-Out
            </StyledText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dateText: {
    fontSize: 12,
    marginBottom: 12,
  },
  blurWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cardContent: {
    flexDirection: 'row',
    height: 101,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
  },
  timeSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 32,
  },
  amPm: {
    fontSize: 20,
  },
  timePlaceholder: {
    fontSize: 32,
    letterSpacing: 2,
  },
  label: {
    fontSize: 13,
    marginTop: 6,
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(227, 228, 232, 0.2)',
    marginVertical: 19,
  },
});
