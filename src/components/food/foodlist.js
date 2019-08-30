
import  Taro,{Component}  from  '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './foodlist.scss'
import AddCut  from '../addcut/addcut';
class  FoodList  extends  Component{
	constructor(){
		super(...arguments);
		this.state={};
	}
	render(){		
		let {selectCata,currentList}=this.props;
	   return  (<View className="foodlist">
	             <Text>{selectCata?selectCata.name:""}</Text>
	              <View className="foodlist_forlist">
	              {
	              	currentList.map((item,index)=>{
	              		return (<View key={item.id} className="foodlist_item">
	              		       <Image className="foodlist_item_img" src={item.img==2?require('../../assets/images/拼团.png'):require('../../assets/images/团购.jpg')}></Image>
	              		       <View className="foodlist_item_info">
	              		         <Text>{item.title}</Text>
	              		         <Text>月售:{item.sole}</Text>
	              		         <Text className="price">¥{item.price}</Text>
                             <AddCut  food={item} />
	              		       </View>
	              		</View>)
	              	})
	              }
	              </View>
	          </View>)
	}
}
export default FoodList;