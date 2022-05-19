import React from 'react';
import consoleTool from '../../../../utils/Tools/Console';
import { ItemNameSwitch } from './Helper/itemNameSwitch';
import styleName from './Items.module.css'

const Items = (data) => {
    //champions names from API
    let itemList = data.itemNum.map((item, index) => {
        //this function determines the name of the item(item_name)
        let itemName = ItemNameSwitch(item);
        //use itemName to create toolrip for the name of the item
        return(
            <span key={index} className={styleName.itemIcon} >
                <img alt='' data-tip={`${itemName.item_name}`} data-for='tooltipitemname' src={require(`../../../../assets/items/${item}.png`)} />
            </span>
        )
    })
    return itemList
};

export default Items;