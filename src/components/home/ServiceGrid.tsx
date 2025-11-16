import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CalendarPlus, ReceiptText, Mail, Building, Briefcase, Globe } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { StyledText } from '../StyledText';
import { HomeScreenNavigationProp } from '@/types/navigation';
import { useTheme } from '@/context/ThemeContext';

const services = [
  { name: 'Leave Request', icon: CalendarPlus, screen: 'Home' },
  { name: 'Payslip', icon: ReceiptText, screen: 'Home' },
  { name: 'Cert & Letter', icon: Mail, screen: 'Home' },
  { name: 'Plant Info', icon: Building, screen: 'PlantInfo' },
  { name: 'Business Mission', icon: Briefcase, screen: 'Home' },
  { name: 'Training Mission', icon: Globe, screen: 'Home' },
];

const ServiceItem = ({ name, icon: Icon, screen }: { name: string, icon: React.ElementType, screen: string }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { colors } = useTheme();
  
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(screen as any)}>
      <View style={[styles.iconContainer, { backgroundColor: colors.iconBg }]}>
        <Icon color={colors.primaryGradient[6]} size={28} />
      </View>
      <StyledText weight="500" style={[styles.itemText, { color: colors.textSecondary }]}>{name}</StyledText>
    </TouchableOpacity>
  );
};

export function ServiceGrid() {
  return (
    <View style={styles.gridContainer}>
      {services.map((service) => (
        <ServiceItem key={service.name} {...service} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  itemContainer: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
