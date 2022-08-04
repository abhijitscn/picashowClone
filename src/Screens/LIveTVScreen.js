import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text,FlatList,StyleSheet } from "react-native";
import data from "../Utils/ChannelList";
import { responsiveHeight,responsiveWidth } from "../Utils/Dimension";
import ChannelCard from "../Components/ChannelCard";

const LiveTVScreen=()=>{
    return(
        <>
            <SafeAreaView style={LiveStyle.main}>
            <View style={LiveStyle.headerView}>
                <Text style={LiveStyle.headerText}>Live Tv</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return <ChannelCard data={item} />
                }}
                numColumns={4}
            />
            
              
        </SafeAreaView>
        
        </>
    )
}
const LiveStyle=StyleSheet.create({
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
})
export default LiveTVScreen;