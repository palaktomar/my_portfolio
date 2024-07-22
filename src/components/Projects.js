import React, { useEffect, useState } from 'react';

const Projects = ({ username }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                setRepos(data);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, [username]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map(repo => (
                <div key={repo.id} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{repo.name}</h3>
                    <p className="mt-2 text-gray-600">{repo.description || 'No description available'}</p>
                    <p className="mt-4">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            View Repository
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
