import React from 'react';
import styleName from './Traits.module.css';

const Traits = (data) => {
    console.log(data);
    
    let class_bg = data.name.class_bg; //background icons for traits
    let count_traits_units = data.name.count_traits_units; //num_units of traits from API
    let icon = data.name.icon; //traits icon
    let name = data.name.name; //traits name from API
    let trait_tooltip = count_traits_units + " " + name.split('_').pop(); //num_units of traits and remove from string Set6_

    console.log();
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