import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './top.scss'

class Top extends Component {


  render () {
    return (
      <View className='top'>
          <View className='left'>
              <Image className='img' src={require('../../assets/images/箭头.png')}></Image>
          </View>
          <View className='right'>
              <Image className='img' src={require('../../assets/images/搜素.png')}></Image>
              <Image className='img' src={require('../../assets/images/拼团.png')}></Image>
              <Image className='img' src={require('../../assets/images/收藏.png')}></Image>
              <Image className='img' src={require('../../assets/images/省略号.png')}></Image>
          </View>
      </View>
    )
  }
}

export default Top
