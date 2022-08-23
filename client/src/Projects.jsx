import React from "react";

function Projects() {
    return (
        <div>
            <h2 className="text-2xl text-center underline-offset-8  my-8">
                Work created or contributed to
            </h2>
            <div className="GamegetterContainer">
                <h3 className="text-end">
                    Game Getter
                    <img
                        className="GameGetterImage"
                        src="./public/images/Game-Getter.png"
                    />
                </h3>
                <p className="  indent-2">Game Getter is an interactive application that allows users to search for over 16,700 video games from various genres, publishers, release years and more! After searching, a display of all related search results will be curated just for you. When clicking on a search result, users may receive information pertaining to the game such as: available platforms to play on, the year of release, a brief description of the game, the publisher, global sales, critic scores, the developer, the ESRB rating, an image associated with the game, and a website for more information on about the game if it exists. If users would like to save any search result to their own personalized dashboard for referencing later, they will be prompted to sign up or log in.</p>
            </div>
            <img src="./public/images/Whale-Watchers-Copy.png" />
            <img src="./public/images/Work-Day-Scheduler.png" />
        </div>
    );
}

export default Projects;
