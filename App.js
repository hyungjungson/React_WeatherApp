import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: true
  };
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
           <Weather />
        ) : (
         <View style={styles.loading}>
            <Text style={styles.loadingText}>날씨정보를 받아오는 중입니다</Text>
          </View>
         )}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    /*
    justifyContent: "flex-start",    
    alignItems: "stretch",
    flextDirection: "row",
    flexWrap: "wrap"
    */
  },
  loading: {
    flex:1,
    backgroundColor:"#fdf6aa",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }

});
