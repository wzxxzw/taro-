import  Taro,{Component}  from  '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './addcut.scss'
class  AddCut  extends  Component{
	constructor(){
		super(...arguments);
		this.state={
		};
	}
	render(){
	   return  (<View className="addcut">
	    <Image  className={"opeate_img "} src={require('../../assets/images/cut.png')}></Image>
        <Text className={"food_num "}>0</Text>
        <Image   className="opeate_img" src={require('../../assets/images/add.png')}></Image>
	   </View>)
	}
}
export default AddCut;