import React from "react";
import { Text,View,StyleSheet,StatusBar,Image,SafeAreaView,TouchableOpacity } from "react-native";
import { posterData,bottomOptionList,bottomrow1,bottomrow2 } from "../Utils/HomePosterData";
import { responsiveHeight,responsiveWidth } from "../Utils/Dimension";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const HomeScreen=()=>{
    const navigation=useNavigation();
    return(
        <>
        
        <SafeAreaView style={HomeStyle.main}>
        <StatusBar backgroundColor={'transparent'} translucent={true}/>
        <SwiperFlatList
        autoplay
        autoplayDelay={4}
        autoplayLoop
        data={posterData}
        renderItem={({ item }) => (
        <View style={HomeStyle.childContainer}>
            <Image style={{height:responsiveHeight(100)}} source={{uri:item.posterUrl}}/>
        </View>
      )}
        />
        <View style={HomeStyle.bottomContainer}>
            <LinearGradient colors={['transparent', '#000', '#000']} style={HomeStyle.linearGradient}>
                <View style={{flex:1}}/>
                <View style={HomeStyle.logoConatiner}>
                    <View style={HomeStyle.logoChildContainer}>
                        {bottomrow1.map((d,i)=>(
                        <TouchableOpacity key={i} onPress={d.onIconPress}>
                            <Image source={{uri:d.logoUrl}}  style={HomeStyle.logo}/>
                        </TouchableOpacity>
                        ))}
                    </View>
                    <View style={HomeStyle.logoChildContainer}>
                        {bottomrow2.map((d,i)=>(
                        <TouchableOpacity key={i} onPress={d.onIconPress}>
                            <Image source={{uri:d.logoUrl}} style={HomeStyle.logo}/>
                        </TouchableOpacity>
                        ))}
                    </View>

                </View>
                <View style={HomeStyle.bottomTabs}>
                    {bottomOptionList.map((d,i)=>(
                        <TouchableOpacity key={i} onPress={()=>{navigation.navigate(d.navigationName)}}>
                            <Text style={{color:'yellow'}} >{d.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </LinearGradient>
        </View>
        </SafeAreaView>

        </>
    )
}
const HomeStyle=StyleSheet.create({
    main:{
        flex:1,
        position:'relative'
    },
    childContainer:{
        width:responsiveWidth(100),
    },
    bottomContainer:{
        position:'absolute',
        bottom:0,
        width:responsiveWidth(100),
        height:responsiveHeight(50),
        justifyContent:'space-between'
    },
    linearGradient:{
        flex:1,
        justifyContent:'space-around'
    },
    logoConatiner:{
        flex:1,
        paddingLeft:responsiveWidth(12),
        paddingRight:responsiveWidth(12)
    },
    logoChildContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    logo:{
        height:responsiveHeight(6),
        width:responsiveHeight(6)
    },
    bottomTabs:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
})
export default HomeScreen