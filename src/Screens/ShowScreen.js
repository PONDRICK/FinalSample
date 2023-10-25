import React,{useState,useEffect} from "react";
import { View,Text, StyleSheet,Image,FlatList, TouchableOpacity} from "react-native";

import yelp from "../Api/yelp";
const ShowScreen = ({route}) =>{
    const [result, setResult] = useState(null);
    const {id} =route.params;
    const getDetail = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };
    useEffect(()=>{
        getDetail(id);
    },[]);
    if(!result){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return(
                        <View style={styles.photocontainer}>
                            <Image style={styles.img} source={{uri:item}}/>
                        </View>
                    );
                }}
            />
            <Text style={styles.datatext}>Review Count : {result.review_count}</Text>
            <Text style={styles.datatext}>Rating : {result.rating}</Text>
            <Text style={styles.datatext}>Price : {result.price}</Text>
            <Text style={styles.datatext}>Phone Number : {result.phone}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF1E4",
        padding: 10,
        paddingHorizontal: 15,
    },
    img: {
        width: 230,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: "center",
    },
    photocontainer: {
        alignItems:'center',
        padding: 10,
        backgroundColor: "#CEDEBD",
        borderRadius: 20,
        marginBottom: 10,
        width: "90%", // Take up 90% of the screen width
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign:'center',
        marginBottom: 10,
    },
    datatext: {
        fontSize: 18,
        textAlign:'center',
        marginBottom: 10,
        color: "#555", // Slightly darker text color
    },
});
export default ShowScreen;
