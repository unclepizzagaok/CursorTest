export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string[];
}

export interface SettingItem {
  title: string;
  icon: string;
}

export type RootStackParamList = {
  Home: undefined;
  Detail: { feature: Feature };
  Settings: undefined;
};

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
}; 