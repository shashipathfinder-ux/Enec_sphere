import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Home, Compass, Inbox } from 'lucide-react-native';
import { BlurView } from '@react-native-community/blur';
import { StyledText } from '../StyledText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@/types/navigation';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useTheme } from '@/context/ThemeContext';

const navItemsData = [
  { icon: Home, label: 'Home' },
  { icon: Inbox, label: 'My Inbox' },
  { icon: Compass, label: 'eService' },
];

const NavItem = ({ icon: Icon, label, active = false, onPress }: { icon: React.ElementType, label: string, active?: boolean, onPress: () => void }) => {
  const { colors } = useTheme();
  const color = active ? colors.navBarActive : colors.navBarInactive;
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Icon color={color} size={24} />
      <StyledText weight="600" style={[styles.navLabel, { color }]}>
        {label}
      </StyledText>
    </TouchableOpacity>
  );
};

export function BottomNavBar() {
  const { colors, theme } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState('Home');

  const navBarWidth = width - 16 - 16 - 8 - 72;
  const tabContainerWidth = navBarWidth / navItemsData.length;
  const indicatorWidth = 96;
  
  const getIndicatorPosition = (index: number) => {
    const containerCenter = (tabContainerWidth * index) + (tabContainerWidth / 2);
    return containerCenter - (indicatorWidth / 2);
  };

  const indicatorPosition = useSharedValue(getIndicatorPosition(0));

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: indicatorPosition.value }],
    };
  });

  const handleTabPress = (label: string, index: number) => {
    setActiveTab(label);
    indicatorPosition.value = withSpring(getIndicatorPosition(index), {
      damping: 15,
      stiffness: 120,
    });
  };

  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 10 }]}>
      <View style={styles.navBarWrapper}>
         <BlurView
          style={styles.absolute}
          blurType={theme === 'light' ? 'light' : 'dark'}
          blurAmount={80}
        />
        <View style={styles.navBarContent}>
          <Animated.View style={[styles.activeIndicator, { backgroundColor: colors.white }, animatedIndicatorStyle]} />
          {navItemsData.map((item, index) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.label}
              onPress={() => handleTabPress(item.label, index)}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={[styles.circleButton, { backgroundColor: colors.navBar360Bg }]} onPress={() => navigation.navigate('PlantInfo')}>
        <StyledText weight="700" style={[styles.icon360Text, { color: colors.navBarInactive }]}>360</StyledText>
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
  navBarWrapper: {
    height: 72,
    borderRadius: 60,
    overflow: 'hidden',
    flex: 1,
    marginRight: 8,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  navBarContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    width: 96,
    height: 56,
    borderRadius: 60,
    top: 8,
    zIndex: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 1,
  },
  navLabel: {
    fontSize: 11,
    marginTop: 2,
  },
  circleButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  icon360Text: {
    fontSize: 18,
  },
});
