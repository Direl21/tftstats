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
            //SET6
            case 'Set6_Arcanist':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Arcanist.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Assassin.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Bodyguard.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Bruiser.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Clockwork.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Colossus.svg`;
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 2) {
                    order = 1;
                }
                break;
            case 'Set6_Debonair':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Debonair.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Enforcer.svg`;
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 3) {
                    order = 1;
                }
                break;
            case 'Set6_Enchanter':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Enchanter.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Glutton.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Hextech':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Hextech.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Challenger.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Chemtech.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Innovator.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Mastermind.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Mercenary':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Mercenary.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Mutant.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Rival.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Scrap':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Scrap.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Scholar.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Sniper.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Socialite.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Striker.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Syndicate.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Transformer.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set6_Twinshot':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Twinshot.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Yordle.svg`;
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
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set6_Yordlelord.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 0;
                }
                break;
            //SET7
            case 'Set7_Assassin':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Assassin.svg`;
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
            case 'Set7_Astral':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Astral.svg`;
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 9) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set7_Bard':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Bard.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 0;
                }
                break;
            case 'Set7_Bruiser':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Bruiser.svg`;
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
            case 'Set7_Cannoneer':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Cannoneer.svg`;
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
            case 'Set7_Cavalier':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Cavalier.svg`;
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
            case 'Set7_Dragonmancer':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Dragonmancer.svg`;
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 9) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set7_Dragons':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Dragons.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 2) {
                    order = 0;
                } else if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set7_Evoker':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Evoker.svg`;
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
            case 'Set7_Guardian':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Guardian.svg`;
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
            case 'Set7_Guild':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Guild.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 6) {
                    order = 0;
                } else if (num_units >= 5) {
                    order = 1;
                } else if (num_units >= 4) {
                    order = 2;
                } else if (num_units >= 3) {
                    order = 2;
                } else if (num_units >= 2) {
                    order = 3;
                } else if (num_units >= 1) {
                    order = 3;
                }
                break;
            case 'Set7_Jade':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Jade.svg`;
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 12) {
                    order = 0;
                } else if (num_units >= 9) {
                    order = 1;
                } else if (num_units >= 6) {
                    order = 2;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set7_Legend':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Legend.svg`;
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 3) {
                    order = 1;
                }
                break;
            case 'Set7_Mage':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Mage.svg`;
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
            case 'Set7_Mirage':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Mirage.svg`;
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
            case 'Set7_Mystic':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Mystic.svg`;
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
            case 'Set7_Ragewing':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Ragewing.svg`;
                if (num_units > 2) {
                    count_traits_units = num_units
                }
                if (num_units >= 9) {
                    order = 0;
                } else if (num_units >= 6) {
                    order = 1;
                } else if (num_units >= 3) {
                    order = 3;
                }
                break;
            case 'Set7_Revel':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Revel.svg`;
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
            case 'Set7_Scalescorn':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Scalescorn.svg`;
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
            case 'Set7_Shapeshifter':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Shapeshifter.svg`;
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
            case 'Set7_Shimmerscale':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Shimmerscale.svg`;
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
            case 'Set7_Spellthief':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Spellthief.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                }
                break;
            case 'Set7_Starcaller':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Starcaller.svg`;
                if (num_units > 0) {
                    count_traits_units = num_units
                }
                if (num_units >= 1) {
                    order = 1;
                } 
                break;
            case 'Set7_Swiftshot':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Swiftshot.svg`;
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
            case 'Set7_Tempest':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Tempest.svg`;
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
            case 'Set7_Trainer':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Trainer.svg`;
                if (num_units > 1) {
                    count_traits_units = num_units
                }
                if (num_units >= 3) {
                    order = 1;
                } else if (num_units >= 2) {
                    order = 3;
                } 
                break;
            case 'Set7_Warrior':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Warrior.svg`;
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
            case 'Set7_Whispers':
                icon = process.env.REACT_APP_DATA_PATH + `/traits/Set7_Whispers.svg`;
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
            default:
                consoleTool("error")
                break
        }

        return {order: order, icon: icon, count: count_traits_units};
}