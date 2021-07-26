import React from 'react'
import {
    View,
} from '@tarojs/components'
import styles from './itemTxt.module.scss'

function ItemTxt(props) {
    console.log('I am rendering ItemTxt');
    const { title, style } = props;
    return (
        <View className={styles.item} style={style}  >
            {title}
        </View>
    )
}

function areEqual(prevProps, nextProps) {
    /*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false
    */
    return true
}
export default React.memo(ItemTxt)