import React from "react";
import { MainSectionRoute, RateSectionRoute } from "./routes";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "mobx-react";
import api from "./services/api";
import store from "./mobx";
import { db } from "./database/database";

const TabNavigator = createBottomTabNavigator({
  Home: MainSectionRoute,
  Rate: RateSectionRoute
});

const AppContainer = createAppContainer(TabNavigator);

const apiService = api.create();
const stores = {
  store: store.create({}, { apiService, callNames: api.callNames })
};

export default class App extends React.Component {
  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists recipes (id integer primary key not null, name text, details text, time integer, type text, rating integer);"
      );
    });
  }

  render() {
    return (
      <Provider {...stores}>
        <AppContainer />
      </Provider>
    );
  }
}
