import React from 'react'
import FridgeContainer from '../containers/FridgeContainer'

let FridgeList = ({ fridge }) => (
    <ul>
        { fridge.map(fridgeItem =>
            <FridgeContainer key={fridgeItem.id} fridgeItem={fridgeItem} />
        )}
    </ul>
)

export default FridgeList