import React, { useState,useContext } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Context } from "../context/BlogContext";

const ResultItem = ({ item }) => {
    const [liked, setLiked] = useState(false);
    const { addFav ,deleteFav} = useContext(Context);

    const handlePress = () => {
        setLiked(!liked);
        if (liked) {
            deleteFav(item.id);
        } else {
            addFav(item.id, item.name, item.image_url);
        }
    }

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
            <View>
                <Image style={style.img} source={{ uri: item.image_url }} />
                <Text style={style.name}>{item.name}</Text>
                <Text>
                    <Foundation name="star" size={20} color="green" />
                    {item.rating} ({item.review_count} reviews)
                </Text>
                <TouchableOpacity onPress={handlePress}>
                    {liked
                        ? <AntDesign name="like1" size={24} color="black" />
                        : <AntDesign name="like2" size={24} color="black" />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const ResultList = ({ title, result }) => {
    if (!result.length) {
        return null;
    }

    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ResultItem item={item} />}
            />
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    img: {
        width: 230,
        height: 120,
        borderRadius: 10, // Rounded corners for images
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 5,
    }
});

export default ResultList;
