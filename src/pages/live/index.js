import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, LivePusher, LivePlayer } from '@tarojs/components'

import './index.less'

export default class Index extends Component{
  config = {
    navigationBarTitleText: '直播'
  }
  render(){
    return <View>
      <Text>录制</Text>
      <LivePusher style={{height:'100px',width:'100px'}} url="rtmp://32162.livepush.myqcloud.com/live/32162_03839f3cbf1111e892905cb9018cf0d4?bizid=32162" autopush={true}></LivePusher>
      <Text>播放</Text>
      <LivePlayer src="rtmp://32162.liveplay.myqcloud.com/live/32162_03839f3cbf1111e892905cb9018cf0d4" mode="RTC" autoplay={true}></LivePlayer>
      {/* <LivePlayer src="http://32162.liveplay.myqcloud.com/live/32162_05d2060817.flv"></LivePlayer> */}
    </View>
  }
}
