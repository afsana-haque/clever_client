import React from 'react';

const researchPapersData = [
    {
        title: "Advances in Alzheimer's Disease",
        author: "Afsana Haque",
        link: "https://www.scirp.org/journal/aad/",
        description: "Non-Steroidal Anti-Inflammatory Drugs as Protective Factor in Alzheimer’s Diseases: A Systematic Review and Meta-Analysis Protocol.",
    },
    // Add other research papers similarly
    {
        title: "Advances in Enzyme Research",
        author: "Mehedi Hasan",
        link: "https://www.scirp.org/journal/aer/",
        description: "Effects of Purified Indian Cattle Tick Rhipicephalus microplus Saliva Toxins on Various Enzymes in Blood Serum, Liver and Muscles of Albino Mice.",
    },
    {
        title: "Food and Nutrition Sciences",
        author: "Sifat Ahamed",
        link: "https://www.scirp.org/journal/fns/",
        description: "State of Knowledge on the Metabolic Syndrome and NASH in the Ivorian Population: Case of People Attending the Diabetology Endocrinology Service of the University Hospital Center (CHU) of Yopougon (Abidjan, Côte d’Ivoire)",
    },

    
];

const ResearchPapers = () => {
    return (
        <div className='lg:ml-4 mb-10'>
            <h2 className="text-3xl font-bold mb-4 text-center py-10">Recommended Research Papers</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            {researchPapersData.map((paper, index) => (
                <div key={index} className="card w-96 bg-blue-100 text-black">
                    <div className="card-body">
                        <h2 className="card-title">{paper.title}</h2>
                        <p> <span className='font-bold'>Name: </span>{paper.author}</p>
                        <p><span className='font-bold'>Description: </span>{paper.description}</p>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                        Read More
                    </button>
                </a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default ResearchPapers;


{/* <div>
    <ul>
        {researchPapersData.map((paper, index) => (
            <li key={index} className="mb-4">
                <strong>{paper.title}</strong><br />
                <em>{paper.author}</em><br />
                <p>{paper.description}</p>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                        Read More
                    </button>
                </a>
            </li>
        ))}
    </ul>
</div> */}
