import React,{useEffect, useState} from "react";
import { View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight,responsiveWidth } from "../Utils/Dimension";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import serachData from "../Utils/Category";
import { useRoute } from "@react-navigation/native";
import MovieCard from '../Components/MovieCard'

const SearchScrean=()=>{
    const[value,setValue]=useState('');
    const[tempValue,setTempValue]=useState([]);
    const route=useRoute();
    const {data}=route.params;

    useEffect(()=>{
        filterSearchData();
    },[value]);

    const filterSearchData = () => {
        console.log(value);
        if(value){
        const tempResult = data.filter(temp => {
          const nameTextLower = temp.name.toLowerCase();
          const searchTextLower = value.toLowerCase();
          if (
            nameTextLower.indexOf(searchTextLower) != -1 ||
            temp.category.includes(value)
          ) {
            return temp;
          }
        });
        setTempValue(tempResult);
        }
      };
    return(
        <>
        <SafeAreaView style={searchStyle.main}>
            <View style={searchStyle.searchView}>
                <Ionicons name='search' color={'yellow'} size={responsiveWidth(6)}/>
                <TextInput placeholder="Movie Name/Genre/Year" placeholderTextColor={'#b3b3b3'} value={value} onChangeText={(e)=>setValue(e)} style={searchStyle.searchField}/>
                <Feather name='mic' color={'yellow'} size={responsiveWidth(8)}/>
            </View>
            {value?
            <FlatList
                data={tempValue}
                renderItem={({item})=>{
                    return <MovieCard data={item} type={'Bollywood'}/>
                }}
                numColumns={3}
            />
            :
            <View style={searchStyle.categoryView}>
                {serachData.map((d,i)=>(
                <TouchableOpacity style={searchStyle.categoryCard} key={i} onPress={()=>setValue(d.name)}>
                    <Text style={[searchStyle.categoryText,{color:randomColor()}]}>{d.name}</Text>
                </TouchableOpacity>
                ))}
            </View> 
            
            }
            


        </SafeAreaView>
        
        </>
    )
}
const randomColor = () => {
    var color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
    return color;
  };

const searchStyle=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#000000'
    },
    searchView:{
        height:responsiveHeight(6),
        backgroundColor:'#111111',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    searchField:{
        width:'80%',
        textAlign:'center',
        color:'white'
        
    },
    categoryView:{
        marginTop:responsiveHeight(30),
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    categoryCard:{
        backgroundColor:'#111111',
        paddingVertical:responsiveWidth(1),
        paddingHorizontal:responsiveWidth(2),
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(4),
    },
    categoryText:{
        color:'white',
        fontSize:responsiveWidth(5)
    }

})
export default SearchScrean;