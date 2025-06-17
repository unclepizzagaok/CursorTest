import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../types';
import { commonStyles, colors, spacing, fontSizes, borderRadius } from '../styles/common';

interface DetailScreenProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
  navigation: NavigationProp<RootStackParamList>;
}

export const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { feature } = route.params;

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.detailContainer}>
        <LinearGradient colors={feature.color} style={styles.detailHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Icon name={feature.icon} size={60} color="#ffffff" />
          <Text style={styles.detailTitle}>{feature.title}</Text>
          <Text style={styles.detailDescription}>{feature.description}</Text>
        </LinearGradient>

        <View style={styles.detailContent}>
          <Text style={styles.contentTitle}>功能介绍</Text>
          <Text style={styles.contentText}>
            这是一个{feature.title}的演示页面。在实际项目中，这里可以展示相关的功能实现，比如：
          </Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>• 交互式组件演示</Text>
            <Text style={styles.bulletPoint}>• 实时数据更新</Text>
            <Text style={styles.bulletPoint}>• 响应式设计</Text>
            <Text style={styles.bulletPoint}>• 性能优化示例</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  detailHeader: {
    padding: spacing.xl,
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: spacing.md,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: spacing.md,
    textAlign: 'center',
  },
  detailDescription: {
    fontSize: fontSizes.md,
    color: '#ffffff',
    opacity: 0.9,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  detailContent: {
    flex: 1,
    padding: spacing.xl,
    backgroundColor: colors.white,
  },
  contentTitle: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  contentText: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  bulletPoints: {
    paddingLeft: spacing.md,
  },
  bulletPoint: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    lineHeight: 22,
  },
}); 
 