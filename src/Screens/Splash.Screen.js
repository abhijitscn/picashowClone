import React from "react";
import { View,SafeAreaView,Text,StyleSheet,StatusBar,Image } from "react-native";
import {responsiveWidth,responsiveHeight} from '../Utils/Dimension';
const SplashScreen=()=>{
    return(
        <>

            <SafeAreaView style={SplashStyle.main}>
              <StatusBar backgroundColor={'transparent'} translucent={true}/>
              <Image style={SplashStyle.logo} source={require('../../Assests/Images/pikashow-logo.jpeg')}/>  
                

            </SafeAreaView>
        </>
    )
}
const SplashStyle=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        height:responsiveHeight(20),
        width:responsiveWidth(40)
    }
})
export default SplashScreen;