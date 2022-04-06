import React from 'react';
import Preloder from '../../Components/Common/Preloder/Preloder';
import AccauntInfo from '../../Components/TFTProfile/Info(accaunt,rank,matches)/Accaunt/AccauntInfo';
import MatchesInfo from '../../Components/TFTProfile/Info(accaunt,rank,matches)/Matches/MatchesInfo';

//This component renders information about the account and matches
const ProfilePage = (props) => {
    return (
        <div>
            <AccauntInfo searchInfo={props.searchInfo} rankInfo={props.rankInfo} />

            {props.isLoading ? <Preloder /> : null}
            <MatchesInfo matchesInfo={props.matchesInfo} puuId={props.puuId} />
        </div>
    )
}

export default ProfilePage;