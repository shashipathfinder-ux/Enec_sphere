import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { StyledText } from '../StyledText';
import { useTheme } from '@/context/ThemeContext';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const SHEET_HEIGHT = SCREEN_HEIGHT;
const SNAP_FULL = SCREEN_HEIGHT * 0.15;

const LeaveBalance = () => {
    const { colors } = useTheme();
    return (
        <View style={[styles.leaveCard, { backgroundColor: colors.leaveCardBg, borderColor: colors.leaveCardBorder }]}>
            <View style={styles.leaveHeader}>
            <StyledText weight="600" style={[styles.leaveDays, { color: colors.outageTitle }]}>13 days</StyledText>
            <StyledText weight="500" style={styles.leaveLeft}>Left</StyledText>
            </View>
            <StyledText weight="600" style={[styles.leaveTitle, { color: colors.outageTitle }]}>Leave</StyledText>
            <View style={[styles.progressContainer, { backgroundColor: colors.leaveProgressBg }]}>
            <View style={[styles.progressBar, { width: `${(232/358)*100}%`, backgroundColor: colors.leaveProgressFill }]} />
            </View>
        </View>
    );
};

const OutageItem = ({ item }: { item: any }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.outageItem}>
            <View style={styles.outageItemLeft}>
            <View style={[styles.outageUContainer, { backgroundColor: item.color }]}>
                <StyledText weight="700" style={[styles.outageUText, { color: item.textColor || colors.white }]}>
                {item.u}
                </StyledText>
            </View>
            <View>
                <StyledText weight="600" style={[styles.outageItemTitle, { color: colors.outageItemText }]}>{item.title}</StyledText>
                <StyledText weight="500" style={[styles.outageItemDate, { color: colors.outageItemDate }]}>{item.date}</StyledText>
            </View>
            </View>
            <View style={styles.outageItemRight}>
            <StyledText weight="500" style={[styles.timeValue, { color: colors.outageTitle }]}>{item.days}</StyledText>
            <StyledText weight="500" style={[styles.timeLabel, { color: colors.black }]}>Days</StyledText>
            <StyledText weight="700" style={styles.timeSeparator}>:</StyledText>
            <StyledText weight="500" style={[styles.timeValue, { color: colors.outageTitle }]}>{item.hours}</StyledText>
            <StyledText weight="500" style={[styles.timeLabel, { color: colors.black }]}>Hours</StyledText>
            <StyledText weight="700" style={styles.timeSeparator}>:</StyledText>
            <StyledText weight="500" style={[styles.timeValue, { color: colors.outageTitle }]}>{item.minutes}</StyledText>
            <StyledText weight="500" style={[styles.timeLabel, { color: colors.black }]}>Minutes</StyledText>
            </View>
        </View>
    );
};

interface BottomSheetProps {
  initialSnapPoint: number;
}

export function BottomSheet({ initialSnapPoint }: BottomSheetProps) {
  const { colors } = useTheme();
  const translateY = useSharedValue(initialSnapPoint > 0 ? initialSnapPoint : SCREEN_HEIGHT);
  const context = useSharedValue({ y: 0 });

  const outageData = [
    { u: 'U1', title: 'U1RF02', date: 'November 1, 2025', days: '01', hours: '12', minutes: '02', color: colors.outageItemU1 },
    { u: 'U2', title: 'U2RF02', date: 'November 1, 2025', days: '01', hours: '04', minutes: '00', color: colors.outageItemU2 },
    { u: 'U3', title: 'Maintenance', date: 'November 1, 2025', days: '01', hours: '10', minutes: '30', color: colors.outageItemU3 },
    { u: 'U4', title: 'Maintenance', date: 'November 1, 2025', days: '01', hours: '10', minutes: '30', color: colors.outageItemU4, textColor: colors.outageItemU4Text },
  ];

  useEffect(() => {
    if (initialSnapPoint > 0) {
      translateY.value = withSpring(initialSnapPoint, { damping: 50, stiffness: 150 });
    }
  }, [initialSnapPoint, translateY]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, SNAP_FULL);
    })
    .onEnd(() => {
      const springConfig = { damping: 20, stiffness: 150 };
      if (translateY.value > (initialSnapPoint + SNAP_FULL) / 2) {
        translateY.value = withSpring(initialSnapPoint, springConfig);
      } else {
        translateY.value = withSpring(SNAP_FULL, springConfig);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.sheet, { backgroundColor: colors.bottomSheetBg }, animatedStyle]}>
        <View style={[styles.handle, { backgroundColor: colors.bottomSheetHandle }]} />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LeaveBalance />
          <StyledText weight="600" style={[styles.outagePlanTitle, { color: colors.outageTitle }]}>Outage Plan & Schedule</StyledText>
          <View style={[styles.outageListContainer, { backgroundColor: colors.leaveCardBg, borderColor: colors.leaveCardBorder }]}>
            {outageData.map((item, index) => (
              <React.Fragment key={index}>
                <OutageItem item={item} />
                {index < outageData.length - 1 && <View style={styles.outageDivider} />}
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  sheet: {
    height: SHEET_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: 0,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.25,
    shadowRadius: 19,
    elevation: 24,
  },
  handle: {
    width: 48,
    height: 6,
    alignSelf: 'center',
    marginTop: 16,
    borderRadius: 15,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 150,
  },
  leaveCard: {
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    borderWidth: 0.5,
    shadowColor: 'rgba(7, 63, 67, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
  },
  leaveHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  leaveDays: {
    fontSize: 24,
  },
  leaveLeft: {
    fontSize: 11,
    color: '#999999',
    marginLeft: 4,
  },
  leaveTitle: {
    fontSize: 14,
    marginTop: 34,
  },
  progressContainer: {
    height: 6,
    borderRadius: 4,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  outagePlanTitle: {
    fontSize: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  outageListContainer: {
    borderRadius: 16,
    borderWidth: 0.5,
    shadowColor: 'rgba(7, 63, 67, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
    overflow: 'hidden',
  },
  outageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  outageItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outageUContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  outageUText: {
    fontSize: 16,
  },
  outageItemTitle: {
    fontSize: 15,
  },
  outageItemDate: {
    fontSize: 12,
  },
  outageItemRight: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  timeValue: {
    fontSize: 12,
    fontWeight: '700',
    marginRight: 2,
  },
  timeLabel: {
    fontSize: 10,
    marginRight: 4,
  },
  timeSeparator: {
    color: '#688284',
    marginHorizontal: 2,
  },
  outageDivider: {
    height: 0.5,
    backgroundColor: '#E6E7EB',
    marginHorizontal: 16,
  },
});
