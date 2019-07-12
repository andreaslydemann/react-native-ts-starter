import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "utils";
import { ThemeProvider } from "styled-components";
import Navigation from "navigation";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Localization from 'expo-localization';
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import strings from "languages";
import { theme } from "theme";
import i18n from "i18n-js";
import { StatusBar, Image } from "react-native";

i18n.fallbacks = true;
i18n.translations = strings;
i18n.locale = Localization.locale;

const store = configureStore();

interface State {
  isReady: boolean;
  isAuthorized: boolean;
}

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends Component<void, State> {
  state = { isReady: false, isAuthorized: false };

  async componentDidMount() {
    await this.loadAssetsAsync();
    this.setState({ isReady: true, isAuthorized: false });
  }

  async loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("./assets/icon.png")
    ]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) return <AppLoading />;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ActionSheetProvider>
          <>
            <StatusBar barStyle="light-content" />
            <Navigation isAuthenticated={this.state.isAuthorized} />
          </>
          </ActionSheetProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
