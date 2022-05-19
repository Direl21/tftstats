import consoleTool from "../../../../utils/Tools/Console";

//this function takes props(champion_rarity) from the Riot API.
//we pass data to props in a Units.jsx file.
//we receive such data in props - example: 0(type: number).
//the function compares the value with the value we need.
//border_color - type: string

export const WhichBorderColor = (champion_rarity) => {

    let border_color = "";
    
    if (champion_rarity === 0) {
        border_color = "grey"
    } else if (champion_rarity === 1) {
        border_color = "green"
    } else if (champion_rarity === 2) {
        border_color = "blue"
    } else if (champion_rarity === 3) {
        border_color = "pink"
    } else if (champion_rarity === 4) {
        border_color = "gold"
    }

    return {border_color: border_color}
}