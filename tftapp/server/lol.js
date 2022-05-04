main().catch(err => console.log(err));

        async function main() {
            await mongoose.connect(DB_URL);
        }

        const doc = {
            id: playerData.id,
            accountId: playerData.accountId,
            puuid: playerData.puuid,
            name: playerData.name,
            profileIconId: playerData.profileIconId,
            revisionDate: playerData.revisionDate,
            summonerLevel: playerData.summonerLevel,
            rankData: {
                gameType: rankData[0].queueType,
                tier: rankData[0].tier,
                rank: rankData[0].rank,
                leaguePoints: rankData[0].leaguePoints,
                wins: rankData[0].wins,
                losses: rankData[0].losses
            },
            matchData: matchData,
            oneMatchData: { 
                $push: {metadata: { 
                    $each: [ {
                        dataVersion: oneMatchData.metadata.data_version,
                        matchId: oneMatchData.metadata.match_id,
                        participants: [oneMatchData.metadata.participants]
                   } ] 
               }}
            /*oneMatchData: {
                metadata: {
                    dataVersion: oneMatchData.metadata.data_version,
                    matchId: oneMatchData.metadata.match_id,
                    participants: [oneMatchData.metadata.participants]
                },
                info: {
                    gameDatetime: oneMatchData.info.game_datetime,
                    gameLength: oneMatchData.info.game_length,
                    gameVersion: oneMatchData.info.game_version,
                    participants: [{
                        id: oneMatchData.info.participants[0].id,
                        accountId: oneMatchData.info.participants[0].accountId,
                        puuid: oneMatchData.info.participants[0].puuid,
                        name: oneMatchData.info.participants[0].name,
                        profileIconId: oneMatchData.info.participants[0].profileIconId,
                        revisionDate: oneMatchData.info.participants[0].revisionDate,
                        summonerLevel: oneMatchData.info.participants[0].summonerLevel,
                        augments: [oneMatchData.info.participants[0].augments],
                        companion: {
                            contentID: oneMatchData.info.participants[0].companion.content_ID,
                            skinID: oneMatchData.info.participants[0].companion.skin_ID,
                            species: oneMatchData.info.participants[0].companion.species,
                        },
                        goldLeft: oneMatchData.info.participants[0].gold_left,
                        lastRound: oneMatchData.info.participants[0].last_round,
                        level: oneMatchData.info.participants[0].level,
                        placement: oneMatchData.info.participants[0].placement,
                        playersEliminated: oneMatchData.info.participants[0].players_eliminated,
                        timeEliminated: oneMatchData.info.participants[0].time_eliminated,
                        totalDamageToPlayers: oneMatchData.info.participants[0].total_damage_to_players,
                        traits: [{
                            name: oneMatchData.info.participants[0].traits[0].name,
                            numUnits: oneMatchData.info.participants[0].traits.num_units,
                            style: oneMatchData.info.participants[0].traits.style,
                            tierCurrent: oneMatchData.info.participants[0].traits.tier_current,
                            tierTotal: oneMatchData.info.participants[0].traits.tier_total
                        }]
                    }]
                } */
            },



        const docc = {
            id: playerData.id,
            accountId: playerData.accountId,
            puuid: playerData.puuid,
            name: playerData.name,
            profileIconId: playerData.profileIconId,
            revisionDate: playerData.revisionDate,
            summonerLevel: playerData.summonerLevel,
            rankInfo: [{
                gameType: rankData[0].queueType,
                tier: rankData[0].tier,
                rank: rankData[0].rank,
                leaguePoints: rankData[0].leaguePoints,
                wins: rankData[0].wins,
                losses: rankData[0].losses
            }],
        }



    /*oneMatchData: [{
        metadata: {
            dataVersion: {type: String},
            matchId: {type: String},
            participants: [{type: Array}]
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
                augments: [{type: Array}],
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
                    default : [{name: {type: String}, 
                        numUnits: {type: Number},
                        style: {type: Number},
                        tierCurrent: {type: Number},
                        tierTotal: {type: Number}
                    }]},
                [{
                    name: {type: String}, 
                    numUnits: {type: Number},
                    style: {type: Number},
                    tierCurrent: {type: Number},
                    tierTotal: {type: Number}
                }],
                units: [{
                    characterId: {type: String},
                    itemNames: [{type: String}],
                    items: [{type: Number}],
                    name: {type: String},
                    rarity: {type: Number},
                    tier: {type: Number}
                }]
            }]
            */

            const ProfileInfo = new mongoose.Schema({
                id: {type: String, required: true},
                accountId: {type: String, required: true},
                puuid: {type: String, required: true},
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
                 
                $push: {oneMatchData: { 
                    $each: [ {
                       metadata: { 
                           dataVersion: {type: String},
                           matchId: {type: String},
                           participants: {type: Array}
                       }, info: {
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
                   }},
               serverName: {type: String, required: true},
               updatedTime: {type: Number, required: true},
                
            })