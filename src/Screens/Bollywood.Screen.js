import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth,responsiveHeight } from "../Utils/Dimension";
 import MovieCard from "../Components/MovieCard";
 import { data } from "../Utils/BollywoodMovieList";
 import Ionicons from 'react-native-vector-icons/Ionicons'
 import { useNavigation } from "@react-navigation/native";

const BollywoodScreen=()=>{
    const navigation=useNavigation();
    return(
        <>
        <SafeAreaView style={BollyStyle.main}>
            <View style={BollyStyle.headerView}>
                <Text style={BollyStyle.headerText}>Bollywood Movies</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return <MovieCard data={item} type={'Bollywood'}/>
                }}
                numColumns={3}
            />
            <TouchableOpacity style={BollyStyle.SearchButton} onPress={()=>{navigation.navigate('Search',{data:data})}}>
                <Ionicons name='search' color='yellow' size={responsiveWidth(5)}/>
            </TouchableOpacity> 
              
        </SafeAreaView>
        </>
    )
}
const BollyStyle=StyleSheet.create({
    main:{
        flex:1,  
        backgroundColor:'#000000',
    },
    headerView:{
        alignItems:'center',
        padding:responsiveHeight(0.5)
    },
    headerText:{
        color:'yellow',
        fontSize:responsiveWidth(4)
    },
    SearchButton:{
        position:'absolute',
        bottom:responsiveHeight(5),
        right:responsiveHeight(3),
        height:responsiveHeight(7),
        width:responsiveHeight(7),
        borderRadius:responsiveHeight(7),
        backgroundColor:'#111111',
        zIndex:2,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default BollywoodScreen;