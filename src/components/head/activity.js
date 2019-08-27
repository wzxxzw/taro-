import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './activity.scss'

class Activity extends Component {
  constructor() {
      super(...arguments);
      this.state ={
          activity: [{
            type: 'cut',
            info: [{total: 48,cut:10},{total:58,cut:20},{total:100,cut:30}]
          }]
      }
  }
  getTextByType(type){
      switch(type){
          case 'cut':
          return '减'
          break;
          default:
          return '减'
          break;
      }
  }
  getline(arr) {
     return arr.map((item, index) => `满${item.total}减${item.cut}`).join(';')
  }
  render () {
    let {activity: [firstitem]} = this.state
    return (
      <View className='activity'>
          <Text className='type'>{this.getTextByType(firstitem.type)}</Text>
          <Text>{this.getline(firstitem.info)}</Text>
          <Text className='length'>{this.state.activity}</Text>
      </View>
    )
  }
}

export default Activity