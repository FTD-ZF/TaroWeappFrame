import React from 'react'
import {
    View,
} from '@tarojs/components'
import styles from './itemTxtA.module.scss'

function ItemTxtA(props) {
    console.log('I am rendering ItemTxtA');
    const { title, style } = props;
    return (
        <View className={styles.item} style={style}  >
            {title}
        </View>
    )
};
export default ItemTxtA