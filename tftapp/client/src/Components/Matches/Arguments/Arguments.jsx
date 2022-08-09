import React from 'react';
import consoleTool from '../../../utils/Tools/Console';
import styleName from './Arguments.module.css';
import { ArgumentsInfoSwitch } from './Helper/ArgumentsInfoSwitch';

//This component renders information about the arguments
//Receives data from Riot API (argument) 
const Arguments = (props) => {

    //getting data from array
    let argumentsList = props.argument[0].map((name, index) => {
        //consoleTool(['argument', argument.argument], 1);
        //this function that returns data(tooltip, description) using a switch
        let tooltipData = ArgumentsInfoSwitch(name);
        
        //definition of the first css class for displaying the tooltip(argument name)
        let argument_tooltip = `<span class="${styleName.tooltipName}">`+ tooltipData.argumentName + `</span>`;
        //definition a second css class for displaying the description(argument description)
        argument_tooltip += `<span key=${index} class="${styleName.tooltipDescription}" >${tooltipData.argumentDescription}</span>`
        
        return (
            <span key={index} data-tip={`${argument_tooltip}`} data-for='tooltipargumentname' className={styleName.argumentIcon} >
                
                <img alt='' 
                    src={process.env.REACT_APP_DATA_PATH + `arguments/${name}.png`}
                    onError={({ currentTarget }) => {
                        console.log('ARGUMENT IM HEREEEEE')
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src=require(`../../../assets/penguin.png`);

                        props.sendErrorsOnServer(props.searchName, props.serverName, 'argumentIcon', name)
                    }}
                />
            </span>
        )
    })
    return argumentsList;
};

export default Arguments