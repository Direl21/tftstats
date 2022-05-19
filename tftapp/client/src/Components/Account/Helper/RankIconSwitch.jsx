import consoleTool from "../../../utils/Tools/Console";

//this function takes props(p_tier) from the Riot API.
//we pass data to props in a AccountInfo.jsx file.
//we receive such data in props - example: 'PLATINUM'(type: string).
//the function compares the value in props(on switch) with the walue we need(on case).
//icon - type: string
export const RankIconSwitch = (p_tier) => {
    let icon = "";
    switch (p_tier) {
        case "IRON":
            icon = require("../../../assets/ranked-emblems/Emblem_Iron.png");
            break;
        case "BRONZE":
            icon = require("../../../assets/ranked-emblems/Emblem_Bronze.png");
            break;
        case "SILVER":
            icon = require("../../../assets/ranked-emblems/Emblem_Silver.png");
            break;
        case "GOLD":
            icon = require("../../../assets/ranked-emblems/Emblem_Gold.png");
            break;
        case "PLATINUM":
            icon = require("../../../assets/ranked-emblems/Emblem_Platinum.png");
            break;
        case "DIAMOND":
            icon = require("../../../assets/ranked-emblems/Emblem_Diamond.png");
            break;
        case "MASTER":
            icon = require("../../../assets/ranked-emblems/Emblem_Master.png");
            break;
        case "GRANDMASTER":
            icon = require("../../../assets/ranked-emblems/Emblem_Grandmaster.png");
            break;
        case "CHALLENGER":
            icon = require("../../../assets/ranked-emblems/Emblem_Challenger.png");
            break;
        default:
            consoleTool("error")
            break
        }
    return {icon: icon}
}