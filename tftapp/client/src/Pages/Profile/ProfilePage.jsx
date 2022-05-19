import React from 'react';
import Preloder from '../../components/Common/Preloder/Preloder';
import AccauntInfo from '../../components/Account/AccountInfo';
import MatchesInfo from '../../components/Matches/MatchesInfo';

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