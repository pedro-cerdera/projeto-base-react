import React, { Component } from "react";

import { Image } from "..";
import { splashScreen, hide } from "./SplashScreen.module.scss";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSplashScreen: true,
      show: props.show,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.show && prevProps.show) {
      setTimeout(() => {
        this.setState({
          show: this.props.show,
        });
        setTimeout(() => {
          this.setState({
            renderSplashScreen: false,
          });
        }, 500);
      }, 1000);
    }
  }

  render() {
    if (this.state.renderSplashScreen) {
      return (
        <div
          className={`${splashScreen} ${!this.state.show && hide}`}
          ref={(el) => { this.div = el; }}
        >
          <Image
            src={"/assets/images/logo192.png"}
            alt={"Teste"}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default SplashScreen;
