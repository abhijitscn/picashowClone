import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth,responsiveHeight } from "../Utils/Dimension";
 import MovieCard from "../Components/MovieCard";
import data from "../Utils/HollyWoodMoviesList"

const HollywoodScreen=()=>{
    return(
        <>
        <SafeAreaView style={HollyStyle.main}>
            <View style={HollyStyle.headerView}>
                <Text style={HollyStyle.headerText}>Bollywood Movies</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return <MovieCard data={item} type={'Hollywood'}/>
                }}
                numColumns={3}
            /> 
              
        </SafeAreaView>
        </>
    )
}
const HollyStyle=StyleSheet.create({
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
export default HollywoodScreen;