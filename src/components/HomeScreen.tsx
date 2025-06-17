import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from '../constants/features';
import { commonStyles, colors, spacing, fontSizes } from '../styles/common';
import { RootStackParamList } from '../types';
import { StyleSheet } from 'react-native';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>React Native 测试项目</Text>
          <Text style={styles.headerSubtitle}>探索移动开发的精彩世界</Text>
        </View>

        <View style={styles.featuresContainer}>
          {FEATURES.map(feature => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              onPress={() => navigation.navigate('Detail', { feature })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  header: {
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },
  headerTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  featuresContainer: {
    padding: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}); 