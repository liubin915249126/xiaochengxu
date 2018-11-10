import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtAvatar } from 'taro-ui'
import './index.less'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  }
  getUserInfo (data) {
    const { detail: { userInfo } } = data
    this.setState({
      userInfo
    })
  }
  render () {
    const { userInfo, canIUse } = this.state
    return <View>
      <View>
        {userInfo.userAvatarUrl ? <AtAvatar image={userInfo.userAvatarUrl} /> : null}
        <Text>申请获取你的公开信息（昵称、头像等)</Text>
        <AtButton type='primary' open-type='getUserInfo' onGetUserInfo={this.getUserInfo} className='getUserInfo'> 微信授权 </AtButton>
        {/* {canIUse?<Button type="primary" open-type='getUserInfo' onGetUserInfo={this.getUserInfo} className="getUserInfo"> 微信授权 </Button>:
              <Button type="primary" open-type='getUserInfo' onGetUserInfo={this.getUserInfo} className="getUserInfo"> 11111</Button>} */}
      </View>
    </View>
  }
}
