import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView, Text, CustomWrapper, } from '@tarojs/components'

import styles from './pageContainer.module.scss'

import systemUtils from '../../utils/systemUtils'
import { ImageKeys } from '../../assets'
import TopBar from '../topBar/topBar'



/**
 *  hasBackIcon-是否使用当前返回按钮，默认true;
 *  title-当前标题名字;
 *  pageStyle-当前页面整体属性;
 *  contentStyle-内容页面属性;
 *  boolShowTabBar-判定当前组件是否在有底部tabbar的页面使用，默认false;
 *  onScrollToLower, onScrollToUpper--scrollview的上下拉监听
 *  onBack-当前返回按钮的点击方法，默认为返回上一页，若添加方法，则根据实际方法使用   
 */
// @observer
export default class PageContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {


        }
    }




    render() {

        // hasBackIcon-是否使用当前返回按钮，默认true
        // title-当前标题名字
        // pageStyle-当前页面整体属性
        // contentStyle-内容页面属性
        // boolShowTabBar-判定当前组件是否在有底部tabbar的页面使用，默认false
        // onScrollToLower, onScrollToUpper--scrollview的上下拉监听
        // onBack-当前返回按钮的点击方法，默认为返回上一页，若添加方法，则根据实际方法使用
        // isLoading- 是否展示loading布局
        const { hasBackIcon = true, title = '',
            pageStyle, contentStyle,
            boolShowTabBar = false, onScrollToLower, onScrollToUpper,
            onBack, } = this.props;

        const safeArea = systemUtils.getSystemInfo();
        const statusBarHeight = safeArea.statusBarHeight;//顶部状态栏高度
        const titleBarHeight = 44;//标题栏高度
        const tabHeight = boolShowTabBar ? systemUtils.tabbarHeight() : 0;//底部tab栏目高度
        
        //此处使用底部安全距离，若不使用自定义底部tab则需要加这层判定来控制，因为默认底部tab已经带上了安全距离的高度
        // const bottom = boolShowTabBar ? 0 : systemUtils.safeAreaBottom();//底部安全距离
        const bottom = systemUtils.safeAreaBottom();//底部安全距离

        let contentHeight = systemUtils.getSystemInfo().height;//除去状态栏的高度
        // console.log('==boolShowTabBar==' + boolShowTabBar + '==tabHeight==' + tabHeight+'===bottom=='+bottom)
        return <View className={styles.pageContainer} style={pageStyle}>
            {/** 导航栏 */}
            <TopBar hasBackIcon={hasBackIcon} title={title}
                onBack={onBack} />

            {/* 内容 */}
            {/* <View style={{
                marginTop: (statusBarHeight + titleBarHeight) + 'px',
                height: (contentHeight - tabHeight - titleBarHeight - bottom) + 'px',
                backgroundColor: 'green',
            }}>
                <View className={styles.pagecontent}
                    style={contentStyle}>
                    {this.props.children}
                </View>
            </View> */}
            <View style={{
                display: 'flex',
                height: (contentHeight - tabHeight - titleBarHeight) + 'px',
                position: 'relative'
            }} >
                <ScrollView style={{
                    marginTop: (statusBarHeight + titleBarHeight) + 'px',
                    height: (contentHeight - tabHeight - titleBarHeight - bottom) + 'px',

                }}
                    scrollY
                    onScrollToLower={onScrollToLower}
                    onScrollToUpper={onScrollToUpper}
                >
                    <View className={styles.pagecontent}
                        style={contentStyle}>
                        {this.props.children}
                    </View>
                </ScrollView>


            </View>


        </View >
    }
}

// {"errMsg":"getSystemInfo:ok","model":"iPhone X","pixelRatio":3,"windowWidth":375,
// "windowHeight":730,"system":"iOS 10.0.1","language":"zh_CN","version":"7.0.4","screenWidth":375,"screenHeight":812,
//"SDKVersion":"2.13.0","brand":"devtools","fontSizeSetting":16,"benchmarkLevel":1,"batteryLevel":100,"statusBarHeight":44,
// "safeArea":{"right":375,"bottom":812,"left":0,"top":44,"width":375,"height":768},"deviceOrientation":"portrait","platform":"devtools","devicePixelRatio":3}