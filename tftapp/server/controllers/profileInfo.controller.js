import { Profile } from "../ProfileInfo.js";
import { whichServerName, whichGlobalServerName } from "../services/api.js";
import { doc } from "../db/db.js";
import { getMatchesData } from "./Helper/profileInfo.helper.js";
import 'dotenv/config';
import { updateData } from "./updateData.controller.js";
import { apiRequest } from "./Helper/apiRequest.helper.js";

export const startServer = async (req, res) => {
    res.status(200).json('SERVER WORKED')
};

export const riotApiRequest =  (req, res) => {
    
    let playerName = req.params.name;
    let serverValue = req.params.server;
    whichServerName(serverValue);
    whichGlobalServerName(serverValue);

    Profile.findOne({ 
        name: playerName, 
        serverName: serverValue }, 
        async (err, result) => {
            if (err){
                console.log(err.message)
            } else if (result === null){
                console.log('IM HERE')

                try {
                    let request = await apiRequest(playerName, serverValue);
                    // create a document to insert
                    let docData = doc(request.playerData, request.rankData, request.matchData, serverValue);
                    await getMatchesData(request.matchData, docData);
                    
                    const addProfile = new Profile(docData, true);
                    await addProfile.save();
                    res.json(addProfile);

                } catch (e) {
                    console.log(e.message)
                }
                
            } else {
                let request = await apiRequest(playerName, serverValue);
                updateData(playerName, serverValue, request);
                res.json(result);
                console.log("RESULT:", result)
            }
        }
        
    )
}