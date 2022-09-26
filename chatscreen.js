import React ,{useState} from "react";
import { StyleSheet,Dimensions,FlatList,View,Image,Text,TouchableOpacity,TextInput, KeyboardAvoidingView ,Platform,Button} from "react-native";
import styles from './styles/main';
 import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

const DATA_MESSAGES=[
    {
      
      id:0,frnName:'Ahof33 Patricia',


    chats:[
      {id:1,text:'Hey,How are you',
      sender:'Buyer',
 },
      
      {id:1,text:'Im fine, U..?',
      sender:'Rider',
       },

    ]}
  ]
  
  const {width,height}=Dimensions.get('window');
  
  const Chats=({item}) => {
    var state=item.sender==="Rider"



    //messages carried here
      return(
      <View style={[styles.pdlt10,styles.mdtp10,styles.mdbt10,styles.pdtp10,item.sender==="Rider"? styles.frowrev : styles.frow,styles.jStart]}>


          <View style={state ? styles.pdlt10 : styles.pdrt10}>
            <Image style={{width:40,height:40,borderRadius:50}}
            source={{uri:item.img}} />
          </View>
          
          <View>
          <View style={[messages.Chat,state ? messages.myChat : messages.frnChat]}>
            <Text style={{lineHeight:25}}>{item.text}</Text>
          </View>
        </View>
      </View>
      )
  };


var num=1



  const ChatScreen=(props)=>{
    const _renderMessages=({item})=>{
      return(
        <Chats item={item} />
      )
    }

    const [usermessage ,setMessage]=useState('')
    

   function InsertChatRider(){
  for(var i=0;i<=DATA_MESSAGES.length;++i){

[
  {
    id:{i},
    text:{usermessage},
    sender:'Rider',

  }
]


  }
}


 
    let Items = [
        {label: 'Phone', value: '1'},
        {label: 'Bag', value: '2'},
        {label: 'Shoes', value: '3'},
         
         
     ];

 let ItemTypePhone = [
        {label: 'Iphone', value: '1'},
        {label: 'Nokia', value: '2'},
        {label: 'Motorolla', value: '3'},
        {label: 'Itel', value: '4'},
        {label: 'Teckno', value: '5'},
        {label: 'Infinix', value: '6'},
         
    ];
   
    const DropdownScreen = _props => {
        const [dropdown, setDropdown] = useState(null);
        const [selected, setSelected] = useState([]);
        const [message, setMessage] = useState('');
      
        
        const _renderItem = item => {
            return (
            <View style={Optionstyles.item}>
                <Text style={Optionstyles.textItem}>{item.label}</Text>
           
               </View>
            );
        };
 
 

//trial
 
//trial
        return (

          
            <View style={Optionstyles.container}> 
          
                <Dropdown
                    style={Optionstyles.dropdown}
                    containerStyle={Optionstyles.shadow}
                    data={Items}
                    search
                    searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select item"
                    value={dropdown}                onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />

                <MultiSelect
                    style={Optionstyles.dropdown}
                    data={ItemTypePhone}
                    

    
                    labelField="label"
                    valueField="value"
                    label="Multi Select"
                    placeholder="Select itemType"
                    search
                    searchPlaceholder="Search itemtype"
                    value={selected}
                    onChange={item => {
                    setSelected(item);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                />

                <TextInput
          value={usermessage}
          onChangeText={(usermessage) => setMessage(usermessage)}
          placeholder={'Hello ,I have some items to pick up..'}

          style={Optionstyles.input}
        />  
        <Text style={{color: 'blue'}}>{message}
        </Text>

       
       
       <Button   onPress={InsertChatRider}
       title='Send'>
       </Button>
        
      <Image  
        style={Optionstyles.logo} 
    source={{ uri: 'https://i.pinimg.com/736x/69/4f/f7/694ff7b096c46090cb03cf0ba3022374.jpg' }}
        />
        <Text style={Optionstyles.somame}>SOMAME</Text>
            </View>
        );
 
    };

    
//condition to select before chat
    if(num==1){

    const headerComponent=()=>(
    <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.94)'}}>
   <View style={[{paddingBottom:20},styles.bdbtm4,styles.bdGrey,styles.pdlt10,styles.pdrt10,styles.frow,styles.jspaceBw]}>
            <View>
              <Text style={{fontSize:22,fontWeight:'bold'}}>{props.route.params.name}</Text>
              <Text style={[styles.f18,styles.clBl]}>Online</Text>
          
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Profile',props.route. params)}>

              <Image source={{uri:props.route.params.img}}
               style={{
                 width:50,
                 height:50,
                 borderRadius:50/2
               }}/>
            </TouchableOpacity>
          </View>
          </View>
  )
  
    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboarVerticalOffset ={100}
      style={{flex: 1}}>
      <>
      <FlatList 
        data={DATA_MESSAGES[0].chats}
        renderItem={_renderMessages}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={
          headerComponent
        }
        stickyHeaderIndices={[0]}
        contentContainerStyle = {{flexGrow:1,backgroundColor:'#D3D3D388'}}
        
      />
      <View style={{width:width,backgroundColor:'#FFF',borderTopColor:'#d4d4d4',borderTopWidth:1,paddingTop:15,paddingBottom:5}}>
            <View style={[styles.frow,styles.jspaceBw,styles.pdrt10,styles.pdlt10]}>
              <TextInput multiline={true} placeholder='type your message'
                style={{
                  height:45,
                  width:width/1.3,
                }} 
                value={usermessage}
                onChangeText={(message) => setMessage(message)}
              />
              <TouchableOpacity>
                <Text style={[styles.fb,styles.clBl]}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
          </>
      </KeyboardAvoidingView>
    )

  }
  else{
    return(
      <View>
      <DropdownScreen/>
      </View>
    )
  }


  }
   
  export default ChatScreen;
  const messages=StyleSheet.create({
    Chat:{maxWidth:width/2,padding:10},
    myChat:{
      backgroundColor:'#aaeedd',borderRadius:14,marginRight:-48,
    },
    frnChat:{
      backgroundColor:'#aaeeaa',borderRadius:14,marginLeft:-39,
    }
  })
 
  const Optionstyles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            padding: 40,
            marginTop:25
        }
    ,
  input: {
    width: 279,
    height: 100,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'whitesmoke'
    ,borderRadius:4,borderColor:'#CCC'
    
  },
       logo:{

        textAlign:'center',
        justifyContent:'center'
        ,
         width:259,height:170,marginTop:50
       },

       somame:{
         color:'Black',
         fontFamily:'DynaPuff',
         fontSize:25,
         textAlign:'center',
       }
     ,
   dropdown: {
            backgroundColor: 'white',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            marginTop: 20,
        },
        
        item: {
            paddingVertical: 17,
            paddingHorizontal: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textItem: {
            flex: 1,
            fontSize: 16,
        },
        shadow: {
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
        },
    });
