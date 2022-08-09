import React from 'react';
import consoleTool from '../../../utils/Tools/Console';
import { StarsUnitsInfo } from './Helper/StarsUnitsInfo';
import { WhichBorderColor } from './Helper/WhichBorderColor';
import Items from './Items/Items';
import styleName from './Units.module.css';

//This component renders information about the units(champions and items)
//Receives data from Riot API (units) 
const Units = (props) => {
    //getting data from array
    let unitsList = props.units.map((champion, index) => {
        consoleTool(['units',props.units], 1);
        //champions names from API
        let champions_names = champion.characterId; 

        //definition of the first css class for displaying the tooltip(champions name) and remove from string Set6_
        let champion_name_tooltip = `<span class="${styleName.tooltipName}">`+champions_names.split('_').pop() + `</span>`; 
        //definition a second css class for displaying the champions icon
        champion.items.map((item, index) => {
            let icon = process.env.REACT_APP_DATA_PATH + `/items/${item}.png`;
            champion_name_tooltip += `<span key=${index} class="${styleName.tooltipItemIcon}" >
                <img alt='' src=${icon} />
            </span>`
        });
        
        //this function determines the name of the css class so that the correct border color is displayed
        let borderColor = WhichBorderColor(champion.rarity);
        //this function decides how many stars should be displayed
        let starsUnits = StarsUnitsInfo(champion.tier, champion.rarity)

        

        return (
            <span className={styleName.champBox} key={index}>
                {starsUnits.stars}
                <span data-tip={`${champion_name_tooltip}`} data-for='tooltipchampname' className={styleName.champIcon +' '+ styleName[borderColor.border_color]}>
                    <img alt='' 
                        src={process.env.REACT_APP_DATA_PATH + `champions/champ-icon/${champions_names}.png`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=require(`../../../assets/penguin.png`);

                            props.sendErrorsOnServer(props.searchName, props.serverName, 'championsIcon', champions_names)
                        }}
                    />
                </span>
                <span className={styleName.itemBox}>
                    <Items itemNum={champion.items} sendErrorsOnServer={props.sendErrorsOnServer}
                            searchName={props.searchName} serverName={props.serverName}/>
                </span>
            </span>
        )
    
    })
    return unitsList
}

export default Units;