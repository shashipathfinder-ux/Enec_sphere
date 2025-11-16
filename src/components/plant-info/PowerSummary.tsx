import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from '../StyledText';
import RefreshIcon from '@/assets/icons/RefreshIcon';
import { Power } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

const CapacityBar = () => {
  const { colors } = useTheme();
  const totalBars = 19;
  const activeBars = 6;
  return (
    <View style={styles.capacityBarContainer}>
      {Array.from({ length: totalBars }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.capacityBar,
            { backgroundColor: i < activeBars ? colors.plantCapacityBar : colors.white },
          ]}
        />
      ))}
    </View>
  );
};

export function PowerSummary() {
  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
        <View style={styles.updateContainer}>
            <StyledText style={[styles.updateText, { color: colors.outageTitle }]}>Updated 3 seconds ago</StyledText>
            <RefreshIcon color={colors.plantHeaderIcon}/>
        </View>
        <View style={[styles.container, { backgroundColor: colors.powerSummarySubCardBg, borderColor: colors.plantCardBorder }]}>
            <View style={[styles.mainCard, { backgroundColor: colors.plantSummaryBg }]}>
                <View>
                    <StyledText weight="700" style={[styles.powerOutput, { color: colors.plantSummaryText }]}>
                        1,350<StyledText weight="700" style={[styles.powerOutputDecimal, { color: colors.plantSummaryText }]}>.67</StyledText>
                        <StyledText weight="700" style={[styles.powerUnit, { color: colors.plantSummaryText }]}> MW</StyledText>
                    </StyledText>
                    <StyledText style={[styles.currentPowerLabel, { color: colors.plantSummaryMuted }]}>Current Power Output</StyledText>
                </View>
                <View style={styles.capacityContainer}>
                    <CapacityBar />
                    <StyledText style={[styles.capacityText, { color: colors.plantSummaryMuted }]}>23.8% Capacity</StyledText>
                </View>
            </View>
            <View style={styles.subCardsContainer}>
                <View style={[styles.subCard, { backgroundColor: colors.powerSummarySubCardBg }]}>
                    <StyledText weight="700" style={[styles.subCardValue, { color: colors.plantCardText }]}>1,350.67</StyledText>
                    <StyledText style={[styles.subCardLabel, { color: colors.plantCardMuted }]}>Cumulative Power</StyledText>
                    <View style={[styles.subCardIcon, { backgroundColor: '#CCD6DD1a'}]}>
                        <Power size={14} color={colors.white} />
                    </View>
                </View>
                <View style={[styles.subCard, { backgroundColor: colors.powerSummarySubCardBg }]}>
                    <StyledText weight="700" style={[styles.subCardValue, { color: colors.plantCardText }]}>1,350.67</StyledText>
                    <StyledText style={[styles.subCardLabel, { color: colors.plantCardMuted }]}>Contribution to Grid</StyledText>
                    <View style={[styles.subCardIcon, { backgroundColor: '#CCD6DD1a'}]}>
                        <Power size={14} color={colors.white} />
                    </View>
                </View>
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
    borderWidth: 1,
    padding: 1,
  },
  mainCard: {
    borderRadius: 12,
    padding: 20,
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
  capacityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  capacityBarContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  capacityBar: {
    width: 14,
    height: 4,
    borderRadius: 8,
  },
  capacityText: {
    fontSize: 10,
  },
  subCardsContainer: {
    flexDirection: 'row',
    gap: 1,
  },
  subCard: {
    flex: 1,
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  subCardValue: {
    fontSize: 16,
  },
  subCardLabel: {
    fontSize: 13,
    marginTop: 4,
  },
  subCardIcon: {
      position: 'absolute',
      right: 12,
      top: 12,
      width: 28,
      height: 28,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
  }
});
