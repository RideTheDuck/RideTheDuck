import React from 'react';
import { AppLoading, Font } from 'expo';
import FontAwesome from '../node_modules/react-native-fontawesome/FontAwesomeIcons'

class AppFontLoader extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        FontAwesome
      });

      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return this.props.children;
  }
}

export { AppFontLoader };