import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'
import 'taro-skeleton/dist/index.css' // 引入组件样式

const store = {
  counterStore
}

class App extends Component {
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
