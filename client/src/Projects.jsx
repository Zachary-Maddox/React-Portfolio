import React from "react";
import { SiHandlebarsdotjs, SiJavascript, SiMysql } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
// bring in icon like you did on about me and make them a prop

function Projects() {
    return (
        <div>
            <h2 className="text-2xl text-center underline-offset-8  my-8">
                Work created or contributed to
            </h2>
            <div className="GamegetterContainer  flex flex-1 flex-row mb-8">
                <img
                    className="GameGetterImage basis-1/2 w-32 "
                    src="./images/game-Getter.png"
                />
                <div className="basis-1/2">
                    <h3 className=" text-end m-4">Game Getter</h3>
                    <p className="indent-2 mb-4 mx-4">
                        Game Getter is an interactive application that allows
                        users to search for over 16,700 video games from various
                        genres, publishers, release years and more! After
                        searching, a display of all related search results will
                        be curated just for you. When clicking on a search
                        result, users may receive information pertaining to the
                        game such as: available platforms to play on, the year
                        of release, a brief description of the game, the
                        publisher, global sales, critic scores, the developer,
                        the ESRB rating, an image associated with the game, and
                        a website for more information on about the game if it
                        exists. If users would like to save any search result to
                        their own personalized dashboard for referencing later,
                        they will be prompted to sign up or log in.
                    </p>
                    <div className=" flex justify-center">
                        <i>
                            {" "}
                            <SiHandlebarsdotjs size={30} />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="blue" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaNodeJs size={30} color="green" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaHtml5 size={30} color="red" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <SiMysql size={30} color="orange" />
                        </i>
                    </div>
                </div>
            </div>
            <div className="WhaleWatchersContainer  flex flex-1 flex-row mb-8">
                <img
                    className="WhaleWatchersImage basis-1/2 w-32"
                    src="./images/whale-Watchers.png"
                />
                <div className="basis-1/2">
                    <h3 className="text-end m-4">Whale Watchers</h3>
                    <p className="indent-2 mb-4 mx-4">
                        Stock app that allows users who want to day trade , long
                        term share hold, or even large corperations looking for
                        partnership the ability to use a stocks ticker (Ex. AAPL
                        for apple or TSLA for tesla ) and recieve relative news
                        information on that search stock . It also displays the
                        stocks data for : Current Price,Change,Percent
                        Change,Daily Low,Daily High,Open Price and Closed Price
                        using third party APIs.
                    </p>
                </div>
            </div>

            <div className="WorkDaySchedulerContainer flex flex-row">
                <h3 className="text-end basis-1/2">Work Day Scheduler</h3>
                <img
                    className="WorkDaySchedulerImage"
                    src="./images/work-Day-Scheduler.png"
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
