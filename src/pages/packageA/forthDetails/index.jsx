import React, { Component, useRef } from 'react'
import { View, Image, Text, } from '@tarojs/components'
import VirtualList from '@tarojs/components/virtual-list'
import { observer, } from 'mobx-react'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

import indexStore from '@/pages/index/store/indexStore'
import MainContainer from '@/components/mainContainer'
import systemUtils from '@/utils/systemUtils'
import TabView from './components/tabView'
import TestView from './components/testView'


/**
 * 1.类组件中调用函数组件的方法
 * 2.函数组件中调用函数组件方法
 */
@observer
class Index extends Component {

    constructor(props) {
        super(props)
        this.adRef = React.createRef()

        this.state = {
            data: [],
            tabIndex: 1,
        }
    }

    componentWillMount() { }

    componentDidMount() {

    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    onScrollToLower() {
        //底部触发
        console.log('======onScrollToLower====')
    }
    onScrollToUpper() {
        //顶部触发
        console.log('======onScrollToUpper====')
    }

    getTabPosition(tabIndex) {
        console.log('======tabIndex========' + tabIndex)
    }

    testClick() {

        // console.log(this.adRef)
        this.adRef.current.toSetPosition()
    }

    render() {

        const { isLoadingA } = indexStore;
        const { tabIndex, } = this.state;

        return (
            <MainContainer
                title={'ForthDetails'}
                onScrollToLower={() => this.onScrollToLower()}
                onScrollToUpper={() => this.onScrollToUpper()}
                isLoading={isLoadingA}>
                {/* ================类组件中调用函数组件的方法====================== */}
                <TabView ref={this.adRef} tabIndex={tabIndex} getTabPosition={(index) => this.getTabPosition(index)} />
                <View className={styles.btn} onClick={() => this.testClick()} >
                    <Text>点击切换到左边tab</Text>
                </View>
                {/* ==============函数组件中调用函数组件方法======================= */}
                <TestView />

            </MainContainer>
        )
    }
}

export default Index
