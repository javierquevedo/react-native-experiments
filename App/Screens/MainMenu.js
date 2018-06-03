import React, { Component } from "react";
import styled from "styled-components";
import { FlatList, Text, View } from "react-native";

const MenuItemsColors = {
  Me: "blue",
  Learn: "blue",
  Improve: "blue",
  Connect: "blue"
};

const MenuItems = [
  { key: "Me" },
  { key: "Learn" },
  { key: "Improve" },
  { key: "Connect" }
];

const HomeListItem = styled.View`
  height: 120;
  align-self: stretch;
`;

const HomeList = styled.FlatList`
  align-self: stretch;
`;

export default class FlatListBasics extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
          alignSelf: "stretch",
          alignItems: "flex-start",
          justifyContent: "center",
          margin: 5
        }}
      >
        <HomeList
          data={MenuItems}
          renderItem={({ item }) => (
            <HomeListItem itemKey={MenuItemsColors[item.key]}>
              <Text>{item.key}</Text>
            </HomeListItem>
          )}
        />
      </View>
    );
  }
}
