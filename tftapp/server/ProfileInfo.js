import mongoose from "mongoose";
const rankInformation = new mongoose.Schema({
    /*tftTurbo: {
        gameType: {type: String},
        ratedTier: {type: String},
        ratedRating: {type: Number},
        wins: {type: Number},
        losses: {type: Number},
    },*/
    gameType: {type: String},
    tier: {type: String},
    rank: {type: String},
    leaguePoints: {type: Number},
    wins: {type: Number},
    losses: {type: Number},
});

const traitsInfo = new mongoose.Schema ({
    name: {type: String}, 
    numUnits: {type: Number},
    style: {type: Number},
    tierCurrent: {type: Number},
    tierTotal: {type: Number}
});

const unitsInfo = new mongoose.Schema ({
    characterId: {type: String},
    itemNames: [{type: String}],
    items: [{type: Number}],
    name: {type: String},
    rarity: {type: Number},
    tier: {type: Number}
});

const ParticipansInfo = new mongoose.Schema ({
    id: {type: String},
    accountId: {type: String},
    puuid: {type: String},
    name: {type: String},
    profileIconId: {type: Number},
    revisionDate: {type: Number},
    summonerLevel: {type: Number},  
    augments: {type: Array},
    companion: {
        content: {type: String}, 
        skin: {type: String},
        species: {type: String}
    },
    goldLeft: {type: Number},
    lastRound: {type: Number},
    level: {type: Number},
    placement: {type: Number},
    playersEliminated: {type: Number},
    timeEliminated: {type: Number},
    totalDamageToPlayers: {type: Number},
    traits: [traitsInfo],
    units:  [unitsInfo]
});


const ProfileInfo = new mongoose.Schema({
    name: {type: String, required: true},
    playerData: {
        id: {type: String, required: true},
        accountId: {type: String, required: true}, //, unique: true, dropDups: true 
        puuid: {type: String, required: true}, //, unique: true, dropDups: true 
        name: {type: String, required: true},
        profileIconId: {type: Number, required: true},
        revisionDate: {type: Number, required: true},
        summonerLevel: {type: Number, required: true},
    },
    rankData:  [rankInformation],
    matchData: {type: Array, required: true},
    oneMatchData: [{
        metadata: { 
            dataVersion: {type: String},
            matchId: {type: String},
            participants: {type: Array}
        },
        info: {
            gameDatetime: {type: Number},
            gameLength: {type: Number},
            gameVersion: {type: String},
            participants: [ParticipansInfo]
        }
        }],
    serverName: {type: String, required: true},
    updatedTime: {type: Number, required: true},
},
{
    strict: true
})


export const Profile = mongoose.model('ProfileInfo', ProfileInfo);