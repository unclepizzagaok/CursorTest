# React Native 测试项目

这是一个用于演示React Native开发的测试项目，包含了现代化的UI设计和基本的导航功能。

## 功能特性

- 🎨 现代化的UI设计，使用渐变色和图标
- 📱 响应式布局，适配不同屏幕尺寸
- 🧭 底部标签导航和页面导航
- 📦 模块化的组件结构
- 🎯 TypeScript支持
- 📋 展示多种React Native功能

## 项目结构

```
├── App.tsx              # 主应用组件
├── index.js             # 应用入口文件
├── package.json         # 项目依赖配置
├── android/             # Android原生代码
├── ios/                 # iOS原生代码（需要额外配置）
└── README.md           # 项目说明文档
```

## 运行项目

### 前置条件

1. 安装Node.js (推荐v18或更高版本)
2. 安装React Native CLI：
   ```bash
   npm install -g react-native-cli
   ```
3. 安装项目依赖：
   ```bash
   npm install
   ```

### Android开发

1. 安装Android Studio和Android SDK
2. 设置Android环境变量
3. 启动Android模拟器或连接Android设备
4. 运行Android应用：
   ```bash
   npm run android
   ```

### iOS开发（macOS）

1. 安装Xcode
2. 安装CocoaPods：
   ```bash
   sudo gem install cocoapods
   ```
3. 安装iOS依赖：
   ```bash
   cd ios && pod install && cd ..
   ```
4. 运行iOS应用：
   ```bash
   npm run ios
   ```

### 开发服务器

启动Metro开发服务器：
```bash
npm start
```

## 主要依赖

- **React Native**: 移动应用开发框架
- **React Navigation**: 导航管理
- **React Native Vector Icons**: 图标组件
- **React Native Linear Gradient**: 渐变效果
- **React Native Async Storage**: 本地存储

## 项目特色

### 1. 首页展示
- 4个功能卡片，展示不同的React Native能力
- 渐变色背景和图标设计
- 点击进入详情页面

### 2. 详情页面
- 动态路由参数传递
- 自定义返回按钮
- 渐变色头部设计

### 3. 设置页面
- 列表式设置选项
- 图标和文字结合的UI设计

## 开发说明

### 添加新功能

1. 在`App.tsx`中添加新的屏幕组件
2. 配置导航路由
3. 实现相应的UI和逻辑

### 自定义样式

项目使用StyleSheet API管理样式，支持：
- Flexbox布局
- 响应式设计
- 自定义颜色主题
- 阴影和边框效果

### 图标使用

项目集成了Material Icons，使用方法：
```tsx
import Icon from 'react-native-vector-icons/MaterialIcons';
<Icon name="icon-name" size={24} color="#color" />
```

## 常见问题

### 1. Metro服务器启动失败
```bash
npx react-native start --reset-cache
```

### 2. Android构建失败
```bash
cd android && ./gradlew clean && cd ..
```

### 3. iOS构建失败
```bash
cd ios && xcodebuild clean && cd ..
```

## 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

## 许可证

MIT License - 详见LICENSE文件

## 联系方式

如有问题或建议，请提交Issue或联系项目维护者。 