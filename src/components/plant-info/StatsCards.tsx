import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { StyledText } from '../StyledText';
import { ShieldCheck, Cloud, CheckCircle2 } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

export function StatsCards() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.card, styles.cardHalf, { backgroundColor: colors.statsCardsBg, borderColor: colors.plantCardBorder }]}>
          <StyledText weight="600" style={[styles.cardTitle, { color: colors.plantCardMuted }]}>Availability</StyledText>
          <View style={styles.availabilityContent}>
            <CircularProgress
              value={95.1}
              radius={45}
              duration={2000}
              progressValueColor={colors.plantEmissionStat}
              activeStrokeColor={colors.plantStatusOnline}
              inActiveStrokeColor={colors.leaveProgressBg}
              activeStrokeWidth={10}
              inActiveStrokeWidth={10}
              maxValue={100}
              title={'%'}
              titleStyle={{ fontWeight: 'bold', fontSize: 18, color: colors.plantEmissionStat }}
              progressValueStyle={{ fontWeight: '900', fontSize: 22, color: colors.plantEmissionStat }}
            />
          </View>
          <View style={[styles.cardFooter, { backgroundColor: `${colors.white}1a` }]}>
            <CheckCircle2 size={16} color={colors.plantStatusOnline} />
            <StyledText style={[styles.footerText, { color: colors.plantCardMuted }]}>Last 325 days</StyledText>
          </View>
        </View>
        <View style={[styles.card, styles.cardHalf, { backgroundColor: colors.statsCardsBg, borderColor: colors.plantCardBorder }]}>
            <StyledText weight="600" style={[styles.cardTitle, { color: colors.plantCardMuted }]}>Safety Hours</StyledText>
            <View style={styles.safetyContent}>
                <View style={[styles.safetyIconContainer, { backgroundColor: colors.plantSafetyIconBg }]}>
                    <ShieldCheck size={32} color={colors.plantSafetyIcon} />
                </View>
                <StyledText weight="700" style={[styles.safetyDays, { color: colors.plantEmissionStat }]}>325 days</StyledText>
            </View>
            <View style={[styles.cardFooter, { backgroundColor: `${colors.white}1a` }]}>
                <ShieldCheck size={16} color={colors.plantSafetyIcon} />
                <StyledText style={[styles.footerText, { color: colors.plantCardMuted }]}>No incident or shutdown</StyledText>
            </View>
        </View>
      </View>
      <View style={[styles.card, styles.cardFull, { backgroundColor: colors.statsCardsBg, borderColor: colors.plantCardBorder }]}>
        <StyledText weight="600" style={[styles.cardTitle, { color: colors.plantCardMuted }]}>Emission</StyledText>
        <View style={styles.emissionContent}>
            <View style={[styles.emissionIconWrapper, { backgroundColor: `${colors.white}1a`, borderColor: colors.plantCardBorder }]}>
                <Cloud size={32} color={'#77797B'} fill={'#CCD6DD'} />
                <StyledText weight="700" style={[styles.co2Text, { color: colors.plantCardText }]}>CO2</StyledText>
            </View>
            <StyledText weight="700" style={[styles.emissionValue, { color: colors.plantEmissionStat }]}>1,000 kt</StyledText>
        </View>
        <View style={[styles.cardFooter, { backgroundColor: `${colors.white}1a` }]}>
            <Cloud size={16} color={'#77797B'} />
            <StyledText style={[styles.footerText, { color: colors.plantCardMuted }]}>Kilotonnes of CO2</StyledText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  cardHalf: {
    width: '48%',
    height: 222,
  },
  cardFull: {
    width: '100%',
    height: 222,
  },
  cardTitle: {
    fontSize: 13,
  },
  availabilityContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  safetyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safetyIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safetyDays: {
    fontSize: 20,
    marginTop: 16,
  },
  emissionContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emissionIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
  },
  co2Text: {
    position: 'absolute',
    bottom: 8,
    fontSize: 12,
  },
  emissionValue: {
    fontSize: 20,
    marginTop: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 29,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    marginTop: 'auto'
  },
  footerText: {
    fontSize: 10,
  },
});
