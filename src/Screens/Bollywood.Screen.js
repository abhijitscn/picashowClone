import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth,responsiveHeight } from "../Utils/Dimension";
 import MovieCard from "../Components/MovieCard";
 import { data } from "../Utils/BollywoodMovieList";

const BollywoodScreen=()=>{
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
              
        </SafeAreaView>
        </>
    )
}
const BollyStyle=StyleSheet.create({
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
    }
})
export default BollywoodScreen;