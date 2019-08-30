import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text ,Map } from '@tarojs/components'
import './index.scss'
let amapFile = require('../../libs/amap-wx.js');
let config = require('../../libs/config.js');
let QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
class Index extends Component {

    config = {
    navigationBarTitleText: '首页',
    defineConstants: {
      LOCATION_APIKEY: JSON.stringify('XVJBZ-DCIK3-EZ63W-3JLMP-7CACV-XTBVB')
    },


  }
  constructor() {
    super()
    this.state ={
      status:null,
      latitude: null,
      longitude: null,
      isShow: false,
      markers: [],
      points: [],
      location: '',
      name:'',
      address: ''
  }
}
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }
  state ={
    name: '张三 '
  }
  componentDidShow () { }

  componentDidHide () { }
  click() {
    this.setState({name:'李四'})
    console.log(this.state.name)
  }
  componentDidMount() {
  }
// 事件触发，调用接口
nearby_search(){
    var key = config.Config.key1;
    var myAmap = new QQMapWX({key: key});
    var _this = this;
    // 调用接口
    myAmap.search({
    keyword: 'kfc',  //搜索关键词
    location: '39.980014,116.313972',  //设置周边搜索中心点
    success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
        mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: '../../assets/images/marker.png',
            width: 20,
            height: 20
        })
        }
        _this.setState({ //设置markers属性，将搜索结果显示在地图中
        markers: mks
        })
    },
    fail: function (res) {
        console.log(res);
    }, 
    complete: function (res){
        console.log(res);
    }
});
}
  render () {
    return (
      <View>
        <Button onClick={this.nearby_search}>搜索周边KFC</Button>

        <Map id="myMap"
            markers="{{markers}}"
            style="width:100%;height:300px;"
            longitude="116.313972"
            latitude="39.980014" scale='16'>
        </Map>
      </View>
    )
  }
}

export default Index
