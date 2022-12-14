import React from "react";
import {
    SiHandlebarsdotjs,
    SiJavascript,
    SiMysql,
    SiExpress,
    SiBulma,
    SiJquery,
    SiGithub,
    SiMongodb
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import { GrReactjs, GrGraphQl } from "react-icons/gr";
import { FaHtml5, FaNodeJs } from "react-icons/fa";

function Projects() {
    return (
        <div id="Projects">
            <h2 className="text-2xl text-center underline underline-offset-8 decoration-1 my-8 font-serif">
                Work Created or Contributed To
            </h2>
            <div className="GamegetterContainer  flex flex-1 flex-row mb-8">
                <img
                    className="GameGetterImage basis-1/2 w-20 hover:scale-105"
                    src="./images/game-getter.png"
                />
                <div className="basis-1/2">
                    <h3 className=" text-end m-4 font-serif underline underline-offset-8 decoration-1">
                        GAME GETTER
                    </h3>
                    <div className="flex justify-center">
                        <a href="https://game-getter-project-2.herokuapp.com/">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">
                                {" "}
                                <IoRocketOutline /> Deployed link
                            </button>
                        </a>
                        <a href="https://github.com/StevenBolc/GameGetter">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center ml-2">
                                {" "}
                                <SiGithub /> Repository link
                            </button>
                        </a>
                    </div>
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
                        a website for more information about the game if it
                        exists. If users would like to save any search result to
                        their own personalized dashboard for referencing later,
                        they will be prompted to sign up or log in.
                    </p>
                    <div className="flex justify-center">
                        <i>
                            {" "}
                            <SiHandlebarsdotjs size={30} color="black" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="#000C66" />
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
                        <i className="ml-2">
                            {" "}
                            <SiExpress size={30} color="gray" />
                        </i>
                    </div>
                </div>
            </div>
            <div className="WhaleWatchersContainer flex flex-1 flex-row mb-8">
                <div className="basis-1/2">
                    <h3 className="text-end m-4 font-serif underline underline-offset-8 decoration-1">
                        WHALE WATCHERS
                    </h3>
                    <div className="flex justify-center">
                        <a href="https://jgordon59.github.io/Whale-Watchers/">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">
                                {" "}
                                <IoRocketOutline /> Deployed link
                            </button>
                        </a>
                        <a href=" https://github.com/JGordon59/Whale-Watchers">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center ml-2">
                                {" "}
                                <SiGithub /> Repository link
                            </button>
                        </a>
                    </div>
                    <p className="indent-2 mb-4 mx-4">
                        Stock app that allows users who want to day trade , long
                        term share hold, or even large corperations looking for
                        partnership the ability to use a stocks ticker (Ex. AAPL
                        for apple or TSLA for tesla ) and recieve relative news
                        information on that searched stock . It also displays
                        the stock's data for : Current Price, Change, Percent
                        Change, Daily Low, Daily High, Open Price, and Closed
                        Price using third party APIs.
                    </p>

                    <div className=" flex justify-center">
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="#000C66" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaHtml5 size={30} color="red" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <SiBulma size={30} color="#50C878" />
                        </i>
                    </div>
                </div>
                <img
                    className="WhaleWatchersImage basis-1/2 w-20 hover:scale-105"
                    src="./images/whale-watchers.png"
                />
            </div>
            <div className="WorkDaySchedulerContainer flex flex-1 flex-row mb-8">
                <img
                    className="WorkDaySchedulerImage basis-1/2 w-20 hover:scale-105"
                    src="./images/work-day-scheduler.png"
                />
                <div className="basis-1/2">
                    <h3 className="text-end m-4 font-serif underline underline-offset-8 decoration-1">
                        WORK DAY SCHEDULER
                    </h3>
                    <div className="flex justify-center">
                        <a href="https://github.com/Zachary-Maddox/workday-scheduler">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">
                                {" "}
                                <SiGithub /> Repository Link
                            </button>
                        </a>
                    </div>
                    <p className="indent-2 mb-4 mx-4">
                        Workday Scheduler is a color coded scheduler for a 9-5
                        job that has a updating current date at the top and a
                        built-in color coded interval for current , present,and
                        past. Current is red, past is grey, and future is green.
                        This scheduler is locally stored and pulled so that when
                        you refresh the page your text area input is still
                        there.
                    </p>
                    <div className=" flex justify-center">
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="#000C66" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaHtml5 size={30} color="red" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <SiJquery size={30} color="#000C66" />
                        </i>
                    </div>
                </div>
            </div>
            <div className="NoteTakerContainer flex flex-1 flex-row mb-8">
                <div className="basis-1/2">
                    <h3 className="text-end m-4 font-serif underline underline-offset-8 decoration-1">
                        NOTE TAKER
                    </h3>
                    <div className="flex justify-center">
                        <a href=" https://zachary-maddox.github.io/taker-of-thy-notes/">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">
                                {" "}
                                <IoRocketOutline /> Deployed link
                            </button>
                        </a>
                        <a href=" https://github.com/Zachary-Maddox/taker-of-thy-notes">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center ml-2">
                                {" "}
                                <SiGithub /> Repository link
                            </button>
                        </a>
                    </div>
                    <p className="indent-2 mb-4 mx-4">
                        Note taking application that allows you create and save
                        notes to a database. A new note is created for you when
                        you click on the "new note" title, to save your note
                        simply click the save icon. After you have multiple
                        notes added you can always go back and review by
                        clicking on that particular note in the left hand
                        column. From there the note you selected will appear in
                        the right hand column.
                    </p>

                    <div className=" flex justify-center">
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="#000C66" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaHtml5 size={30} color="red" />
                        </i>
                    </div>
                </div>
                <img
                    className="NoteTakerImage basis-1/2 w-20 hover:scale-105"
                    src="./images/note-taker.png"
                />
            </div>
            <div className="WeatherForecastContainer flex flex-1 flex-row mb-8">
                <img
                    className="WeatherForecastImage basis-1/2 w-20 hover:scale-105"
                    src="./images/weather-forecast.png"
                />
                <div className="basis-1/2">
                    <h3 className="text-end m-4 font-serif underline underline-offset-8 decoration-1">
                        WEATHER FORECAST
                    </h3>
                    <div className="flex justify-center">
                        <a href="https://github.com/Zachary-Maddox/weather-forecast">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">
                                {" "}
                                <SiGithub /> Repository Link
                            </button>
                        </a>
                        <a href=" https://zachary-maddox.github.io/weather-forecast/ ">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center ml-2">
                                {" "}
                                <IoRocketOutline /> Deployed Link
                            </button>
                        </a>
                    </div>
                    <p className="indent-2 mb-4 mx-4">
                        Five-day weather forecast that allows you to search a
                        city and gives you the weather's temp, wind, humidity,
                        uv index, and weather icon. You will also see the city
                        and date displayed in the top section.
                    </p>
                    <div className=" flex justify-center">
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="#000C66" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaHtml5 size={30} color="red" />
                        </i>
                    </div>
                </div>
            </div>
            <div className="SupporDevContainer flex flex-1 flex-row mb-8">
                <div className="basis-1/2">
                    <h3 className="text-end m-4 font-serif underline underline-offset-8 decoration-1">
                        SupporDev
                    </h3>
                    <div className="flex justify-center">
                        {/* add deployed link  */}
                        <a href="https://suppordev.herokuapp.com/ ">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">
                                {" "}
                                <IoRocketOutline /> Deployed link
                            </button>
                        </a>
                        <a href="https://github.com/DalianGrullon/SupporDev">
                            <button className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center ml-2">
                                {" "}
                                <SiGithub /> Repository link
                            </button>
                        </a>
                    </div>
                    <p className="indent-2 mb-4 mx-4"></p>

                    <div className=" flex justify-center">
                        <i className="ml-2">
                            {" "}
                            <SiJavascript size={30} color="yellow" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <IoLogoCss3 size={30} color="#000C66" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaHtml5 size={30} color="red" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <GrGraphQl size={30} color="hotpink" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <GrReactjs size={30} color="lightblue" />
                        </i>
                        <i className="ml-2">
                            {" "}
                            <FaNodeJs size={30} color="green" />
                        </i>
                        <i className="ml-2">
                            <SiExpress size={30} color="white" />
                        </i>
                        <i className="ml-2">
                        <SiMongodb size={30} color="#32CD30" />
                        </i>
                    </div>
                </div>
                <img
                    className="SupporDevImage basis-1/2 w-20 hover:scale-105"
                    src="./images/suppordev.png"
                />
            </div>
        </div>
    );
}

export default Projects;
