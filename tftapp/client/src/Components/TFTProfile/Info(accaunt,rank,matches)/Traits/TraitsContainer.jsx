import React from 'react';
import consoleTool from '../../../Common/Tools/Console';
import Traits from "./Traits";

const TraitsContainer = (traitsMas) => {
    consoleTool(('traitsMas', traitsMas));
    let traitsList = traitsMas.traitsMas.map((character, index) => {
        //consoleTool(("character", character));
        //consoleTool(("traitsMas.traitsMas", traitsMas.traitsMas));

        traitsMas.traitsMas.sort((a, b) => {
            return a.order - b.order;
        });

        let order = null; //assigning values to sort according to the importance of the output
        let class_bg = "none"; //background icons for traits
        let icon = ''; //traits icons
        let count_traits_units = 0; //num_units from API 
        
        switch (character.name) {
            case 'Set6_Arcanist':
                icon = require("../../../../Assets/traits/Arcanist.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 8) {
                    order = 0;
                } else if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 4) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Assassin':
                icon = require("../../../../Assets/traits/Assassin.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Bodyguard':
                icon = require("../../../../Assets/traits/Bodyguard.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 8) {
                    order = 0;
                } else if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 4) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Bruiser':
                icon = require("../../../../Assets/traits/Bruiser.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 8) {
                    order = 0;
                } else if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 4) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Clockwork':
                icon = require("../../../../Assets/traits/Clockwork.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Colossus':
                icon = require("../../../../Assets/traits/Colossus.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 2) {
                    order = 1;
                }
                break;
            case 'Set6_Debonair':
                icon = require("../../../../Assets/traits/Debonair.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 7) {
                    order = 0;
                } else if (character.num_units >= 5) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Enforcer':
                icon = require("../../../../Assets/traits/Enforcer.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 3) {
                    order = 1;
                }
                break;
            case 'Set6_Enchanter':
                icon = require("../../../../Assets/traits/Enchanter.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 5) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Glutton':
                icon = require("../../../../Assets/traits/Glutton.svg");
                if (character.num_units > 0) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Hextech':
                icon = require("../../../../Assets/traits/Hextech.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 8) {
                    order = 0;
                } else if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 4) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Challenger':
                icon = require("../../../../Assets/traits/Challenger.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 8) {
                    order = 0;
                } else if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 4) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Chemtech':
                icon = require("../../../../Assets/traits/Chemtech.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 9) {
                    order = 0;
                } else if (character.num_units >= 7) {
                    order = 1;
                } else if (character.num_units >= 5) {
                    order = 2;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Innovator':
                icon = require("../../../../Assets/traits/Innovator.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 7) {
                    order = 0;
                } else if (character.num_units >= 5) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Mastermind':
                icon = require("../../../../Assets/traits/Mastermind.svg");
                if (character.num_units > 0) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Mercenary':
                icon = require("../../../../Assets/traits/Mercenary.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 7) {
                    order = 0;
                } else if (character.num_units >= 5) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Mutant':
                icon = require("../../../../Assets/traits/Mutant.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 7) {
                    order = 0;
                } else if (character.num_units >= 5) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Rivals':
                icon = require("../../../../Assets/traits/Rival.svg");
                if (character.num_units > 0) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Scrap':
                icon = require("../../../../Assets/traits/Scrap.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 4) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Scholar':
                icon = require("../../../../Assets/traits/Scholar.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Sniper':
                icon = require("../../../../Assets/traits/Sniper.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Socialite':
                icon = require("../../../../Assets/traits/Socialite.svg");
                if (character.num_units > 0) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 5) {
                    order = 0;
                } else if (character.num_units >= 3) {
                    order = 1;
                } else if (character.num_units >= 2) {
                    order = 2;
                } else if (character.num_units >= 1) {
                    order = 3;
                }
                break;
            case 'Set6_Striker':
                icon = require("../../../../Assets/traits/Striker.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Syndicate':
                icon = require("../../../../Assets/traits/Syndicate.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 7) {
                    order = 0;
                } else if (character.num_units >= 5) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Transformer':
                icon = require("../../../../Assets/traits/Transformer.svg");
                if (character.num_units > 0) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Twinshot':
                icon = require("../../../../Assets/traits/Twinshot.svg");
                if (character.num_units > 1) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 5) {
                    order = 0;
                } else if (character.num_units >= 4) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 2;
                } else if (character.num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Yordle':
                icon = require("../../../../Assets/traits/Yordle.svg");
                if (character.num_units > 2) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 6) {
                    order = 1;
                } else if (character.num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_YordleLord':
                icon = require("../../../../Assets/traits/Yordlelord.svg");
                if (character.num_units > 0) {
                    count_traits_units = character.num_units
                }
                if (character.num_units >= 1) {
                    order = 0;
                }
                break;
            default:
                consoleTool("error")
                break
        }

        consoleTool(("icon", icon));

        if (order === 0) {
            class_bg = "chroma"
        } else if (order === 1) {
            class_bg = "gold"
        } else if (order === 2) {
            class_bg = "silver"
        } else if (order === 3) {
            class_bg = "bronze"
        }

        character.order = order;
        character.class_bg = class_bg;
        character.icon = icon;
        character.count_traits_units = count_traits_units;

        return (
            <Traits key={index} name={character} />
        )
    })
    return traitsList
};

export default TraitsContainer;