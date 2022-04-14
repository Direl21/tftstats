import React from 'react';
import styleName from './Units.module.css';

const Units = (units) => {
    let unitsList = units.units.map((champion, index) => {
        let champions_names = champion.character_id; //champions names from API
        let champion_name_tooltip = `<span class="${styleName.tooltipName}">`+champions_names.split('_').pop() + `</span>`; //remove from string Set6_

        champion.items.map((item, index) => {
            champion_name_tooltip += `<span key=${index} class="${styleName.tooltipItemIcon}" >
                <img alt='' src="/assets/items/${item}.png" />
            </span>`
            })
        return (
            <span className={styleName.champBox} key={index}>
                <span data-tip={`${champion_name_tooltip}`} data-for='tooltipchampname' className={styleName.champIcon}>
                    <img alt='' src={`../../../../assets/champions/champ-icon/${champions_names}.png`} />
                </span>
                <span className={styleName.itemBox}>

                    {champion.itemNames.map((itemTooltip, index) => {
                        let item_tooltip = itemTooltip.split('_').pop();
                    })}

                    {champion.items.map((item, index) => {
                    console.log('item', item)
                    return(
                        <span key={index} data-for='tooltipitemname' className={styleName.itemIcon} >
                            <img alt='' src={`../../../../assets/items/${item}.png`} />
                        </span>
                    )
                    })}
                    
                </span>
            </span>
        )
    
    })
    return unitsList
}

export default Units;