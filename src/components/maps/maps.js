import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Map } from '@tarojs/components'
// 引入 map 组件
class Mapu extends Component {
  constructor() {
    super()
    this.state ={
      markers: [{
        iconPath: "/assets/images/timg.jpg",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color:"#FF0000DD",
        width: 2,
        dottedLine: true
      }],
    }
  }
  onTap () {}
  render () {
    return (
      <Map
      className='map'
      subkey={'XVJBZ-DCIK3-EZ63W-3JLMP-7CACV-XTBVB'} show-location
      scale='14'
      polyline="{{polyline}}"
      markers="{{markers}}"
      onClick={this.onTap} />
    )
  }
}
export default Mapu;