import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { responsiveHeight,responsiveWidth } from "../Utils/Dimension";
import { useNavigation } from "@react-navigation/native";
const ChannelCard=({data})=>{
    const navigation=useNavigation();
    return(
        <>
        <TouchableOpacity style={channelStyle.main} onPress={()=>{navigation.navigate('video',{data:data})}}>
            <View style={channelStyle.imageView}>
                <Image source={{uri:data.img?data.img:'https://purepng.com/public/uploads/large/purepng.com-old-televisiontvtelecommunicationmonochromeblack-and-whittelevisionoldblack-and-whiteclipart-1421526536100hrgmw.png'}} resizeMode={'contain'} style={{height:'50%',width:'50%'}}/>
            </View>
            <Text style={channelStyle.headeingText}>{data.name}</Text>
        </TouchableOpacity>
        
        </>
    )
}
const channelStyle=StyleSheet.create({
    main:{
        height:responsiveHeight(20),
        width:responsiveWidth(23),
        backgroundColor:'#111111',
        margin:responsiveWidth(1),
        alignItems:'center',
        justifyContent:'center'
        
    },
    imageView:{
        height:responsiveWidth(20),
        width:responsiveWidth(20),
        borderRadius:responsiveWidth(10),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    headeingText:{
        color:'white',
        textAlign:'center',
        fontWeight:'700'
    }
})
export default ChannelCard;