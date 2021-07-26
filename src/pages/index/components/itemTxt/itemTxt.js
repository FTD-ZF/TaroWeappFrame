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
};
export default React.memo(ItemTxt)