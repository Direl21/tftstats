import React from 'react';
import consoleTool from '../../../utils/Tools/Console';
import styleName from './Traits.module.css';

//This component renders information about the traits
//Receives data from Riot API (data) 
const Traits = (data) => {
    
    //background icons for traits
    let class_bg = data.name.class_bg; 
    //num_units of traits from API
    let count_traits_units = data.name.count_traits_units; 
    //traits icon
    let icon = data.name.icon; 
    //traits name from API
    let name = data.name.name; 
    //num_units of traits and remove from string Set6_
    let trait_tooltip = count_traits_units + " " + name.split('_').pop(); 

    return (
        <span> 
                {count_traits_units > 0 && 
                    <span className={styleName.traitsBox}>
                        <span className={styleName.traitsCount}>{count_traits_units}</span>
                        <span data-tip={`${trait_tooltip}`} data-for='tooltiptraits' className={`${styleName.traitsIcon} ${styleName[class_bg]}`}>
                            <img alt='' src={icon.default}/></span>
                    </span>
                }
        </span>
    )

};

export default Traits;