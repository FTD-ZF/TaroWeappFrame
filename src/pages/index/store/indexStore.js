import { observable, action, } from "mobx";

import Taro from '@tarojs/taro';
import { requestGet } from "@/utils/request";
import { RequestUrl } from "@/utils/urlUtils";



class IndexStore {

    @observable tabSelectPosition = 0;

    @observable isLoading = false;

    @observable tokenInfo = '';

    @observable testNum = 0;

    @observable isLoadingA = false;

    @observable color = 'black';
    @observable selectedColor = 'blue';
    @observable list = [
        {
            pagePath: 'pages/index/index',
            iconPath: '../assets/imgs/Home_icon_home_default@2x.png',
            selectedIconPath: '../assets/imgs/Home_icon_home_pressed@2x.png',
            text: '首页'
        },
        {
            pagePath: 'pages/center/index',
            iconPath: '../assets/imgs/Home_icon_shangchen_default@2x.png',
            selectedIconPath: '../assets/imgs/Home_icon_shangchen_pressed@2x.png',
            text: '分类'
        },
        {
            pagePath: 'pages/personal/index',
            iconPath: '../assets/imgs/Home_icon_my_default@2x.png',
            selectedIconPath: '../assets/imgs/Home_icon_my_pressed@2x.png',
            text: '我的'
        }
    ];

    @observable msgNum = '99+';




    //免密登陆--获取用户信息
    @action
    getTokenInfo = async () => {

        // Taro.showLoading({ title: '加载中...', mask: true });
        this.isLoading = true;
        try {
            let params = {

            };

            const resultData = await requestGet(RequestUrl.getAUrl, params)
            console.log('==getTokenInfo===')
            console.log(resultData)

            if (resultData.code == 0) {
                this.tokenInfo = resultData.result
            }
            // Taro.hideLoading();
            this.isLoading = false;
        } catch (error) {
            console.log('==getTokenInfo==error=')
            console.log(error)
            this.isLoading = false;
            // Taro.hideLoading();
            // tools.showToast(error, false)
        }
    }





}
const indexStore = new IndexStore();
export default indexStore;
