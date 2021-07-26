import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, } from 'mobx-react'

import './index.module.scss'
import MainContainer from '@/components/mainContainer'
import indexStore from '../index/store/indexStore'

@observer
class Index extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() {
        indexStore.tabSelectPosition = 2;
    }

    componentDidHide() { }

    render() {

        return (
            <MainContainer title='我的' hasBackIcon={false}
                boolShowTabBar={true}>

            </MainContainer>
        )
    }
}

export default Index
