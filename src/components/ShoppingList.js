import React from 'react'
import ShoppingContainer from '../containers/ShoppingContainer'

let ShoppingList = ({ totalCost, shopping, onTotalCostSubtract }) => (
    <ul>
        { shopping.map(shoppingItem =>
            <ShoppingContainer key={shoppingItem.id} shoppingItem={shoppingItem} />
        )}
        <br/>
        Total cost: {totalCost}
        <br/>
        <button
            onClick={() => onTotalCostSubtract(totalCost)}
            className='btn btn-success btn-sm'
        >
            Subtract total cost from your funds
        </button>
    </ul>
)

export default ShoppingList