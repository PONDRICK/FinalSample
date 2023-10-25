import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Imageset from "../component/ImageSet";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Imageset
                ImageSource={require("../Img/POND.png")}
                imagesize={styles.image}
                title="Sorrawit Nuernuam"
                nisitid="6421604927"
            />
            <Imageset
                ImageSource={{
                    uri: "https://www.sciencealert.com/images/2023/07/HumanoidRobotPortrait2.jpg",
                }}
                imagesize={styles.image}
                title="Javis Nuernuam"
                nisitid="6421604927"
            />
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btnView}>
                <Text style={styles.btnTitle}>Go to Api Home!!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2EBBF",
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 4,
        borderColor: "#F3B562",
        marginTop: 20,
    },
    btnView: {
        width: "60%",
        backgroundColor: "#F3B562",
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 20,
    },
    btnTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5C4B51",
    },
});

export default Profile;
