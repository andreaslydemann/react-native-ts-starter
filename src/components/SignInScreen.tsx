import { Action } from "types/common";
import * as actions from "actions";
import { AuthState } from "types/states";
import React from "react";
import { connect } from "react-redux";
import i18n from "i18n-js";
import { styled } from "theme";
import { ScreenBackground, Text } from "./common";

interface PropsConnectedState {
  isAuthorized: boolean;
}

interface PropsConnectedDispatcher {
  signIn: () => Action<void>;
}

interface Props extends PropsConnectedState, PropsConnectedDispatcher {
  navigation: { navigate: (screen: string) => void };
}

class SignInScreen extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props: Props) {
    if (props.isAuthorized) {
      this.props.navigation.navigate("App");
    }
  }

  signIn = () => {
    this.props.signIn();
  };

  render(): JSX.Element {
    return (
      <ScreenBackground>
        <LoginButton onPress={this.signIn}>
          <LoginText>{i18n.t("signIn")}</LoginText>
        </LoginButton>
      </ScreenBackground>
    );
  }
}

const mapStateToProps = ({
  auth
}: {
  auth: AuthState;
}): PropsConnectedState => {
  return {
    isAuthorized: auth.isAuthorized
  };
};

export default connect(
  mapStateToProps,
  actions
)(SignInScreen as React.ComponentClass<Props>);

const LoginButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled(Text)`
  color: ${({ theme }) => theme.activeTint};
  font-size: 20px;
`;
