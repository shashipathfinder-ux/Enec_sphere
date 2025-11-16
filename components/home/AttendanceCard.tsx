import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { StyledText } from '../StyledText';
import { Colors } from '@/constants/Colors';

export function AttendanceCard() {
  return (
    <View style={styles.container}>
      <StyledText weight="500" style={styles.dateText}>
        My attendance, Wednesday October 29, 2025
      </StyledText>
      <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
        <View style={styles.cardContent}>
          <View style={styles.timeSection}>
            <StyledText weight="500" style={styles.time}>
              10:45<StyledText weight="500" style={styles.amPm}>AM</StyledText>
            </StyledText>
            <StyledText weight="600" style={styles.label}>
              Clock-in
            </StyledText>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeSection}>
            <StyledText weight="500" style={styles.timePlaceholder}>
              --:--
            </StyledText>
            <StyledText weight="600" style={styles.label}>
              Clock-Out
            </StyledText>
          </View>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dateText: {
    color: Colors.textPrimary,
    fontSize: 12,
    marginBottom: 12,
  },
  blurContainer: {
    borderRadius: 16,
    overflow: 'hidden',
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
    color: Colors.textPrimary,
  },
  amPm: {
    fontSize: 20,
    color: Colors.textPrimary,
  },
  timePlaceholder: {
    fontSize: 32,
    color: Colors.textPrimary,
    letterSpacing: 2,
  },
  label: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 6,
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(227, 228, 232, 0.2)',
    marginVertical: 19,
  },
});
