import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CalendarPlus, ReceiptText, Mail, Building, Briefcase, Globe } from 'lucide-react-native';
import { StyledText } from '../StyledText';
import { Colors } from '@/constants/Colors';

const services = [
  { name: 'Leave Request', icon: CalendarPlus },
  { name: 'Payslip', icon: ReceiptText },
  { name: 'Cert & Letter', icon: Mail },
  { name: 'Visit HQ', icon: Building },
  { name: 'Business Mission', icon: Briefcase },
  { name: 'Training Mission', icon: Globe },
];

const ServiceItem = ({ name, icon: Icon }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.iconContainer}>
      <Icon color={Colors.primaryGradient[6]} size={28} />
    </View>
    <StyledText weight="500" style={styles.itemText}>{name}</StyledText>
  </TouchableOpacity>
);

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
    backgroundColor: Colors.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
