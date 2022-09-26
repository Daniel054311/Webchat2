import React,{useState} from 'react';
import { Dimensions,TouchableOpacity,View,Text,Image,FlatList,StyleSheet,Modal,Button } from 'react-native';
 
//


//


const MESSAGES_LIST=[
  {id:0,img:'https://th.bing.com/th/id/OIP.nMnUG-FT8wDzmgO-GwupcQHaF0?w=221&h=180&c=7&r=0&o=5&pid=1.7',name:"Ahof33 Patricia",lastMessage:'Hey,how are you?'},
  {id:0,img:'https://th.bing.com/th/id/OIP.6OWxIowMxHNSfOq14fx8uwHaJM?w=142&h=180&c=7&r=0&o=5&pid=1.7',name:"Magaret Mensah",lastMessage:'Meet me at 4'},
  {id:0,img:'https://th.bing.com/th/id/OIP.phMg5GhxPUEYMaVcG_r-RgHaFi?w=233&h=180&c=7&r=0&o=5&pid=1.7',name:"Shirley Baly",lastMessage:'Item is delayed'},
  {id:0,img:'https://i.pravatar.cc/150?img=5',name:"Emily Smith",lastMessage:'Where are you ..'},
]
const {width,height}=Dimensions.get('window');
const Item=(d) => {
  return (
     <TouchableOpacity onPress={()=>d.cl(d.item)} 

    style={[{flex:1,flexDirection:'row',justifyContent:'flex-start',marginBottom:5,marginTop:5},styles.pdlt10,styles.pdtp10]}>
      
        <Image source={{uri:d.item.img}}
        style={{
          width:50,
          height:50,
          borderRadius:80/2
        }}
        />
        <View style={[styles.pdlt10,{justifyContent:'center'}]}>
          <Text style={[styles.username22,styles.fb]}>{d.item.name}</Text>
          <Text style={[styles.clBl,styles.fb]}>{d.item.lastMessage}</Text>
        </View>
         
      </TouchableOpacity>
  )};
  
  
const Messages=(props)=>{

  const handleClick=(d)=>{

    props.navigation.navigate('Chat',d);
    
  }
  

  const _renderItem=({item})=>{
    return(
      <Item item={item} cl={handleClick} />
    )
  }
  

  return(
    <>
      <FlatList 
        data={MESSAGES_LIST}
        renderItem={_renderItem}
        keyExtractor={(item, index) => String(index)}
        
        ListHeaderComponent={
          <>
          <View style={[styles.frow,styles.jspaceBw,{backgroundColor:'rgba(242,242,242,1)'}]}>
            <View style={[{flex:1,paddingBottom:20,justifyContent:'center'},styles.pdlt10]}>
              <Text style={{fontSize:25,fontWeight:'bold',paddingLeft:20,paddingTop:20}}>Messages</Text>
            </View>
            
            
          </View>
          <View style={styles.pdtp10,styles.pdbt5,styles.bdbtm4,styles.bdGrey}
          >
              </View>
          </>
        }
      />
         
        
      </>
  )
}

 
//modal select

 

//

const styles=StyleSheet.create({
     
    username22:{
      fontSize:20
      ,paddingLeft:20,
    },
     
    pdtp10:{
      paddingTop:10,
      paddingLeft:20
    },
    pdbt5:{
      backgroundColor:'#fff',justifyContent:'center',marginBottom:10,
      paddingBottom:10,paddingLeft:20,
    },
  fb:{fontWeight:'bold',paddingLeft:20},clBl:{color:'cornflowerblue'},
    bdbtm4:{
      borderBottomWidth:1.5,paddingLeft:20
    },
    bdGrey:{
      borderColor:'#d4d4d4'
    }
  });
export default Messages