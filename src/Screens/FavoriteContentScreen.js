import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';

const FavoriteContentScreen = ({navigation}) => {
    const { state } = useContext(Context);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorite Content</Text>
            <FlatList
                data={state} // Use the liked items from context state
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                        <View style={styles.itemContainer}>
                            <Image style={styles.img} source={{ uri: item.image_url }} />
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF1E4",
        padding: 10,
        paddingHorizontal: 15,
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img: {
        width: 230,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    }
});


export default FavoriteContentScreen;