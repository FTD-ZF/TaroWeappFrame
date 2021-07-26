export default {
  pages: [
    'pages/index/index',
    'pages/center/index',
    'pages/personal/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
  'subpackages': [
    {
      'root': 'pages/packageA',
      'pages': [
        'firstDetails/index',
        'secondDetails/index',
        'thirdDetails/index'
      ]
    }
  ],
  'tabBar': {
    'custom': true,
    'backgroundColor': '#fafafa',
    'borderStyle': 'white',
    'selectedColor': '#1959A4',
    'color': '#1959A4',
    'list': [
      {
        'pagePath': 'pages/index/index',
        'iconPath': 'assets/imgs/Home_icon_home_default@2x.png',
        'selectedIconPath': 'assets/imgs/Home_icon_home_pressed@2x.png',
        'text': '首页'
      },
      {
        'pagePath': 'pages/center/index',
        'iconPath': 'assets/imgs/Home_icon_shangchen_default@2x.png',
        'selectedIconPath': 'assets/imgs/Home_icon_shangchen_pressed@2x.png',
        'text': '分类'
      },
      {
        'pagePath': 'pages/personal/index',
        'iconPath': 'assets/imgs/Home_icon_my_default@2x.png',
        'selectedIconPath': 'assets/imgs/Home_icon_my_pressed@2x.png',
        'text': '我的'
      }
    ]
  },
}
