import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './cata.scss'
class Cata extends Component {
  constructor() {
      super(...arguments);
      this.state ={
          selectCata: null,
          cata:[
              {name: '专场',id:1},
              {name: '热销',id:2},
              {name: '折扣',id:3},
              {name: '主食',id:4},
              {name: '热炒',id:5},
              {name: '凉菜',id:6},
              {name: '特色乱棍',id:7}
            ]
      }
  }
  handleClick(item) {
    this.setState({
        selectCata: item
    },()=> {
        this.props.onChangeCata && this.props.onChangeCata(this.state.selectCata)
    })
  }

  render () {
    let {cata, selectCata} = this.state
    return (
      <View className='cata'>
        {cata.map((item, index) => {
            return(
                <Text className={selectCata === item.id ? 'select ' + 'cata_name' : 'cata_name'} key={item.id} onClick={this.handleClick.bind(this,item.id)}>
                {item.name}
                </Text>
            )
        })}
      </View>
    )
  }
}

export default Cata