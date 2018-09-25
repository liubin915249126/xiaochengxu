import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/live/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    'tabBar': {
      'color': '#626567',
      'selectedColor': '#2A8CE5',
      'backgroundColor': '#FBFBFB',
      'borderStyle': 'white',
      'list': [{
        'pagePath': 'pages/index/index',
        'text': '首页',
        // 'iconPath': 'images/index.png',
        // 'selectedIconPath': 'images/index_focus.png'
      }, {
        'pagePath': 'pages/live/index',
        'text': '发现',
        // 'iconPath': 'images/discovery.png',
        // 'selectedIconPath': 'images/discovery_focus.png'
      },  {
        'pagePath': 'pages/live/index',
        'text': '我的',
        // 'iconPath': 'images/burger.png',
        // 'selectedIconPath': 'images/burger_focus.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
