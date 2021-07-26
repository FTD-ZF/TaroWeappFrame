import { Component } from 'react'
import { View, Button, Text, RichText, ScrollView, CustomWrapper } from '@tarojs/components'
import { observer, } from 'mobx-react'
import Taro from '@tarojs/taro'



import PageContainer from '@/components/pageContainer/pageContainer'
import systemUtils from '@/utils/systemUtils'
import LoadingView from '@/components/loadingView/loadingView'
import indexStore from '@/pages/index/store/indexStore'


class MainContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // isLoading: false,

        }
    }

    componentWillMount() { }

    componentDidMount() {

    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    /**
       * 点击返回按钮
       */
    onNaviBack() {
        Taro.navigateBack({
            delta: 1
        }).catch(err => {
            Taro.switchTab({
                url: '/pages/index/index'
            })
        })
    }

    render() {

        const { hasBackIcon = true, title = '',
            pageStyle, contentStyle,
            boolShowTabBar = false, onScrollToLower, onScrollToUpper,
            onBack, isLoading = false, } = this.props;

        const { } = this.state;
        return (
            <View>

                <PageContainer
                    title={title}
                    hasBackIcon={hasBackIcon}
                    pageStyle={pageStyle}
                    contentStyle={contentStyle}
                    boolShowTabBar={boolShowTabBar}
                    onScrollToLower={onScrollToLower}
                    onScrollToUpper={onScrollToUpper}
                    onBack={onBack ? onBack : () => this.onNaviBack()}>

                    {this.props.children}

                </PageContainer>
                <CustomWrapper>
                    {isLoading ? <LoadingView boolShowTabBar={boolShowTabBar} /> : <View />}
                </CustomWrapper>

            </View>

        )
    }
}

export default MainContainer
