// 引入count的UI组件
import CountUI from '../../components/Count'
// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

//穿件并暴露一个Count组件
export default connect(
    state => ({ count: state }),

    // mapDispatchToProps的一般写法
    // dispatch => (
    //     {
    //         // 通知redux执行加法
    //         jia: value => dispatch(createIncrementAction(value)),
    //         jian: value => dispatch(createDecrementAction(value)),
    //         jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
    //     }
    // )

    // mapDispatchToProps的精简写法
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(CountUI)

