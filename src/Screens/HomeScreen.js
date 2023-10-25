import React, { useEffect, useState ,useContext} from "react";
import { View, Text, StyleSheet, TextInput, FlatList ,TouchableOpacity} from "react-native";
import yelp from "../Api/yelp";
import { Ionicons } from "@expo/vector-icons";
import Resultlist from "../component/Resultlist";
import { Context } from "../context/BlogContext";

const HomeScreen = ({navigation}) => {
    const [term, setTerm] = useState("");
    const [result, setResult] = useState([]);
    const { state } = useContext(Context);

    const searchApi = async () => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "san jose",
                },
            });
            setResult(response.data.businesses)
            console.log(result);
        }
        catch (error) {
            console.log("Something went wrong!!");
        }
    };

    const filterResultByPrice = (price) =>{
        return result.filter((result)=>{
            return result.price === price;
        })
    }
    useEffect(()=>{
        searchApi("pasta");
    },[])
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#445D48' }]}
                onPress={() => navigation.navigate("FavoriteContent")} // Navigate to a screen to show liked items
            >
                <Text>Favorite Content</Text>
            </TouchableOpacity>
            <View style={styles.inputcontainer}>
                <Ionicons name="search-outline" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="useless input"
                    onChangeText={(newterm) => {
                        setTerm(newterm)
                    }}
                    value={term}
                    onEndEditing={searchApi}
                />
            </View>
            <Text>SearchTerm : {term}. Found {result.length} </Text>
            <Resultlist title="Cheap" result={filterResultByPrice("$")} navigation={navigation}/>
            <Resultlist title="Moderate" result={filterResultByPrice("$$")} navigation={navigation}/>
            <Resultlist title="Expensive" result={filterResultByPrice("$$$")} navigation={navigation}/>
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
    input: {
        flex: 1,
        fontSize: 18,
        color: "#333", // Darker text color for input
    },
    icon: {
        fontSize: 30,
        marginHorizontal: 10,
        alignSelf: "center",
        color: "#555", // Slightly darker icon color
    },
    inputcontainer: {
        flexDirection: "row",
        backgroundColor: "#CEDEBD",
        height: 50,
        borderRadius: 25, // Rounded input container
        marginTop: 10,
        alignItems: "center",
        paddingHorizontal: 15,
    },
    button: {
        borderRadius: 25,
        paddingVertical: 12, // Increased padding for button
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#445D48',
    },
});
export default HomeScreen;