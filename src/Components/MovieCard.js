import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { responsiveHeight,responsiveWidth } from "../Utils/Dimension";
const MovieCard=({data,type})=>{
    return(
        <>
        <View style={MovieStyle.main}>
            <View style={MovieStyle.headerView}>
                <Text style={MovieStyle.headerText}>{((type==="Hollywood")||(type==="Bollywood"))?data.qualityLable:data.rating}</Text>
            </View>
            <Image source={{uri:data.posterUrl}} style={MovieStyle.posterImg}/>
            <View style={MovieStyle.BottomView}>
                <Text style={MovieStyle.BottomText1}>{data.name}</Text>
                <Text style={MovieStyle.BottomText2}>{((type==="Hollywood")||(type==="Bollywood"))?data.year:`Total Sessions ${data.seasons.length}`}</Text>
            </View>
        </View>

        </>
    )
}
const MovieStyle=StyleSheet.create({
    main:{
        backgroundColor:'white',
        height:responsiveHeight(30),
        width:responsiveWidth(31.33),
        margin:responsiveWidth(1),
        position:'relative'  
    },
    posterImg:{
        height:'100%',
        width:'100%'
    },
    headerView:{
        position:'absolute',
        top:responsiveHeight(0.75),
        right:responsiveWidth(2),
        backgroundColor:'black',
        zIndex:2,
        padding:responsiveWidth(0.5)
    },
    headerText:{
        color:'yellow',
        fontSize:responsiveWidth(3),
        
    },
    BottomView:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.7)',
        zIndex:2,
        padding:responsiveWidth(0.5)
    },
    BottomText1:{
        color:'white',
        fontSize:responsiveWidth(3),
        fontWeight:'700',
        marginLeft:responsiveWidth(1)
    },
    BottomText2:{
        color:'white',
        fontSize:responsiveWidth(2.5),
        marginLeft:responsiveWidth(1),
        fontWeight:'700',
    }
})

export default MovieCard;