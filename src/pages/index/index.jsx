import { Component } from 'react'
import {
  View, Button, Text, RichText, ScrollView, WebView,
  CoverView, CoverImage,
} from '@tarojs/components'
import { observer, } from 'mobx-react'
import Taro from '@tarojs/taro'

import styles from './index.module.scss'

import systemUtils from '../../utils/systemUtils'
import indexStore from './store/indexStore'

import MainContainer from '@/components/mainContainer'
import { NoDoublePress } from '@/utils/NoDoublePress'
import ItemView from './components/itemView/itemView'
import ItemTxt from './components/itemTxt/itemTxt'
import ItemTxtA from './components/itemTxtA/itemTxtA'
@observer
class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: '0'

    }
  }

  componentWillMount() { }

  onShareAppMessage() {

  }
  onShareTimeline() {

  }
  async componentDidMount() {
    const systemInfo = Taro.getSystemInfoSync();
    console.log(systemInfo)
    console.log(systemUtils.getSystemInfo().height)
    console.log(systemUtils.getPhoneSys())

    // await indexStore.getTokenInfo()


    // Taro.getSetting({
    //   success: (res) => {
    //     console.log('是否授权====');
    //     console.log(res)

    //   },
    //   fail: (err) => {
    //     console.log('是否授权===fail=');
    //     console.log(err)
    //   }
    // });

  }

  componentWillUnmount() { }

  componentDidShow() {
    indexStore.tabSelectPosition = 0;
  }

  componentDidHide() { }

  toDetails() {

    Taro.navigateTo({
      url: `/pages/packageA/firstDetails/index`,
    });
  }

  preloadData() {
    let dataA = '';
    setTimeout(() => {
      console.log('===preloadData======')
      dataA = '123'
    }, 5000);
    return dataA
  }
  toDetailsSecond() {
    Taro.navigateTo({
      url: `/pages/packageA/secondDetails/index`,
    });
  }

  toLogin(e) {
    // console.log('Taro.getCurrentPages()=====')
    // console.log(Taro.getCurrentPages())
    // console.log(e)

    // Taro.login({
    //   success: function (res) {
    //     console.log('==Taro.login===')
    //     console.log(res)
    //   }
    // })

    // Taro.checkSession({
    //   success: function (e) {
    //     console.log('====Taro.checkSession=====')
    //     console.log(e)
    //     //session_key 未过期，并且在本生命周期一直有效
    //   },
    //   fail: function () {
    //     console.log('====Taro.checkSession===fail==')
    //     console.log(e)
    //     // session_key 已经失效，需要重新执行登录流程
    //     // Taro.login() //重新登录
    //   }
    // })

    // Taro.getUserInfo({
    //   success: (e) => {
    //     console.log('====getUserInfo=======')
    //     console.log(e)
    //   },
    //   fail: (e) => {
    //     console.log('====getUserInfo==fail=====')
    //     console.log(e)
    //   }
    // })

    Taro.getUserProfile({
      desc: '用于完善个人资料',
      success: (e) => {
        console.log('====getUserProfile=======')
        console.log(e)
      },
      fail: (e) => {
        console.log('====getUserProfile==fail=====')
        console.log(e)
      }
    })

  }

  toDetailsThird() {
    // Taro.preload(this.preloadData())
    Taro.preload('dataA', '123')
    // Taro.preloadData('xsa');
    Taro.navigateTo({
      url: `/pages/packageA/thirdDetails/index`,
    });
  }

  toItemClick() {
    this.setState({ count: '2' })
  }

  render() {
    const { count } = this.state;
    const { isLoading, } = indexStore;

    return (
      <MainContainer title={'首页'} hasBackIcon={false}
        boolShowTabBar={true} isLoading={isLoading} >

        <Button openType='getUserInfo'
          // onGetUserInfo={(e) => this.toLogin(e)}
          onClick={(e) => this.toLogin(e)}>
          <Text>微信登录</Text>
        </Button>

        <ItemView title={'详情页面跳转'} style={{ backgroundColor: 'green' }} onClick={() => this.toDetails()} />

        <ItemView title={'VirtualList'} style={{ backgroundColor: 'blue' }} onClick={() => this.toDetailsSecond()} />

        <ItemView title={'preload'} style={{ backgroundColor: 'gray' }} onClick={() => this.toDetailsThird()} />

        <ItemTxt title={'Memo测试数据刷新渲染：' + count} />
        <ItemTxtA title={'非Memo测试数据刷新渲染：' + count} />
        <ItemView title={'点击修改数据'} onClick={() => this.toItemClick()} />

      </MainContainer>

    )
  }
}

export default Index
