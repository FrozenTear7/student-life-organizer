import React from 'react'
import ShoppingContainer from '../containers/ShoppingContainer'

let ShoppingList = ({ shopping }) => (
    <ul>
        { shopping.map(shoppingItem =>
            <ShoppingContainer key={shoppingItem.id} shoppingItem={shoppingItem} />
        )}
    </ul>
)

export default ShoppingList