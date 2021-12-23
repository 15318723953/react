// 引入count的UI组件
import CountUI from '../../components/Count'
// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

//穿件并暴露一个Count组件
export default connect(
    state => ({ count: state }),
    // mapDispatchToProps的精简写法
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(CountUI)

