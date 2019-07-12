import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  TabScene
} from "react-navigation";
import {
  FirstScreen,
  SignInScreen,
  SecondScreen,
  ThirdScreen,
  SettingsScreen
} from "components";
import { TabBar } from "components/common";
import { theme } from "theme";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TABS, TABBAR_ICONS } from "constants";

const FirstStack = createStackNavigator(
  { FirstScreen },
  { headerMode: "none" }
);

const SecondStack = createStackNavigator(
  { SecondScreen },
  { headerMode: "none" }
);

const ThirdStack = createStackNavigator(
  { ThirdScreen },
  { headerMode: "none" }
);

const SettingsStack = createStackNavigator(
  { SettingsScreen },
  { headerMode: "none" }
);

const options = (label: string, icon: string) => {
  return {
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }: TabScene) => (
      <Ionicons name={icon} size={22} color={tintColor} />
    )
  };
};

FirstStack.navigationOptions = options(TABS.Screen1, TABBAR_ICONS.List);
SecondStack.navigationOptions = options(TABS.Screen2, TABBAR_ICONS.Add);
ThirdStack.navigationOptions = options(TABS.Screen3, TABBAR_ICONS.CheckMark);
SettingsStack.navigationOptions = options(TABS.Settings, TABBAR_ICONS.Options);

const AppTabBar = createBottomTabNavigator(
  {
    First: FirstStack,
    Second: SecondStack,
    Third: ThirdStack,
    Settings: SettingsStack
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: theme.activeTint,
      inactiveTintColor: theme.inactiveTint,
      showLabel: true,
      style: {
        backgroundColor: theme.primary
      }
    }
  }
);

const AuthStack = createStackNavigator(
  { SignIn: SignInScreen },
  { headerMode: "none" }
);

interface Props {
  isAuthenticated: boolean;
}

export default class extends Component<Props> {
  render() {
    const Navigation = createAppContainer(
      createSwitchNavigator(
        {
          App: AppTabBar,
          Auth: AuthStack
        },
        {
          initialRouteName: this.props.isAuthenticated ? "App" : "Auth"
        }
      )
    );

    return <Navigation />;
  }
}
