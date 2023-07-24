import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import College from '../../College/College';
import Graduate_group from '../Graduate_group/Graduate_group';
import ResearchPapers from '../ResearchPaper/ResearchPaper';



const Home = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <College></College>
            <Graduate_group></Graduate_group>
            <ResearchPapers></ResearchPapers>
          
           
        </div>
    );
};

export default Home;