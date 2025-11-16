import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Moon, Sun } from 'lucide-react-native';
import { StyledText } from '@/components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';

export function UnitSummaryHeader({ unitName }: { unitName: string }) {
  const navigation = useNavigation();
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <SafeAreaView 
      style={[styles.safeArea, { backgroundColor: colors.headerBg, borderBottomColor: colors.headerBorder }]} 
      edges={['top']}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft color={colors.outageTitle} size={28} />
        </TouchableOpacity>
        <StyledText weight="700" style={[styles.title, { color: colors.outageTitle }]}>
          {unitName} Summary
        </StyledText>
        <TouchableOpacity onPress={toggleTheme}>
          {theme === 'light' ? (
            <Moon color={colors.plantHeaderIcon} size={24} fill={colors.plantHeaderIcon} />
          ) : (
            <Sun color={colors.plantHeaderIcon} size={24} fill={colors.plantHeaderIcon} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    borderBottomWidth: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 64,
  },
  title: {
    fontSize: 15,
  },
});
