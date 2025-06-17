import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feature } from '../types';
import { spacing, fontSizes, borderRadius } from '../styles/common';

interface FeatureCardProps {
  feature: Feature;
  onPress: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onPress }) => {
  return (
    <TouchableOpacity style={styles.featureCard} onPress={onPress}>
      <LinearGradient colors={feature.color} style={styles.featureGradient}>
        <Icon name={feature.icon} size={40} color="#ffffff" />
        <Text style={styles.featureTitle}>{feature.title}</Text>
        <Text style={styles.featureDescription}>{feature.description}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  featureCard: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: spacing.md,
  },
  featureGradient: {
    flex: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: fontSizes.sm,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
}); 