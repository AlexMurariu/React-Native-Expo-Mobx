import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";
import MainSectionComponent from "../components/MainSectionComponent";

const styles = StyleSheet.create({
  mainSectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

@inject("store")
@observer
export default class MainSectionRoute extends Component {
  componentDidMount() {
    const {
      store: {
        recipes: { getAll }
      }
    } = this.props;
    getAll();
  }

  render() {
    return (
      <View style={styles.mainSectionContainer}>
        <MainSectionComponent />
      </View>
    );
  }
}
