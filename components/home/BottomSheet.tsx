import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { StyledText } from '../StyledText';
import { Colors } from '@/constants/Colors';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const SHEET_HEIGHT = SCREEN_HEIGHT * 0.65;
const SNAP_TOP = SCREEN_HEIGHT * 0.48;
const SNAP_BOTTOM = SCREEN_HEIGHT * 0.88;

const LeaveBalance = () => (
  <View style={styles.leaveCard}>
    <View style={styles.leaveHeader}>
      <StyledText weight="600" style={styles.leaveDays}>13 days</StyledText>
      <StyledText weight="500" style={styles.leaveLeft}>Left</StyledText>
    </View>
    <StyledText weight="600" style={styles.leaveTitle}>Leave</StyledText>
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${(232/358)*100}%` }]} />
    </View>
  </View>
);

const OutageItem = ({ item }) => (
  <View style={styles.outageItem}>
    <View style={styles.outageItemLeft}>
      <View style={[styles.outageUContainer, { backgroundColor: item.color }]}>
        <StyledText weight="700" style={[styles.outageUText, { color: item.textColor || Colors.white }]}>
          {item.u}
        </StyledText>
      </View>
      <View>
        <StyledText weight="600" style={styles.outageItemTitle}>{item.title}</StyledText>
        <StyledText weight="500" style={styles.outageItemDate}>{item.date}</StyledText>
      </View>
    </View>
    <View style={styles.outageItemRight}>
      <StyledText weight="500" style={styles.timeValue}>{item.days}</StyledText>
      <StyledText weight="500" style={styles.timeLabel}>Days</StyledText>
      <StyledText weight="700" style={styles.timeSeparator}>:</StyledText>
      <StyledText weight="500" style={styles.timeValue}>{item.hours}</StyledText>
      <StyledText weight="500" style={styles.timeLabel}>Hours</StyledText>
      <StyledText weight="700" style={styles.timeSeparator}>:</StyledText>
      <StyledText weight="500" style={styles.timeValue}>{item.minutes}</StyledText>
      <StyledText weight="500" style={styles.timeLabel}>Minutes</StyledText>
    </View>
  </View>
);

const outageData = [
  { u: 'U1', title: 'U1RF02', date: 'November 1, 2025', days: '01', hours: '12', minutes: '02', color: Colors.outageItemU1 },
  { u: 'U2', title: 'U2RF02', date: 'November 1, 2025', days: '01', hours: '04', minutes: '00', color: Colors.outageItemU2 },
  { u: 'U3', title: 'Maintenance', date: 'November 1, 2025', days: '01', hours: '10', minutes: '30', color: Colors.outageItemU3 },
  { u: 'U4', title: 'Maintenance', date: 'November 1, 2025', days: '01', hours: '10', minutes: '30', color: Colors.outageItemU4, textColor: Colors.outageItemU4Text },
];

export function BottomSheet() {
  const translateY = useSharedValue(SNAP_TOP);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, SCREEN_HEIGHT * 0.15);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT * 0.5) {
        translateY.value = withSpring(SNAP_TOP, { damping: 15 });
      } else {
        translateY.value = withSpring(SCREEN_HEIGHT * 0.15, { damping: 15 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.sheet, animatedStyle]}>
        <View style={styles.handle} />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LeaveBalance />
          <StyledText weight="600" style={styles.outagePlanTitle}>Outage Plan & Schedule</StyledText>
          <View style={styles.outageListContainer}>
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
    backgroundColor: Colors.bottomSheetBg,
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
    backgroundColor: Colors.bottomSheetHandle,
    alignSelf: 'center',
    marginTop: 16,
    borderRadius: 15,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 150,
  },
  leaveCard: {
    backgroundColor: Colors.leaveCardBg,
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    borderWidth: 0.5,
    borderColor: Colors.leaveCardBorder,
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
    color: Colors.outageTitle,
  },
  leaveLeft: {
    fontSize: 11,
    color: '#999999',
    marginLeft: 4,
  },
  leaveTitle: {
    fontSize: 14,
    color: Colors.outageTitle,
    marginTop: 34,
  },
  progressContainer: {
    height: 6,
    backgroundColor: Colors.leaveProgressBg,
    borderRadius: 4,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.leaveProgressFill,
    borderRadius: 4,
  },
  outagePlanTitle: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 24,
    marginBottom: 8,
  },
  outageListContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: Colors.leaveCardBorder,
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
    color: Colors.outageItemText,
  },
  outageItemDate: {
    fontSize: 12,
    color: Colors.outageItemDate,
  },
  outageItemRight: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  timeValue: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.outageTitle,
    marginRight: 2,
  },
  timeLabel: {
    fontSize: 10,
    color: Colors.black,
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
