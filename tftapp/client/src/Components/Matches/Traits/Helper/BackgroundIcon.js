//this function takes props(character_order) from the TraitsInfoSwitch.js.
//we pass data to props in a TraitsContainer.js file.
//we receive such data in props - example: 1 (type: number).
//the function compares the value in props with the walue we need.

export const BackgroundIcon = (character_order) => {

    //background icons for traits
    let class_bg = "none"; 
    
    //css class definition by order
    if (character_order === 0) {
        class_bg = "chroma"
    } else if (character_order === 1) {
        class_bg = "gold"
    } else if (character_order === 2) {
        class_bg = "silver"
    } else if (character_order === 3) {
        class_bg = "bronze"
    }

    return {class_bg: class_bg};
}