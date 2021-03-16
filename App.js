import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as firebase from "firebase";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import { Ionicons } from "@expo/vector-icons";
import MessageScreen from "./Screens/MessageScreen";
import PostScreen from "./Screens/PostScreen";
import NotificationScreen from "./Screens/NotificationScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="home-outline" size={24} color={tintColor} />
            ),
          },
        },
        Message: {
          screen: MessageScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={tintColor}
              />
            ),
          },
        },
        Post: {
          screen: PostScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="add-circle-outline"
                size={50}
                color="#E9446A"
                style={{
                  shadowColor: "#E9446A",
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 10,
                  shadowOpacity: 0.3,
                }}
              />
            ),
          },
        },
        Notification: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="notifications-circle-outline"
                size={24}
                color={tintColor}
              />
            ),
          },
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="person-circle-outline"
                size={24}
                color={tintColor}
              />
            ),
          },
        },
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Post") {
              navigation.navigate("postModal");
            } else {
              defaultHandler();
            }
          },
        },
        tabBarOptions: {
          activeTintColor: "#161F3D",
          inactiveTintColor: "#B8BBC4",
          showLabel: false,
        },
      }
    ),
    postModal: {
      screen: PostScreen,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
