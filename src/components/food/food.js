import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodlist'
class Food extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          current: 0,
          foodlist: [],
          currentList: []
        }
      }
      handleClick (value) {
        this.setState({
          current: value
        })
      }
      //切换分类
      changeCata(selectCata) {
        if(this.state.foodlist.some(item => item.pid === selectCata.id)) {
            // 不要加载数据
            this.setState({
                currentList: this.state.foodlist.filter(item => item.pid === selectCata.id)
            })
           
        } else {
           // 需要加载数据
           this.setState({
               foodlist:this.state.foodlist.concat(this.getData(selectCata))
           }, () =>{
            this.setState({
                currentList: this.state.foodlist.filter(item => item.pid === selectCata.id)
            })
           })
         } 
      }
      getData() {
          Array.from(Array(Math.round(Math.random()*20)),(v,k) =>({}))
          return []
      }
  render () {
    const tabList = [{ title: '点菜' }, { title: '评价' }, { title: '商家 ' }]
    let {currentList} = this.state
    return (
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
         <Cata onChangeCata={this.changeCate.bind(this)}/><FoodList currentList={currentList}/>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
        评价
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          商家
        </AtTabsPane>
      </AtTabs>
    )
  }
}

export default Food