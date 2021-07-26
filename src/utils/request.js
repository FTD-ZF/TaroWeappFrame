import Taro, { Events } from '@tarojs/taro'


/**
 * @param {*请求地址} url 
 * @param {参数} data 
 * @param {请求头} header 
 * @param {} method 默认post
 * @param { 设置为json ，会默认进行一次JSON.parse 操作} dataType 
 * 当返回的 statusCode != 200  || errno != 0 时 通过reject 返回
 * 只有网络请求正常返回，且 errno == 0 通过resolve 返回
 */

export const request = (url = '', data = {}, method = 'POST',) => {
    if (url == null || url == '' || typeof url != 'string') {
        console.log('请求地址错误')
        return
    }

    return new Promise((resolve, reject) => {
        Taro.request({
            url,
            data,
            header: { 'Content-Type': 'application/json' },
            method,
            dataType: 'json'
        }).then(res => {
            console.log('====request=========')
            console.log(res)
            if (res.statusCode == '200') {
                resolve(res.data)
            } else {
                reject({ errno: 903, errmsg: '网络请求错误:' + res.statusCode, data: res })
            }
        }).catch(err => {
            console.log('====request===err======')
            console.log(err)
            reject({ errno: 902, errmsg: '网络请求错误', data: err })
        })
    })
}

/**
 * 上传图片 网络请求
 */
export const uploadFile = (url, tempFilePath, needLoading = true) => {
    if (needLoading) {
        Taro.showLoading({
            title: '上传中...'
        })
    }
    return Taro.uploadFile({
        url: url,
        filePath: tempFilePath,
        name: 'file',
        dataType: 'json',
        header: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(res => {
        console.log(res);
        if (res.statusCode != 200) {
            return Promise.reject('网络错误')
        }
        if (res.data) {
            return JSON.parse(res.data)
        } else {
            return Promise.reject('数据错误')
        }
    }).then(res => {
        Taro.hideLoading();
        if (res.code == 0 && res.url) {
            return Promise.resolve(res)
        }
        if (res.errno != 0) {
            return Promise.reject(res)
        }
        return res.data
    }).catch(err => {
        console.log(tempFilePath);
        Taro.hideLoading();
        if (err && err.errMsg && err.errMsg.indexOf('chooseImage') > -1) {
        } else {
            console.log(err)
        }
        return Promise.reject()
    })
}

// 上传图片
export const uploadImage = (url, count = 1,) => {
    let tempFilePath = ''
    return Taro.chooseImage({
        count: count,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    }).then(res => {
        tempFilePath = res.tempFilePaths[0]
        return uploadFile(url, tempFilePath)
    })
}

/**
 * post 请求
 * @param {} url 
 * @param {*} data 
 */
export const requestPost = (url, data) => {
    return request(url, data)
}

/**
 * get请求
 * @param {} url 
 * @param {*} data 
 */
export const requestGet = (url, data) => {
    return request(url, data, 'GET')
}