import React, { useState } from 'react';
import { StyleSheet, View, LayoutChangeEvent } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '@/components/home/Header';
import { AttendanceCard } from '@/components/home/AttendanceCard';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { BottomSheet } from '@/components/home/BottomSheet';
import { BottomNavBar } from '@/components/home/BottomNavBar';
import { useTheme } from '@/context/ThemeContext';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [serviceGridBottom, setServiceGridBottom] = useState(0);

  const onServiceGridLaidOut = (event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    if (serviceGridBottom === 0) {
      setServiceGridBottom(y + height);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.primaryGradient[6] }]}>
      <LinearGradient colors={colors.primaryGradient} style={styles.gradient}>
        <Header />
        <AttendanceCard />
        <View onLayout={onServiceGridLaidOut}>
          <ServiceGrid />
        </View>
      </LinearGradient>
      {serviceGridBottom > 0 && <BottomSheet initialSnapPoint={serviceGridBottom + 20} />}
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
