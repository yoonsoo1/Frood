import React from 'react';

import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BlockCard from './app/components/BlockCard';
import FeaturedFood from './app/components/FeaturedFood';
import SmallCard from './app/components/SmallCard';
import FriendRestaraunts from './app/components/FriendRestaraunts';

import data from './SearchData'

export default function SearchScreen() {
    const FriendRestaraunts = data.filter(item => item.category === 'FriendRestaraunts');
    const NearYou = data.filter(item => item.category === 'NearYou');
    return (
        <Screen>
            <SearchBar />
            <FeaturedFood item={{
                id: '1',
                title: 'USC Village',
                desc:
                  'Nearest to you',
                thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuscvillage.com%2F&psig=AOvVaw0xOKcEj2phjXvUe68fjMP0&ust=1650834463454000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDs8eKLq_cCFQAAAAAdAAAAABAG',
            }} />
            <FriendRestaraunts data={FriendRestaraunts}/>
            <NearYou data={NearYou} />
        </Screen>
    )
}