import React from 'react';
import consoleTool from '../../../../utils/Tools/Console';
import { ItemNameSwitch } from './Helper/itemNameSwitch';
import styleName from './Items.module.css';

const Items = (props) => {
    //champions names from API
    let itemList = props.itemNum.map((item, index) => {
        //this function determines the name of the item(item_name)
        let itemName = ItemNameSwitch(item);
        //use itemName to create toolrip for the name of the item
        return(
            <span key={index} className={styleName.itemIcon} >
                <img alt='' data-tip={`${itemName.item_name}`} data-for='tooltipitemname'
                    src={process.env.REACT_APP_DATA_PATH + `/items/${item}.png`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src=require(`../../../../assets/penguin.png`);
                    
                    props.sendErrorsOnServer(props.searchName, props.serverName, 'itemIcon', item)
                    }}
                />
            </span>
        )
    })
    return itemList
};

export default Items;