// 引入count的UI组件
import CountUI from '../../components/Count'
// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'

import { createIncrementAction , createDecrementAction , createIncrementAsyncAction} from '../../redux/count_action'
// mapStateToProps函数的返回值作为状态传递给了UI组件
function mapStateToProps(state) {
    return {
        count: state
    }
}
// mapDispatchToProps函数的返回值作为操作状态的方法传递给了UI组件
function mapDispatchToProps(dispatch) {
    return {
        // 通知redux执行加法
        jia: value => dispatch(createIncrementAction(value)),
        jian: value => dispatch(createDecrementAction(value)),
        jiaAsync: (value,time) => dispatch(createIncrementAsyncAction(value,time))
    }
}
//穿件并暴露一个Count组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

