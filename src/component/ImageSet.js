import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Imageset = ({ ImageSource, imagesize, title = "", nisitid = "" }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={ImageSource} style={[styles.image, imagesize]} />
            </View>
            <Text style={styles.imgTitle}>{title}</Text>
            <Text style={styles.imgSubTitle}>{nisitid}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 20,
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: "#EFEFEF", // Light gray border
    },
    imgTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: "#5C4B51",
    },
    imgSubTitle: {
        color: "#888",
        marginTop: 5,
    },
});

export default Imageset;
