import mongoose from "mongoose";

const ProfileInfo = new mongoose.Schema({
    id: {type: String, required: true},
    accountId: {type: String, required: true, unique: true, dropDups: true },
    puuid: {type: String, required: true, unique: true, dropDups: true },
    name: {type: String, required: true},
    profileIconId: {type: Number, required: true},
    revisionDate: {type: Number, required: true},
    summonerLevel: {type: Number, required: true},
    rankData: {type: Array, 
        default: [{
            gameType: {type: String, required: true},
            tier: {type: String, required: true},
            rank: {type: String, required: true},
            leaguePoints: {type: Number, required: true},
            wins: {type: Number, required: true},
            losses: {type: Number, required: true},
        }]
    },
    matchData: {type: Array, required: true},
    oneMatchData: {type: Array, 
        default: [{
            metadata: { 
                dataVersion: {type: String},
                matchId: {type: String},
                participants: {type: Array}
            },
            info: {
                gameDatetime: {type: Number},
                gameLength: {type: Number},
                gameVersion: {type: String},
                participants: [{
                    id: {type: String},
                    accountId: {type: String},
                    puuid: {type: String},
                    name: {type: String},
                    profileIconId: {type: Number},
                    revisionDate: {type: Number},
                    summonerLevel: {type: Number},  
                    augments: {type: Array},
                    companion: {
                        contentID: {type: String}, 
                        skinID: {type: Number},
                        species: {type: String}
                    },
                    goldLeft: {type: Number},
                    lastRound: {type: Number},
                    level: {type: Number},
                    placement: {type: Number},
                    playersEliminated: {type: Number},
                    timeEliminated: {type: Number},
                    totalDamageToPlayers: {type: Number},
                    traits: { type : Array , 
                        default : [{
                            name: {type: String}, 
                            numUnits: {type: Number},
                            style: {type: Number},
                            tierCurrent: {type: Number},
                            tierTotal: {type: Number}
                        }]},
                    units: [{
                        characterId: {type: String},
                        itemNames: [{type: String}],
                        items: [{type: Number}],
                        name: {type: String},
                        rarity: {type: Number},
                        tier: {type: Number}
                    }]
                }],
                queueId: {type: Number},
                tftGameType: {type: String},
                tftSetNumber: {type: Number}
                }
            }] 
        },
    serverName: {type: String, required: true},
    updatedTime: {type: Number, required: true},
})
    

export const Profile = mongoose.model('ProfileInfo', ProfileInfo);