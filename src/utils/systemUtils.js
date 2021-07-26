import Taro from '@tarojs/taro'

class SystemUtils {
    /**
     *  left right top bottom width height
     * @returns 
     */
    getSystemInfo() {
        const systemInfo = Taro.getSystemInfoSync();
        const statusBarHeight = systemInfo.statusBarHeight;
        const info = systemInfo.safeArea;

        return {
            statusBarHeight: statusBarHeight,
            left: 0,
            right: info.right,
            top: info.top,
            bottom: info.bottom,
            width: info.width,
            height: systemInfo.screenHeight - statusBarHeight,
            screenHeight: systemInfo.screenHeight,//手机屏幕高度
        }
    }

    // safeArea 底部的高度
    safeAreaBottom() {
        const systemInfo = Taro.getSystemInfoSync();

        const info = systemInfo.safeArea;
        return systemInfo.screenHeight - info.bottom
    }

    /**
     * 
     * @returns 获取当前tab高度
     */
    tabbarHeight() {
        const info = Taro.getSystemInfoSync();

        // return info.screenHeight - info.windowHeight
        return 50
    }

    /**
     * 
     * @returns 获取当前手机系统名字
     */
    getPhoneSys() {
        const systemInfo = Taro.getSystemInfoSync();
        let phoneSys = systemInfo.model.indexOf('iPhone') != -1 ? 'ios' : 'android'
        return phoneSys
    }

}
export default new SystemUtils()