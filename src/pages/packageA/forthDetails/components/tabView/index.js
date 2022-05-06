import React, { Component, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { View, Image, Text, Input, } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from "@tarojs/taro";
import styles from './index.module.scss'

const TabView = forwardRef((props, ref) => {

    const { leftTitle = '左边', rightTitle = '右边', getTabPosition, tabIndex = 0, } = props;

    const [position, setPosition] = useState(() => {
        return tabIndex
    })

    const onClick = (index) => {

        setPosition(index)
        getTabPosition(index)

    }

    useImperativeHandle(ref, () => ({
        toSetPosition,
        valueA: 0,

    }))

    //给外部调用
    const toSetPosition = (index = 0) => {
        console.log('=====toSetPosition=====' + index)
        setPosition(index)
    }

    return <View className={styles.main} >
        <View className={styles.tab_v} onClick={() => onClick(0)} >
            <Text className={position == '0' ? styles.txt_active : styles.txt_default} >{leftTitle}</Text>
            <View className={position == '0' ? styles.line_active : styles.line_default} />
        </View>

        <View className={styles.tab_v} onClick={() => onClick(1)}>
            <Text className={position == '1' ? styles.txt_active : styles.txt_default}>{rightTitle}</Text>
            <View className={position == '1' ? styles.line_active : styles.line_default} />
        </View>
    </View>


})
export default React.memo(TabView)