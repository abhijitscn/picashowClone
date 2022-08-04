import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/Splash.Screen';
import HomeScreen from '../Screens/Home.Screen';
import BollywoodScreen from '../Screens/Bollywood.Screen';
import HollyWoodScreen from '../Screens/HollyWood.Screen';
import SeriesScreen from '../Screens/Series.Screen';
import SearchScrean from '../Screens/SeachScreen';
import LiveTVScreen from '../Screens/LIveTVScreen';
import VideoPlayer from '../Screens/VideoPlayer';

const MainStack=()=>{
    const Stack=createNativeStackNavigator();
    const [isSplash,setIsSplash]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{setIsSplash(false)},3000)
    },[])
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
                {isSplash?
                <Stack.Screen name='splash' component={SplashScreen}/>
                :null}
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Bollywood' component={BollywoodScreen}/>
                <Stack.Screen name='Hollywood' component={HollyWoodScreen}/>
                <Stack.Screen name='Series' component={SeriesScreen}/>
                <Stack.Screen name='Search' component={SearchScrean}/>
                <Stack.Screen name='Livetv' component={LiveTVScreen}/>
                <Stack.Screen name='video' component={VideoPlayer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;