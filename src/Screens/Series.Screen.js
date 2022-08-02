import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth,responsiveHeight } from "../Utils/Dimension";
 import MovieCard from "../Components/MovieCard";
import data from "../Utils/SeriesList";

const SeriesScreen=()=>{
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
    }
})
export default SeriesScreen;
