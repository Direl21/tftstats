import React from 'react';
import consoleTool from '../../../Common/Tools/Console';
import Items from './Items/Items';
import styleName from './Units.module.css';

const Units = (units) => {
    let unitsList = units.units.map((champion, index) => {
        consoleTool(['units',units.units], 1);
        let champions_names = champion.character_id; //champions names from API
        let champion_name_tooltip = `<span class="${styleName.tooltipName}">`+champions_names.split('_').pop() + `</span>`; //remove from string Set6_
        //doble class and item icon for tooltip
        champion.items.map((item, index) => {
            champion_name_tooltip += `<span key=${index} class="${styleName.tooltipItemIcon}" >
                <img alt='' src="/assets/items/${item}.png" />
            </span>`
        });
        
        //border color according to price in the game
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

        let stars = <span><ion-icon ></ion-icon></span>;
        let starsTwo = <span>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </span>
        let starsThree = <span>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </span>
        if (champion.tier === 2 && champion.rarity === 0){
            stars = <span className={styleName.starGrey}>
                        {starsTwo}
                    </span>
        }else if (champion.tier === 2 && champion.rarity === 1){
            stars = <span className={styleName.starGreen}>
                        {starsTwo}
                    </span>
        }else if (champion.tier === 2 && champion.rarity === 2){
            stars = <span className={styleName.starBlue}>
                        {starsTwo}
                    </span>
        }else if (champion.tier === 2 && champion.rarity === 3){
            stars = <span className={styleName.starPink}>
                        {starsTwo}
                    </span>
        }else if (champion.tier === 2 && champion.rarity === 4){
            stars = <span className={styleName.starGold}>
                        {starsTwo}
                    </span>
        }else if (champion.tier === 3 && champion.rarity === 0){
            stars = <span className={styleName.starGrey}>
                        {starsThree}
                    </span>
        }else if (champion.tier === 3 && champion.rarity === 1){
            stars = <span className={styleName.starGreen}>
                        {starsThree}
                    </span>
        }else if (champion.tier === 3 && champion.rarity === 2){
            stars = <span className={styleName.starBlue}>
                        {starsThree}
                    </span>
        }else if (champion.tier === 3 && champion.rarity === 3){
            stars = <span className={styleName.starPink}>
                        {starsThree}
                    </span>
        }else if (champion.tier === 3 && champion.rarity === 4){
            stars = <span className={styleName.starGold}>
                        {starsThree}
                    </span>
        }

        return (
            <span className={styleName.champBox} key={index}>
                {stars}
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