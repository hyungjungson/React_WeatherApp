import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";

export default class Weather extends Component {
    render() {
        return (
        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
            <View style={styles.upper}>
                <Text>icon here</Text>
                <Text style={styles.temp}>35도</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>비가 내리고 있습니다.</Text>
                <Text style={styles.subtitle}>더 자세히 보기</Text>
            </View>
        </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: 300
    },
    subtitle: {
        fontSize: 24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 24
    }
});