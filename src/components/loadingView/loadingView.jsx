import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView, CoverView } from '@tarojs/components'

import styles from './loadingView.module.scss'
import systemUtils from '@/utils/systemUtils';
import { ImageKeys } from '@/assets';



//加载框
export default class LoadingView extends Component {


    render() {
        const { boolShowTabBar = false, } = this.props;

        const safeArea = systemUtils.getSystemInfo();
        const loadWidth = safeArea.width;
        const screenHeight = safeArea.screenHeight;
        const statusBarHeight = safeArea.statusBarHeight;//顶部状态栏高度
        const titleBarHeight = 44;//标题栏高度
        const tabHeight = boolShowTabBar ? systemUtils.tabbarHeight() : 0;//底部tab栏目高度
        const bottom = boolShowTabBar ? 0 : systemUtils.safeAreaBottom();//底部安全距离

        let contentHeight = systemUtils.getSystemInfo().height;//除去状态栏的高度

        return (<View className={styles.main} style={{
            height: screenHeight + 'px',
        }} >

            <View className={styles.loadView}
                style={{ width: (loadWidth / 5) + 'px', height: (loadWidth / 5) + 'px', }} >
                <View className={styles.sk_chase}
                    style={{ width: (loadWidth / 8) + 'px', height: (loadWidth / 8) + 'px', }}
                >
                    <View className={styles.sk_chase_dot} />
                    <View className={styles.sk_chase_dot} />
                    <View className={styles.sk_chase_dot} />
                    <View className={styles.sk_chase_dot} />
                    <View className={styles.sk_chase_dot} />
                </View>

            </View>

        </View>)
    }
}