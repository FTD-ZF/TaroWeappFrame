import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView, } from '@tarojs/components'

import styles from './topBar.module.scss'

import systemUtils from '../../utils/systemUtils'
import { ImageKeys } from '../../assets'

// 导航栏 
export default class TopBar extends Component {


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

        const { hasBackIcon = true, title = '', bgColor = 'orange',
            onBack, } = this.props;

        const safeArea = systemUtils.getSystemInfo();
        const statusBarHeight = safeArea.statusBarHeight;//顶部状态栏高度
        const titleBarHeight = 44;//标题栏高度

        return <View className={styles.navigationView}
            style={{
                paddingTop: statusBarHeight + 'px',
                height: titleBarHeight + 'px', backgroundColor: bgColor
            }}>
            <View className={styles.navigation}>
                <View className={styles.navItem}>
                    {
                        hasBackIcon ? <Image onClick={onBack ? onBack : () => this.onNaviBack()}
                            className={styles.backIcon} src={ImageKeys.backIcon} /> : <View />
                    }
                </View>
                <View className={styles.title}>{title}</View>
                <View className={styles.navItem}></View>
            </View>
        </View>
    }
}