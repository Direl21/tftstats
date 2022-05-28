import React from 'react';
import Traits from "./Traits";
import { TraitsInfoSwitch } from './Helper/TraitsInfoSwitch';
import { BackgroundIcon } from './Helper/BackgroundIcon';
import consoleTool from '../../../utils/Tools/Console';

//props from Riot API
const TraitsContainer = (traitsMas) => {
    //getting data from array
    let traitsList = traitsMas.traitsMas.map((character, index) => {
        consoleTool(traitsMas.traitsMas)
        //sort data from largest to smallest by order, that is defined in the TraitsInfoSwitch
        traitsMas.traitsMas.sort((a, b) => {
            return a.order - b.order;
        });

        //function to properly distribute missing data (order, icon, count)
        let traitsData = TraitsInfoSwitch( character.name, character.numUnits);
        //function to define the background css class for icon traits
        let background = BackgroundIcon(character.order);

        //add data (from TraitsInfoSwitch and BackgroundIcon) to array (character)
        character.order = traitsData.order;
        character.icon = traitsData.icon;
        character.count_traits_units = traitsData.count;
        character.class_bg = background.class_bg;
        
        return (
            <Traits key={index} name={character} />
        )
    })
    
    return traitsList
};

export default TraitsContainer;