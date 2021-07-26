import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, CoverView, CoverImage } from '@tarojs/components'
import styles from './index.module.scss'
import systemUtils from '@/utils/systemUtils'
import { observer } from 'mobx-react'
import indexStore from '@/pages/index/store/indexStore'


@observer
export default class Index extends Component {

    state = {
        // selected: 0,
        // color: 'black',
        // selectedColor: 'blue',
        // list: [
        //     {
        //         pagePath: 'pages/index/index',
        //         iconPath: '../assets/imgs/Home_icon_home_default@2x.png',
        //         selectedIconPath: '../assets/imgs/Home_icon_home_pressed@2x.png',
        //         text: '首页'
        //     },
        //     {
        //         pagePath: 'pages/center/index',
        //         iconPath: '../assets/imgs/Home_icon_shangchen_default@2x.png',
        //         selectedIconPath: '../assets/imgs/Home_icon_shangchen_pressed@2x.png',
        //         text: '分类'
        //     },
        //     {
        //         pagePath: 'pages/personal/index',
        //         iconPath: '../assets/imgs/Home_icon_my_default@2x.png',
        //         selectedIconPath: '../assets/imgs/Home_icon_my_pressed@2x.png',
        //         text: '我的'
        //     }
        // ]
    }


    switchTab(item, index) {
        const url = '/' + item.pagePath;
        if (indexStore.tabSelectPosition != index) {
            console.log('==switchTab==index===' + index)
            console.log(item)
            Taro.switchTab({
                url: url
            })
        }
    }

    render() {

        // const { selected, selectedColor, color, list, } = this.state;
        const { tabSelectPosition, selectedColor, color, list, msgNum } = indexStore;
        const bottom = systemUtils.safeAreaBottom();//底部安全距离
        console.log('==tabbar===tabSelectPosition====' + tabSelectPosition)
        return (
            <CoverView className={styles.bottom_tab} style={{ height: (50 + bottom) + 'PX' }} >
                {
                    list.map((item, index) => {
                        if (index == 2) {
                            return <CoverView className={styles.item}
                                onClick={() => this.switchTab(item, index)} data-path={item.pagePath} key={item.text}>
                                <CoverView className={styles.pView} >
                                    <CoverImage className={styles.img} src={tabSelectPosition === index ? item.selectedIconPath : item.iconPath} />
                                    <CoverView className={styles.text} style={{ color: tabSelectPosition === index ? selectedColor : color }}>
                                        {item.text}
                                    </CoverView>
                                    <CoverView className={styles.pTxt} >{msgNum}</CoverView>
                                </CoverView>
                            </CoverView>
                        } else {
                            return <CoverView className={styles.item} style={{ marginTop: 5 + 'px', }} onClick={() => this.switchTab(item, index)}
                                data-path={item.pagePath} key={item.text}>
                                <CoverImage className={styles.img} src={tabSelectPosition === index ? item.selectedIconPath : item.iconPath} />
                                <CoverView className={styles.text} style={{ color: tabSelectPosition === index ? selectedColor : color }}>
                                    {item.text}
                                </CoverView>
                            </CoverView>
                        }

                    })
                }
            </CoverView>
        )
    }
}
