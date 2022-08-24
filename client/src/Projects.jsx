import React from "react";

function Projects() {
    return (
        <div>
            <h2 className="text-2xl text-center underline-offset-8  my-8">
                Work created or contributed to
            </h2>
            <div className="GamegetterContainer flex flex-row">
                <h3 className="text-end basis-1/2">Game Getter</h3>
                <img
                    className="GameGetterImage basis-1/2 "
                    src="./public/images/Game-Getter.png"
                />
            </div>
            <div className="flex justify-end">
                <p className="w-1/2 indent-2">
                    Game Getter is an interactive application that allows users
                    to search for over 16,700 video games from various genres,
                    publishers, release years and more! After searching, a
                    display of all related search results will be curated just
                    for you. When clicking on a search result, users may receive
                    information pertaining to the game such as: available
                    platforms to play on, the year of release, a brief
                    description of the game, the publisher, global sales, critic
                    scores, the developer, the ESRB rating, an image associated
                    with the game, and a website for more information on about
                    the game if it exists. If users would like to save any
                    search result to their own personalized dashboard for
                    referencing later, they will be prompted to sign up or log
                    in.
                </p>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                        <img src="" alt="" />
                    </a>
                </div>
            </div>

            <div className="WhaleWatchersContainer flex flex-row">
                <h3 className="text-end basis-1/2">Whale Watchers</h3>
                <img
                    className="WhaleWatchersImage basis-1/2 "
                    src="./public/images/Whale-Watchers-Copy.png"
                />
            </div>
            <div className="flex justify-end">
                <p className="w-1/2 indent-2">
                    Stock app that allows users who want to day trade , long
                    term share hold, or even large corperations looking for
                    partnership the ability to use a stocks ticker (Ex. AAPL for
                    apple or TSLA for tesla ) and recieve relative news
                    information on that search stock . It also displays the
                    stocks data for : Current Price,Change,Percent Change,Daily
                    Low,Daily High,Open Price and Closed Price using third party
                    APIs.
                </p>
            </div>

            <div className="WorkDaySchedulerContainer flex flex-row">
                <h3 className="text-end basis-1/2">Work Day Scheduler</h3>
                <img
                    className="WorkDaySchedulerImage"
                    src="./public/images/Work-Day-Scheduler.png"
                />
            </div>
            <div className="flex justify-end">
                <p className="w-1/2 indent-2">
                    Workday scheduler is a color coded scheduler for a 9-5 job
                    that has a updating current date at the top and a built-in
                    color coded interval for current , present,and past. Current
                    is red , past is grey, and future is green. This scheduler
                    is locally stored and pullrf so that when you refresh the
                    page your textarea input is still there.
                </p>
            </div>
        </div>
    );
}

export default Projects;
