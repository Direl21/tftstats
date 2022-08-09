export let doc = (playerData, rankData, matchData, serverValue) => {
    let data = {
        name: playerData.name,
        playerData: {
            id: playerData.id,
            accountId: playerData.accountId,
            puuid: playerData.puuid,
            name: playerData.name,
            profileIconId: playerData.profileIconId,
            revisionDate: playerData.revisionDate,
            summonerLevel: playerData.summonerLevel,
        },
        rankData: {
            /*tftTurbo: {
                gameType: rankData[0].queueType,
                ratedTier: rankData[0].ratedTier,
                ratedRating: rankData[0].ratedRating,
                wins: rankData[0].wins,
                losses: rankData[0].losses
            },*/
            gameType: rankData[0].queueType,
            tier: rankData[0].tier,
            rank: rankData[0].rank,
            leaguePoints: rankData[0].leaguePoints,
            wins: rankData[0].wins,
            losses: rankData[0].losses
        },
        matchData: matchData,
        oneMatchData: [],
        serverName: serverValue,
        updatedTime: Date.now(),
    }
    return data;
};

export const newMatchInfo = (oneMatchData) => {
    let data = {
    metadata: {
        dataVersion: oneMatchData.metadata.data_version,
        matchId: oneMatchData.metadata.match_id,
        participants: [oneMatchData.metadata.participants]
    }, 
    info: {
        gameDatetime: oneMatchData.info.game_datetime,
        gameLength: oneMatchData.info.game_length,
        gameVersion: oneMatchData.info.game_version,
        participants: []
    }
    }
    return data;
};

export let newParticipansInfo = (oneMatchData, index) => {
    let data = {
        id: oneMatchData.info.participants[index].id,
        accountId: oneMatchData.info.participants[index].accountId,
        puuid: oneMatchData.info.participants[index].puuid,
        name: oneMatchData.info.participants[index].name,
        profileIconId: oneMatchData.info.participants[index].profileIconId,
        revisionDate: oneMatchData.info.participants[index].revisionDate,
        summonerLevel: oneMatchData.info.participants[index].summonerLevel,
        augments: [oneMatchData.info.participants[index].augments],
        companion: {
            content: oneMatchData.info.participants[index].companion.content_ID,
            skin: oneMatchData.info.participants[index].companion.skin_ID,
            species: oneMatchData.info.participants[index].companion.species,
        },
        goldLeft: oneMatchData.info.participants[index].gold_left,
        lastRound: oneMatchData.info.participants[index].last_round,
        level: oneMatchData.info.participants[index].level,
        placement: oneMatchData.info.participants[index].placement,
        playersEliminated: oneMatchData.info.participants[index].players_eliminated,
        timeEliminated: oneMatchData.info.participants[index].time_eliminated,
        totalDamageToPlayers: oneMatchData.info.participants[index].total_damage_to_players,
        traits: [],
        units: []
    }
    return data;
};

export let newTraitsInfo = (oneMatchData, index, index2) => {
    let data = {
        name: oneMatchData.info.participants[index].traits[index2].name,
        numUnits: oneMatchData.info.participants[index].traits[index2].num_units,
        style: oneMatchData.info.participants[index].traits[index2].style,
        tierCurrent: oneMatchData.info.participants[index].traits[index2].tier_current,
        tierTotal: oneMatchData.info.participants[index].traits[index2].tier_total
    }
    return data
};

export let newUnitsInfo = (oneMatchData, index, index3) => {
    let data = {
        characterId: oneMatchData.info.participants[index].units[index3].character_id,
        itemNames: oneMatchData.info.participants[index].units[index3].itemNames,
        items: oneMatchData.info.participants[index].units[index3].items,
        name: oneMatchData.info.participants[index].units[index3].name,
        rarity: oneMatchData.info.participants[index].units[index3].rarity,
        tier: oneMatchData.info.participants[index].units[index3].tier
    }
    return data
}

export let errorInfoDB = (queryParams) => {
    let data = {
        playerName: queryParams.playerName,
        serverValue: {
            value: queryParams.serverValue.value,
            label: queryParams.serverValue.label
        },
        type: queryParams.type,
        errorData: queryParams.errorData
    }
    return data
}