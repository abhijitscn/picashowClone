import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from 'react-native-video-controls';
import { useRoute } from "@react-navigation/native";

const VideoPlayers=()=>{
    const route=useRoute();
    const {data}=route.params;
    console.log(route)
    const navigation=useNavigation();
    return(
        <>
        <SafeAreaView style={videoStyle.main}>
        <VideoPlayer
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            onBack={()=>{navigation.goBack()}}
            title={data.name}
        />
        </SafeAreaView>
        </>
    )
}
const videoStyle=StyleSheet.create({
    main:{
        flex:1
    }
})
export default VideoPlayers;