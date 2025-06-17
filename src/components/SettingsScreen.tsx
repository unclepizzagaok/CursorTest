import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { commonStyles, colors, spacing, fontSizes, borderRadius } from '../styles/common';
import { SETTINGS_ITEMS } from '../constants/settings';

export const SettingsScreen: React.FC = React.memo(() => {
  const handleSettingPress = (title: string) => {
    // 在实际应用中，这里可以处理设置项的点击事件
    console.log(`设置项被点击: ${title}`);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>设置</Text>
        {SETTINGS_ITEMS.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.settingItem}
            onPress={() => handleSettingPress(item.title)}
            activeOpacity={0.7}
          >
            <Icon name={item.icon} size={24} color={colors.primary} />
            <Text style={styles.settingItemText}>{item.title}</Text>
            <Icon name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
});

SettingsScreen.displayName = 'SettingsScreen';

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.md,
  },
  settingsTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.white,
    marginBottom: spacing.sm,
    borderRadius: borderRadius.md,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  settingItemText: {
    flex: 1,
    fontSize: fontSizes.md,
    color: colors.text,
    marginLeft: spacing.md,
  },
}); 