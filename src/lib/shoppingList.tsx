import react from 'react'

class ShoppingList extends react.Component<any,any>{
    render(){
        return  (
            <div className='shoppingList'>
                <h1>购物车的名字叫做{this.props.name}</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
export default ShoppingList