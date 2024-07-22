import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';

const App = () => {
    const githubUsername = 'palaktomar'; // Replace with your GitHub username

    return (
        <div>
            <header className="bg-gray-900 text-white p-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-4xl font-bold">My Portfolio</h1>
                    <nav>
                        <a href="#profile" className="mx-4 hover:text-gray-400">Profile</a>
                        <a href="#projects" className="mx-4 hover:text-gray-400">Projects</a>
                        <a href="#contact" className="mx-4 hover:text-gray-400">Contact</a>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto mt-8 p-4">
                <section id="profile" className="mb-12">
                    <Profile username={githubUsername} />
                </section>
                <section id="projects">
                    <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
                    <Projects username={githubUsername} />
                </section>
            </main>
            <footer className="bg-gray-900 text-white p-4 mt-12 text-center">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                    <div className="flex justify-center mt-4">
                        <a href="https://github.com/palaktomar" target="_blank" rel="noopener noreferrer" className="mx-4 hover:text-gray-400">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="mx-4 hover:text-gray-400">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" className="mx-4 hover:text-gray-400">
                            Twitter
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
