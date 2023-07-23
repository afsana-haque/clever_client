import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import College from '../../College/College';
import Graduate_group from '../Graduate_group/Graduate_group';

const Home = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <College></College>
            <Graduate_group></Graduate_group>
            <h2>This is Home Graduate_group </h2>
           
        </div>
    );
};

export default Home;