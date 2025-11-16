import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, Compass, Inbox, CircleDot } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { StyledText } from '../StyledText';
import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <TouchableOpacity style={styles.navItem}>
    <Icon color={active ? Colors.navBarActive : Colors.navBarInactive} size={24} />
    <StyledText weight="600" style={[styles.navLabel, { color: active ? Colors.navBarActive : Colors.navBarInactive }]}>
      {label}
    </StyledText>
  </TouchableOpacity>
);

export function BottomNavBar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 10 }]}>
      <BlurView intensity={80} tint="light" style={styles.navBar}>
        <View style={styles.navBarContent}>
          <View style={styles.activeIndicator} />
          <NavItem icon={Home} label="Home" active />
          <NavItem icon={Inbox} label="My Inbox" />
          <NavItem icon={Compass} label="eService" />
        </View>
      </BlurView>
      <TouchableOpacity style={styles.circleButton}>
        <CircleDot color={Colors.black} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  navBar: {
    flexDirection: 'row',
    height: 72,
    borderRadius: 60,
    overflow: 'hidden',
    flex: 1,
    marginRight: 8,
  },
  navBarContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  activeIndicator: {
    position: 'absolute',
    width: 96,
    height: 56,
    backgroundColor: Colors.white,
    borderRadius: 60,
    left: 12,
    top: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 11,
    marginTop: 2,
  },
  circleButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.navBar360Bg,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
});
