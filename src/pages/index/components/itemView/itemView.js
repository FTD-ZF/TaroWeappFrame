import React from 'react'
import {
    View,
} from '@tarojs/components'
import styles from './itemView.module.scss'
import { NoDoublePress } from '@/utils/NoDoublePress';

function ItemView(props) {

    const { title, onClick, style } = props;
    console.log('I am rendering===' + title);
    return (
        <View className={styles.item} style={style} onClick={() => NoDoublePress.onPress(onClick)} >
            {title}
        </View>
    )
};
export default React.memo(ItemView)