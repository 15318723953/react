import react from 'react'

class Square extends react.Component<any>{
    rander(){
        return (
            <div>{this.props.value}</div>
        )
    }
}
export default Square