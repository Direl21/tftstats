import consoleTool from '../../../../utils/Tools/Console';

//this function takes props(character_name, num_units) from the Riot API.
//we pass data to props in a TraitsContainer.js file.
//we receive such data in props - example: character_name - 'Set6_Scrap'(type: string), num_units - 3(type: number).
//the function compares the value in props(on switch) with the walue we need(on case).

export const TraitsInfoSwitch = (character_name, num_units) => {
    //assigning values to sort (in TraitsContainer.jsx file) according to the importance of the output
    let order = null;
    //traits icons
    let icon = ''; 
    //num_units from API 
    let count_traits_units = 0; 
        
        switch (character_name) {
            case 'Set6_Arcanist':
                icon = require("../../../../assets/traits/Arcanist.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 8) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Assassin':
                icon = require("../../../../assets/traits/Assassin.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Bodyguard':
                icon = require("../../../../assets/traits/Bodyguard.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 8) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Bruiser':
                icon = require("../../../../assets/traits/Bruiser.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 8) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Clockwork':
                icon = require("../../../../assets/traits/Clockwork.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Colossus':
                icon = require("../../../../assets/traits/Colossus.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 2) {
                    order = 1;
                }
                break;
            case 'Set6_Debonair':
                icon = require("../../../../assets/traits/Debonair.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 7) {
                    order = 0;
                } else if (num_units >= 5) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Enforcer':
                icon = require("../../../../assets/traits/Enforcer.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 3) {
                    order = 1;
                }
                break;
            case 'Set6_Enchanter':
                icon = require("../../../../assets/traits/Enchanter.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 5) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Glutton':
                icon = require("../../../../assets/traits/Glutton.svg");
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Hextech':
                icon = require("../../../../assets/traits/Hextech.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 8) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Challenger':
                icon = require("../../../../assets/traits/Challenger.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 8) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Chemtech':
                icon = require("../../../../assets/traits/Chemtech.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 9) {
                    order = 0;
                } else if (num_units >= 7) {
                    order = 1;
                } else if (num_units >= 5) {
                    order = 2;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Innovator':
                icon = require("../../../../assets/traits/Innovator.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 7) {
                    order = 0;
                } else if (num_units >= 5) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Mastermind':
                icon = require("../../../../assets/traits/Mastermind.svg");
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Mercenary':
                icon = require("../../../../assets/traits/Mercenary.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 7) {
                    order = 0;
                } else if (num_units >= 5) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Mutant':
                icon = require("../../../../assets/traits/Mutant.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 7) {
                    order = 0;
                } else if (num_units >= 5) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Rivals':
                icon = require("../../../../assets/traits/Rival.svg");
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Scrap':
                icon = require("../../../../assets/traits/Scrap.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Scholar':
                icon = require("../../../../assets/traits/Scholar.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Sniper':
                icon = require("../../../../assets/traits/Sniper.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Socialite':
                icon = require("../../../../assets/traits/Socialite.svg");
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 5) {
                    order = 0;
                } else if (num_units >= 3) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 2;
                } else if (num_units >= 1) {
                    order = 3;
                }
                break;
            case 'Set6_Striker':
                icon = require("../../../../assets/traits/Striker.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Syndicate':
                icon = require("../../../../assets/traits/Syndicate.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 7) {
                    order = 0;
                } else if (num_units >= 5) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_Transformer':
                icon = require("../../../../assets/traits/Transformer.svg");
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Twinshot':
                icon = require("../../../../assets/traits/Twinshot.svg");
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 5) {
                    order = 0;
                } else if (num_units >= 4) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                }
                break;
            case 'Set6_Yordle':
                icon = require("../../../../assets/traits/Yordle.svg");
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set6_YordleLord':
                icon = require("../../../../assets/traits/Yordlelord.svg");
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 0;
                }
                break;
            default:
                consoleTool("error")
                break
        }

        return {order: order, icon: icon, count: count_traits_units};
}