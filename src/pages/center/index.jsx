import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, } from 'mobx-react'

import './index.module.scss'
import MainContainer from '@/components/mainContainer'
import indexStore from '../index/store/indexStore'

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
        console.log('======center===componentDidMount====')
        let testData = []
        for (let index = 0; index < 50; index++) {
            let params = {
                id: index
            }
            testData.push(params)
        }
        this.setState({ testData })
    }

    componentWillUnmount() { }

    componentDidShow() {
        indexStore.tabSelectPosition = 1;
    }

    componentDidHide() { }



    render() {
        const { testData } = this.state;

        return (
            <MainContainer
                boolShowTabBar={true}
                hasBackIcon={false}
                title={'分类'}>
                {
                    testData.map((item, index) => {
                        return <View style={{ height: 50 + 'px', }} >
                            第  {index}个
                        </View>
                    })
                }
            </MainContainer>

        )

    }
}

export default Index
