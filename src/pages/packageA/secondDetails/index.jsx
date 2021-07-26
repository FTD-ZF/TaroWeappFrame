import React, { Component } from 'react'
import { View, Image, Text, } from '@tarojs/components'
import VirtualList from '@tarojs/components/virtual-list'
import { observer, } from 'mobx-react'
import Taro from '@tarojs/taro'

import styles from './index.module.scss'

import indexStore from '@/pages/index/store/indexStore'
import MainContainer from '@/components/mainContainer'
import systemUtils from '@/utils/systemUtils'

@observer
class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillMount() { }

    componentDidMount() {
        indexStore.isLoadingA = true;
        setTimeout(() => {

            let data = []
            for (let index = 0; index < 50; index++) {
                let params = {
                    id: index
                }
                data.push(params)
            }
            this.setState({ data }, () => {
                indexStore.isLoadingA = false;
            })

        }, 3000);
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

    Row = React.memo((item) => {
        // console.log(item)
        return (
            <View style={{ backgroundColor: 'yellow', display: 'flex', height: '100%' }} >
                第{item.index} 个
            </View>
        );
    })

    listReachBottom() {
        if (this.state.data.length >= 70) {
            return
        }
        indexStore.isLoadingA = true;
        setTimeout(() => {
            let dataA = []
            for (let index = 50; index < 70; index++) {
                let params = {
                    id: index
                }
                dataA.push(params)
            }

            this.setState({ data: this.state.data.concat(dataA) })
            indexStore.isLoadingA = false;
        }, 3000);
        console.log('=====listReachBottom=====')
    }

    render() {

        const { isLoadingA } = indexStore;
        const { data } = this.state;
        const contentHeight = systemUtils.getSystemInfo().height;//除去状态栏的高度
        const bottom = systemUtils.safeAreaBottom();//底部安全距离
        const titleBarHeight = 44;//标题栏高度

        let vListHeight = contentHeight - titleBarHeight - bottom;
        let dataLen = data.length;
        let itemHeight = 100;
        let curCount = vListHeight / itemHeight;
        console.log('===dataLen===' + dataLen)
        console.log('===vListHeight===' + vListHeight)
        console.log('====curCount====' + curCount)
        return (
            <MainContainer
                title={'SecondDetails'}
                onScrollToLower={() => this.onScrollToLower()}
                onScrollToUpper={() => this.onScrollToUpper()}
                isLoading={isLoadingA}>

                {dataLen != 0 ? <VirtualList
                    style={{ backgroundColor: 'red' }}
                    height={vListHeight} /* 列表的高度 */
                    width='100%' /* 列表的宽度 */
                    itemData={data} /* 渲染列表的数据 */
                    itemCount={dataLen} /*  渲染列表的长度 */
                    itemSize={itemHeight} /* 列表单项的高度  */
                    onScroll={({ scrollDirection, scrollOffset }) => {

                        console.log(scrollOffset)
                        // console.log('== ((dataLen - curCount) * itemHeight + 100)===' + ((dataLen - curCount) * itemHeight + 100))
                        console.log('== (dataLen ) * itemHeight-vListHeight===' + ((dataLen * itemHeight) - vListHeight))

                        if (
                            // 避免重复加载数据
                            !isLoadingA &&
                            // 只有往前滚动我们才触发
                            scrollDirection === 'forward' &&
                            //所有item的高度减去当前屏幕高度 为滑动到底部位置 然后 再减去一个item的高度 为提前一个item高度进行加载
                            scrollOffset > ((dataLen * itemHeight) - vListHeight - itemHeight)
                        ) {
                            this.listReachBottom()
                        }
                    }}
                >
                    {this.Row}
                </VirtualList> : <View />}


            </MainContainer>

        )
    }
}

export default Index
