import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RateSectionComponent from "../components/RateSectionComponent";
import { observer, inject } from "mobx-react";

const styles = StyleSheet.create({
  rateSectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

@inject("store")
@observer
export default class RateSectionRoute extends Component {
  render() {
    return (
      <View style={styles.rateSectionContainer}>
        <RateSectionComponent />
      </View>
    );
  }
}
