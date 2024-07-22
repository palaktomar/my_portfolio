import React, { useEffect, useState } from 'react';

const Profile = ({ username }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error('Error fetching profile:', error));
    }, [username]);

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center">
                <img src={profile.avatar_url} alt="avatar" className="w-32 h-32 rounded-full mr-8" />
                <div>
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <p className="text-gray-700">{profile.bio}</p>
                    <p className="mt-4 text-blue-500">
                        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                            View GitHub Profile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
