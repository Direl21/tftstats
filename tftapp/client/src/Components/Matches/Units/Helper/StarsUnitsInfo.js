import consoleTool from "../../../../utils/Tools/Console";
import styleName from '../Units.module.css';

//this function takes props(champion_tier, champion_rarity) from the Riot API.
//we pass data to props in a Units.jsx file.
//we receive such data in props - example: champion_tier: 2(type: number); champion_rarity: 0(type: number).
//the function compares the value with the value we need.

export const StarsUnitsInfo = (champion_tier, champion_rarity) => {
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
        if (champion_tier === 2 && champion_rarity === 0){
            stars = <span className={styleName.starGrey}>
                        {starsTwo}
                    </span>
        }else if (champion_tier === 2 && champion_rarity === 1){
            stars = <span className={styleName.starGreen}>
                        {starsTwo}
                    </span>
        }else if (champion_tier === 2 && champion_rarity === 2){
            stars = <span className={styleName.starBlue}>
                        {starsTwo}
                    </span>
        }else if (champion_tier === 2 && champion_rarity === 3){
            stars = <span className={styleName.starPink}>
                        {starsTwo}
                    </span>
        }else if (champion_tier === 2 && champion_rarity === 4){
            stars = <span className={styleName.starGold}>
                        {starsTwo}
                    </span>
        }else if (champion_tier === 3 && champion_rarity === 0){
            stars = <span className={styleName.starGrey}>
                        {starsThree}
                    </span>
        }else if (champion_tier === 3 && champion_rarity === 1){
            stars = <span className={styleName.starGreen}>
                        {starsThree}
                    </span>
        }else if (champion_tier === 3 && champion_rarity === 2){
            stars = <span className={styleName.starBlue}>
                        {starsThree}
                    </span>
        }else if (champion_tier === 3 && champion_rarity === 3){
            stars = <span className={styleName.starPink}>
                        {starsThree}
                    </span>
        }else if (champion_tier === 3 && champion_rarity === 4){
            stars = <span className={styleName.starGold}>
                        {starsThree}
                    </span>
        }

        return {stars: stars}
}