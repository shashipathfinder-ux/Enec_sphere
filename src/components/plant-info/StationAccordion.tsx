import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import { StyledText } from '../StyledText';
import { ChevronUp, ChevronDown, Power, CalendarDays, Zap, SlidersHorizontal, ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { PlantInfoScreenNavigationProp } from '@/types/navigation';
import { useTheme } from '@/context/ThemeContext';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const UnitCard = ({ unit }: { unit: any }) => {
  const navigation = useNavigation<PlantInfoScreenNavigationProp>();
  const { colors } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.unitCardContainer, { backgroundColor: colors.unitCardBg }]}
      onPress={() => navigation.navigate('UnitSummary', { unitName: unit.name, color: unit.color })}
    >
      <View style={styles.unitHeader}>
        <View style={[styles.unitIconContainer, { backgroundColor: `${unit.color}20` }]}>
          <Power size={20} color={unit.color} />
        </View>
        <StyledText weight="600" style={[styles.unitTitle, { color: colors.plantCardMuted }]}>{unit.name}</StyledText>
        <ChevronRight size={20} color={colors.plantCardMuted} style={styles.unitChevron} />
      </View>
      <View style={styles.unitDetails}>
        <View style={styles.detailRow}>
          <View style={styles.detailLeft}>
            <SlidersHorizontal size={16} color={colors.textMuted} />
            <StyledText style={[styles.detailLabel, { color: colors.plantCardMuted }]}>Unit Status:</StyledText>
          </View>
          <StyledText style={styles.statusOnline}>Online</StyledText>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailLeft}>
            <CalendarDays size={16} color={colors.textMuted} />
            <StyledText style={[styles.detailLabel, { color: colors.plantCardMuted }]}>Days in Production:</StyledText>
          </View>
          <StyledText weight="500" style={[styles.detailValue, { color: colors.plantCardText }]}>300</StyledText>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailLeft}>
            <Power size={16} color={colors.textMuted} />
            <StyledText style={[styles.detailLabel, { color: colors.plantCardMuted }]}>Reactor Power:</StyledText>
          </View>
          <StyledText weight="500" style={[styles.detailValue, { color: colors.plantCardText }]}>99.4%</StyledText>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailLeft}>
            <Zap size={16} color={colors.textMuted} />
            <StyledText style={[styles.detailLabel, { color: colors.plantCardMuted }]}>Net Output:</StyledText>
          </View>
          <StyledText weight="500" style={[styles.detailValue, { color: colors.plantCardText }]}>1283.1 MWe</StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AccordionSection = ({ title, units, isInitiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const { colors } = useTheme();

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View style={[styles.accordionContainer, { backgroundColor: colors.accordionBg, borderColor: colors.plantCardBorder }]}>
      <View style={styles.sectionHeader}>
        <StyledText weight="600" style={[styles.sectionTitle, { color: colors.plantCardText }]}>{title}</StyledText>
        <TouchableOpacity style={[styles.viewMoreButton, { borderColor: colors.plantCardBorder, backgroundColor: `${colors.plantHeaderIcon}1a` }]} onPress={toggleOpen}>
          <StyledText style={[styles.viewMoreText, { color: colors.plantHeaderIcon }]}>View {isOpen ? 'less' : 'more'}</StyledText>
          {isOpen ? <ChevronUp size={16} color={colors.plantHeaderIcon} /> : <ChevronDown size={16} color={colors.plantHeaderIcon} />}
        </TouchableOpacity>
      </View>
      {isOpen && (
        <View style={styles.unitCardsWrapper}>
          {units.map(unit => <UnitCard key={unit.id} unit={unit} />)}
        </View>
      )}
    </View>
  );
};

export function StationAccordion() {
  const { colors } = useTheme();
  const station1Units = [
      { id: 1, name: 'Unit 1', color: colors.outageItemU1 },
      { id: 2, name: 'Unit 2', color: colors.outageItemU2 },
  ];
  const station2Units = [
      { id: 3, name: 'Unit 3', color: colors.outageItemU3 },
      { id: 4, name: 'Unit 4', color: colors.outageItemU4 },
  ];

  return (
    <View style={styles.wrapper}>
      <AccordionSection title="Station 1" units={station1Units} isInitiallyOpen={true} />
      <AccordionSection title="Station 2" units={station2Units} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 16,
  },
  accordionContainer: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  viewMoreText: {
    fontSize: 12,
  },
  unitCardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  unitCardContainer: {
    width: '48%',
    borderRadius: 12,
    padding: 12,
  },
  unitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  unitIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitTitle: {
    fontSize: 13,
  },
  unitChevron: {
    marginLeft: 'auto',
  },
  unitDetails: {
    marginTop: 12,
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailLabel: {
    fontSize: 10,
  },
  detailValue: {
    fontSize: 10,
  },
  statusOnline: {
    fontSize: 10,
    color: '#009E48',
  },
});
