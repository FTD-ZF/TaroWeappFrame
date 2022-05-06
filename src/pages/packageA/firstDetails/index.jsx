import { Component } from 'react'
import { View, Button, Text, RichText, ScrollView, CustomWrapper } from '@tarojs/components'
import { observer, } from 'mobx-react'
import Taro from '@tarojs/taro'

import styles from './index.module.scss'

import indexStore from '@/pages/index/store/indexStore'
import MainContainer from '@/components/mainContainer'
import Skeleton from 'taro-skeleton'

@observer
class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {

            testData: []
        }
    }

    componentWillMount() { }

    componentDidMount() {

        indexStore.isLoadingA = true;
        setTimeout(() => {

            let testData = []
            for (let index = 0; index < 50; index++) {
                let params = {
                    id: index
                }
                testData.push(params)
            }
            this.setState({ testData }, () => {
                indexStore.isLoadingA = false;
            })

        }, 5000);
        console.log(this.scrollViewRefs)
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    onScrollToLower() {
        //底部触发
        console.log('===onScrollToLower====')


        indexStore.isLoadingA = true;

        setTimeout(() => {
            indexStore.isLoadingA = false;
        }, 3000);

    }
    onScrollToUpper() {
        //顶部触发
        console.log('===onScrollToUpper====')
    }
    render() {

        const { isLoadingA } = indexStore;
        const { testData } = this.state;
        console.log('======isLoadingA===' + isLoadingA)
        return (
            <MainContainer
                title={'FirstDetails'}
                onScrollToLower={() => this.onScrollToLower()}
                onScrollToUpper={() => this.onScrollToUpper()}
                isLoading={isLoadingA}>
                {/* {isLoadingA ? <Skeleton avatar avatarShape='square' avatarSize={100} title row={1} /> : */}
                    {/* <View> */}
                        {
                            testData.map((item, index) => {
                                return <View className={styles.main} >
                                    <View className={styles.leftV} />
                                    <View className={styles.rightV} >
                                        <View className={styles.rightTitle} >第{index}个</View>
                                        <View className={styles.rightTitle} >第{index}个</View>
                                    </View>
                                </View>
                            })
                        }
                    {/* </View>} */}

            </MainContainer>

        )
    }
}

export default Index
