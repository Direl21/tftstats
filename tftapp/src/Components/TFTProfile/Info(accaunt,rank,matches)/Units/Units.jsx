import React from 'react';
import Items from './Items/Items';
import styleName from './Units.module.css';

const Units = (units) => {
    let unitsList = units.units.map((champion, index) => {
        console.log('units',units.units);
        let champions_names = champion.character_id; //champions names from API
        let champion_name_tooltip = `<span class="${styleName.tooltipName}">`+champions_names.split('_').pop() + `</span>`; //remove from string Set6_
        //doble class and item icon for tooltip
        champion.items.map((item, index) => {
            champion_name_tooltip += `<span key=${index} class="${styleName.tooltipItemIcon}" >
                <img alt='' src="/assets/items/${item}.png" />
            </span>`
        });
    
        let border_color = "";
        if (champion.rarity === 0) {
            border_color = "grey"
        } else if (champion.rarity === 1) {
            border_color = "green"
        } else if (champion.rarity === 2) {
            border_color = "blue"
        } else if (champion.rarity === 3) {
            border_color = "pink"
        } else if (champion.rarity === 4) {
            border_color = "gold"
        }


        return (
            <span className={styleName.champBox} key={index}>
                <span data-tip={`${champion_name_tooltip}`} data-for='tooltipchampname' className={styleName.champIcon +' '+ styleName[border_color]}>
                    <img alt='' src={`../../../../assets/champions/champ-icon/${champions_names}.png`} />
                </span>
                <span className={styleName.itemBox}>
                    <Items itemNum={champion.items} />
                </span>
            </span>
        )
    
    })
    return unitsList
}

export default Units;