import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import TOP from './top';
import Activity from './activity'
import './head.scss'

class Head extends Component {
  constructor(){
      super(...arguments)
      this.state = {
          store: {
              title: '川香居',
              notice: '欢迎光临，很高兴为您服务',
              tags: ['味道赞', '主食真好', '分量足']
          }
      }
  }

  render () {
    let {store} =this.state
    return (
      <View>
          <TOP></TOP>
          <Image className='back' src={require('../../assets/images/团购.jpg')}></Image>
          <View className='store'>
            <Image className='store_img' src={require('../../assets/images/团购.jpg')}></Image>
            <View className='store_text'>
               <Text>{store.title}</Text>
               <Text>{store.notice}</Text>
               <View>
                  {store.tags.map((item, index) =>{
                    return(
                      <Text className='tags_text' key={index}>{item}</Text>
                    )
                  })}
               </View>
            </View>
          </View>
          <Activity></Activity>
      </View>
    )
  }
}

export default Head
