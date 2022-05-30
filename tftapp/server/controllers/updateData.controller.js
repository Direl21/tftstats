import { Profile } from "../ProfileInfo.js";

export const updateData = (playerName, serverValue, request) => {

    Profile.findOneAndUpdate({ 
        name: playerName, 
        serverName: serverValue }, {playerData: request.playerData, rankData: request.rankData, updatedTime: new Date()}, { returnOriginal: false}, function(err, result){
            if (err) {
                console.log(err.message)
            } else {
                console.log('UPDATED')
            }
        });
}