import React from 'react'
import FridgeContainer from '../containers/FridgeContainer'

let FridgeList = ({ handleSubmit, dispatch, onFridgeItemSubmit, fridge, onFridgeItemEdit, onFridgeItemDelete }) => (
    <ul>
        { fridge.map(fridgeItem =>
            <FridgeContainer fridgeItem={fridgeItem} />
        )}
    </ul>
)

export default FridgeList