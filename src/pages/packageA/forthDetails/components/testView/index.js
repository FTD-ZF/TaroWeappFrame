import React, { useRef } from 'react'
import {
    View, Text,
} from '@tarojs/components'
import styles from './index.module.scss'
import TabView from '../tabView';

const TestView = (props) => {

    const { } = props;

    const adRef = useRef();

    const onClick = () => {
        console.log(adRef)
        adRef.current.toSetPosition(1)
    }

    return (
        <View>
            <TabView ref={adRef} getTabPosition={(index) => { console.log('======' + index) }} />
            <View className={styles.btn} onClick={onClick} >
                <Text>点击切换到右边tab</Text>
            </View>
        </View>

    )
};
export default React.memo(TestView) 