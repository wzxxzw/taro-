import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Head from '../../components/head/head'
import Food from '../../components/food/food'
import './index.scss'


class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
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
  render () {
    return (
      <View>
         <Head></Head>
         <Food></Food>
      </View>
    )
  }
}

export default Index
