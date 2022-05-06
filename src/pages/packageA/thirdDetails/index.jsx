import React, { Component } from 'react'
import { View, Image, Text, } from '@tarojs/components'
import VirtualList from '@tarojs/components/virtual-list'
import { observer, } from 'mobx-react'
import Taro, { getCurrentInstance } from '@tarojs/taro'

import styles from './index.module.scss'

import indexStore from '@/pages/index/store/indexStore'
import MainContainer from '@/components/mainContainer'

@observer
class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        console.log('====third===componentWillMount=')
        //目前没有数据，api问题
        console.log(getCurrentInstance().preloadData)

        console.log('====third===componentWillMount=')
    }

    componentDidMount() {
        console.log('====third===componentDidMount=')

    }

    componentWillUnmount() { }

    componentDidShow() {
        console.log('====third===componentDidShow=')
    }

    componentDidHide() { }

    onScrollToLower() {
        //底部触发
        console.log('======onScrollToLower====')
    }
    onScrollToUpper() {
        //顶部触发
        console.log('======onScrollToUpper====')
    }




    render() {

        const { isLoadingA } = indexStore;
        const { } = this.state;


        return (
            <MainContainer
                title={'测试preload'}
                onScrollToLower={() => this.onScrollToLower()}
                onScrollToUpper={() => this.onScrollToUpper()}
                isLoading={isLoadingA}>




            </MainContainer>

        )
    }
}

export default Index
