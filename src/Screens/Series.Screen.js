import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth,responsiveHeight } from "../Utils/Dimension";
 import MovieCard from "../Components/MovieCard";
import data from "../Utils/SeriesList";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

const SeriesScreen=()=>{
    const navigation=useNavigation();
    return(
        <>
        <SafeAreaView style={SeriesStyle.main}>
            <View style={SeriesStyle.headerView}>
                <Text style={SeriesStyle.headerText}>Series</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return <MovieCard data={item} type={'Series'}/>
                }}
                numColumns={3}
            /> 
            <TouchableOpacity style={SeriesStyle.SearchButton} onPress={()=>{navigation.navigate('Search',{data:data,type:'series'})}}>
                <Ionicons name='search' color='yellow' size={responsiveWidth(5)}/>
            </TouchableOpacity> 
              
        </SafeAreaView>
        </>
    )
}
const SeriesStyle=StyleSheet.create({
    main:{
        flex:1,  
        backgroundColor:'#000000' 
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
export default SeriesScreen;
