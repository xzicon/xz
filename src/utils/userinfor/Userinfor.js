import React, { Component } from 'react';
import {View, Text, FlatList, Dimensions,TouchableOpacity  ,ScrollView, Image,TextInput,StyleSheet,StatusBar,AsyncStorage, } from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
import { Grid, Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');

const options = {
    title: '请选择',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '从相册选择图片',
    customButtons: [{ name: 'fb', title: '从 Facebook 选择图片' }],
    cancelButtonTitle: '取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const own = [
    {
        title: '收藏',
        img: require('../../public/image/mine/sc.png')
    },
    {
        title: '创作',
        img: require('../../public/image/mine/cz.png')
    },
    {
        title: '我赞过的',
        img: require('../../public/image/mine/zan.png')
    },
    {
        title: '我评论的',
        img: require('../../public/image/mine/say.png')
    },
    
    
]

const others =[
    {
        title:'关于我们',
    },
    {
        title:'常见问题',
    },
    {
        title:'帮助',
    },
    {
        title:'意见反馈',
    },
    {
        title:'设置',
    },
]

let uid =3;
export default class Userinfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[]
        }
    }
    componentDidMount(){
        fetch('http://116.62.14.0:8402/login/me/'+uid+'/'+uid)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
        })
    }
    render() {
        
        return (
            <ScrollView style={{backgroundColor:'#f5f5f5'}}>
                <View style={{flex: 1,height:'100%',}}>
                    <StatusBar backgroundColor="red" />
                   
                    {/* <View  style={{width:width,height:250,backgroundColor:'#f23030',position:'relative'}}>
                        
                        
                        <View style={{width:100,height:100,position:'absolute',top:'20%',left:'40%'}}>
                            <TouchableOpacity   onPress={()=>{this.takephoto()}}>
                                {this.state.t==='1'?<Image  style={{width:100,height:100,borderRadius:50}} source={this.state.imageUrl}  />:<Image  style={{width:100,height:100,borderRadius:50}} source={require('../../assets/tx.jpg')}  />}
                            </TouchableOpacity>
                        </View>
                        
                        <Text  style={{color:"white",fontSize:22,position:'absolute',top:'65%',left:'35%'}}>BINNU DHILLON</Text>
                    </View> */}

                    <View style={{width:width,height:40,position:'relative',backgroundColor:'white'}}>
                        <Image style={{width:30,height:30,position:'absolute',top:'15%',right:'5%'}} source={require('../../public/image/mine/remind.png')} />
                        
                    </View>

                    <View style={{width:width*0.96,height:170,marginTop:10,marginLeft:'2%',marginRight:'2%',position:'relative',backgroundColor:'white'}}>
                            
                        <View style={{width:'100%',height:'70%',}}>
                            <View style={{width:'100%',height:'100%',position:'relative',}}>
                                <Image source={{uri:'http://116.62.14.0:8402/images/'+this.state.data.uimage}} style={{width:84,height:84,position:'absolute',top:'15%',left:'3%',borderRadius:42,}}  />
                                <Text style={{width:'50%',height:'30%',position:'absolute',top:'15%',left:'25%',fontSize:17,}}>{this.state.data.uname}</Text>
                                <Text style={{width:'50%',height:'50%',position:'absolute',top:'45%',left:'25%',fontSize:17,}}>{this.state.data.udescribe}</Text>
                                <TouchableOpacity  style={{width:'20%',height:'30%',position:'absolute',top:'15%',right:'5%',}}  >
                                    <View style={{borderWidth:1,alignItems:'center',padding:'3%'}}>
                                        <Text  style={{color:'#000',fontSize:17,}}>编辑资料</Text>
                                    </View> 
                                </TouchableOpacity>  
                            </View>
                            
                        </View>
                        <View style={{width:'100%',height:'30%',flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity  style={{width:width*0.30,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                                <Text style={{fontSize:17,color:'#333',textAlignVertical:'center'}}>关注</Text>        
                            </TouchableOpacity>
                            <TouchableOpacity  style={{width:width*0.30,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                                <Text style={{fontSize:17,color:'#333',textAlignVertical:'center'}}>获赞</Text>        
                            </TouchableOpacity>
                            <TouchableOpacity  style={{width:width*0.30,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                                <Text style={{fontSize:17,color:'#333',textAlignVertical:'center'}}>{this.state.data.ufans}粉丝</Text>        
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    {/* <View style={{backgroundColor:"white",width:width,height:80,marginTop:10}}>
                        
                        <FlatList 
                            
                            data={own}
                            numColumns={4}
                            renderItem={({item})=>(
                                <View style={{width:width*0.25,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                                    <Image 
                                        resizeMode="contain"
                                        source={item.img}
                                        style={{width:30,height:30,marginTop:'3%',marginBottom:'5%'}}
                                    />
                                    
                                    {item.title==='收藏'?<Button onPress={()=>Actions.collect()} style={{fontSize:16,color:'#333',textAlignVertical:'center'}} >{item.title}</Button>:<Button style={{fontSize:16,color:'#333',textAlignVertical:'center'}} >{item.title}</Button>}
                                    
                                </View>
                            )}
                            
                        />
                    </View> */}
                    <View style={{backgroundColor:"white",width:width*0.96,height:80,marginTop:10,marginLeft:'2%',marginRight:'2%',flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>Actions.collect()} style={{width:width*0.22,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                            <Image 
                                resizeMode="contain"
                                source={own[0].img}
                                style={{width:30,height:30,marginTop:'3%',marginBottom:'5%'}}
                            />
                            <Text style={{fontSize:16,color:'#333',textAlignVertical:'center'}}>收藏</Text>        
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.write()} style={{width:width*0.25,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                            <Image 
                                resizeMode="contain"
                                source={own[1].img}
                                style={{width:30,height:30,marginTop:'3%',marginBottom:'5%'}}
                            />
                            <Text style={{fontSize:16,color:'#333',textAlignVertical:'center'}}>创作</Text>        
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.praise()}   style={{width:width*0.25,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                            <Image 
                                resizeMode="contain"
                                source={own[2].img}
                                style={{width:30,height:30,marginTop:'3%',marginBottom:'5%'}}
                            />
                            <Text style={{fontSize:16,color:'#333',textAlignVertical:'center'}}>我赞过的</Text>        
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.mnew()}  style={{width:width*0.25,marginTop:'2%',marginBottom:'2%',alignItems:'center'}}>
                            <Image 
                                resizeMode="contain"
                                source={own[3].img}
                                style={{width:30,height:30,marginTop:'3%',marginBottom:'5%'}}
                            />
                            <Text style={{fontSize:16,color:'#333',textAlignVertical:'center'}}>我评论的</Text>        
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{backgroundColor:"white",width:width,height:280,marginTop:15}}>
                        <FlatList 
                            
                            data={others}
                            numColumns={1}
                            renderItem={({item})=>(
                                <View>

                                    {item.title==='设置'?
                                        <TouchableOpacity onPress={} style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                                            <View >
                                                <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{item.title}</Text>
                                                <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />
                                            
                                            </View>
                                        
                                        </TouchableOpacity>
                                    :
                                        <TouchableOpacity style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                                            <View >
                                                <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{item.title}</Text>
                                                <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />
                                            
                                            </View>
                                    
                                        </TouchableOpacity>
                                    }

                                </View>
                            )}
                        
                        />
                    </View> */}

                    <View style={{backgroundColor:"white",width:width*0.96,height:280,marginTop:10,marginLeft:'2%',marginRight:'2%',}}>
                        <TouchableOpacity  style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                            <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{others[0].title}</Text>
                            <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />                                            
                        </TouchableOpacity>


                        <TouchableOpacity onPress={()=>Actions.question()}  style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                            <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{others[1].title}</Text>
                            <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />                                            
                        </TouchableOpacity>

                        <TouchableOpacity  style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                            <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{others[2].title}</Text>
                            <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />                                            
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.feedback()} style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                            <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{others[3].title}</Text>
                            <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />                                            
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.myset()} style={{width:width,height:40,backgroundColor:'white',position:'relative',marginTop:15}}>
                            <Text style={{position:'absolute',left:'3%',fontSize:19,color:'#333'}} >{others[4].title}</Text>
                            <Icon name="right" color="#d8d8d8" style={{position:'absolute',top:'3%',right:'5%'}} />                                            
                        </TouchableOpacity>
                    </View>

                    

                    
                </View>
            </ScrollView>
        )
    }
}
