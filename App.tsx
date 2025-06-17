import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

// 首页屏幕
const HomeScreen = ({navigation}: any) => {
  const features = [
    {
      id: 1,
      title: '组件展示',
      description: '查看各种React Native组件',
      icon: 'widgets',
      color: ['#667eea', '#764ba2'],
    },
    {
      id: 2,
      title: '动画效果',
      description: '体验流畅的动画交互',
      icon: 'animation',
      color: ['#f093fb', '#f5576c'],
    },
    {
      id: 3,
      title: '网络请求',
      description: '模拟API调用和数据处理',
      icon: 'cloud-download',
      color: ['#4facfe', '#00f2fe'],
    },
    {
      id: 4,
      title: '本地存储',
      description: '演示数据持久化',
      icon: 'storage',
      color: ['#43e97b', '#38f9d7'],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>React Native 测试项目</Text>
          <Text style={styles.headerSubtitle}>探索移动开发的精彩世界</Text>
        </View>

        <View style={styles.featuresContainer}>
          {features.map(feature => (
            <TouchableOpacity
              key={feature.id}
              style={styles.featureCard}
              onPress={() => navigation.navigate('Detail', {feature})}>
              <LinearGradient
                colors={feature.color}
                style={styles.featureGradient}>
                <Icon name={feature.icon} size={40} color="#ffffff" />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// 详情屏幕
const DetailScreen = ({route, navigation}: any) => {
  const {feature} = route.params;

  return (
    <SafeAreaView style={styles.container}>
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

// 设置屏幕
const SettingsScreen = () => {
  const settingsItems = [
    {title: '通知设置', icon: 'notifications'},
    {title: '隐私设置', icon: 'privacy-tip'},
    {title: '关于应用', icon: 'info'},
    {title: '帮助支持', icon: 'help'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>设置</Text>
        {settingsItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.settingItem}>
            <Icon name={item.icon} size={24} color="#667eea" />
            <Text style={styles.settingItemText}>{item.title}</Text>
            <Icon name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

// 创建导航器
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 首页堆栈导航
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// 主应用组件
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStack} options={{title: '首页'}} />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: '设置'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  featuresContainer: {
    paddingHorizontal: 20,
  },
  featureCard: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureGradient: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
  },
  detailContainer: {
    flex: 1,
  },
  detailHeader: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 8,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16,
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
  },
  detailContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  contentText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  bulletPoints: {
    marginLeft: 16,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
});

export default App; 