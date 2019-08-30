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
      address: '',
      aroundList: [
        {
          name: '汽车服务',
          id: '010000'
        },
        {
          name: '汽车销售',
          id: '020000'
        },
        {
          name: '汽车维修',
          id: '030000'
        },
        {
          name: '摩托车',
          id: '040000'
        },
        {
          name: '餐饮',
          id: '050000'
        },
        {
          name: '购物',
          id: '060000'
        },
        {
          name: '生活',
          id: '070000'
        },
        {
          name: '体育休闲',
          id: '080000'
        },
        {
          name: '医疗保健',
          id: '090000'
        },
        {
          name: '住宿',
          id: '100000'
        },
        {
          name: '风景名胜',
          id: '110000'
        },
        {
          name: '商务住宅',
          id: '120000'
        }
      ],
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
    // 页面加载获取当前定位位置为地图的中心坐标
    var _this = this;
    Taro.getLocation({
      success(data) {
        if (data) {
          console.log(data)
          _this.setState({
            latitude: data.latitude,
            longitude: data.longitude,
            markers:[{
              id:0,
              latitude: data.latitude,
              longitude: data.longitude,
              iconPath: '../../assets/images/marker.png',
              width: 44,
              height: 64
            }]
          });
        }
      }
    });
  }
  render () {
    return (
      <View>
         <View className="map_container">
            <View className="map-tab-bar">
                {this.aroundList.map((item, index) => {
                  return(
                    <View className='map-tab-li' key={item.id} onClick={this.onTag.bind(this,item.name)}>{item.name}</View>
                  )
                })}
            </View>
            <Map className="map" scale="14" include-points={points} markers={markers} longitude={longitude} latitude={latitude} ></Map>
            <View className="map-tab-bar map-foot {{isShow ? '' : 'map-hide'}}">
              <View className="map-name"></View>
              <View className="map-address"></View>
            </View>
         </View>
      </View>
    )
  }
  onTag(e) {//获取选择的附近关键词，同时更新状态
    console.log(e)
    this.getAround(e);
  }
  getAround(keywords,types) {//通过关键词获取附近的点，只取前十个，同时保证十个点在地图中显示
    var _this = this;
    var key = config.Config.key;
    var myAmap = new amapFile.AMapWX({key: key});
    myAmap.getPoiAround({
      iconPath: '../../assets/images/marker.png',
      iconPathSelected: '../../assets/images/marker_checked.png',
      querykeywords: keywords,
      querytypes: types,
      success(data) {
        console.log(data)
        if (data.markers) {
          var markers = [], points = [];
          for (var value of data.markers) {
            if (value.id > 9) break;
            if(value.id == 0){
              _this.setState({
                name: value.name,
                address: value.address,
                isShow: true
              })
            }
            markers.push({
              id: value.id,
              latitude: value.latitude,
              longitude: value.longitude,
              title: value.name,
              iconPath: value.iconPath,
              width: value.width,
              height: value.height,
              anchor: { x: .5, y: 1 },
              label: {
                content: value.name,
                color: 'green',
                fontSize: 12,
                borderRadius: 5,
                bgColor: '#fff',
                padding: 3,
                x: 0,
                y: -50,
                textAlign: 'center'
              }
            });
            points.push({
              latitude: value.latitude,
              longitude: value.longitude
            })
          }
          _this.setState({
            markers: markers,
            points: points
          })
        }
      },
      fail: function (info) {
        Taro.showToast({title: info})
      }
    })
  }
}

export default Index
