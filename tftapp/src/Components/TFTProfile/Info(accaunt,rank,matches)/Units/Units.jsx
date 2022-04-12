import React from 'react';
import styleName from './Units.module.css';

const Units = (units) => {
    
    let unitsList = units.units.map((champion, index) => {
        console.log(' champion.items', champion.items)
        
        

        let champions_names = champion.character_id; //champions names from API
        let champion_name_tooltip = champions_names.split('_').pop(); //remove from string Set6_
        return (
            <span className={styleName.champBox} key={index}>
                <span data-tip={`${champion_name_tooltip}`} data-for='tooltipchampname' className={styleName.champIcon}>
                    <img alt='' src={`../../../../assets/champions/champ-icon/${champions_names}.png`} />
                </span>
                <span className={styleName.itemBox}>
                    {champion.items.map((item, index) => {
                    console.log('item', item)
                    return(
                        <span key={index} className={styleName.itemIcon} >
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