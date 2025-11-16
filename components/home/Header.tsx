import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { StyledText } from '../StyledText';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Header() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={openDrawer}>
            <Image
              source={{ uri: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/05c2/e446/bfcef3fc461eb06f7270e5786fe27e6f?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qe9Kz6PwCovcEI1umqg7rPD8hSa5g7a~8PfEdfOX1jndFYKeenWNhTB0nV2lVISW6Jj3UQ1UP1053p6fMO9pMBWvGAIf~WkkSzUHBlLf0UGWH~Z2qkP~kRKcHaPTs5aK-GboNkbegYoOz1zetbhFig1lVhmwm-~UzzNaEAiLmNVIA~zd8UY7tWY4OyL3dc9wjZOWbikNkDv7VoYMDuqjPXuFe3fSpNZovodBcceWoR9f4nIobw-jQMLo4l-FJaa6g3mufotX7RUOxrk7unhAY-25LlLUGCT~UXK1gJAPVBgj~96XhwjgVihXV6D5B5Agh4k2mE5SpgrW2YdKcjJ4ZQ__' }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <StyledText weight="600" style={styles.greeting}>
            Hello, Khaleed Alshebli
          </StyledText>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell color={Colors.white} size={24} />
          <View style={styles.badge}>
            <StyledText weight="600" style={styles.badgeText}>
              2
            </StyledText>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EDEDED',
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  notificationButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: Colors.notificationBadge,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primaryGradient[1],
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
  },
});
