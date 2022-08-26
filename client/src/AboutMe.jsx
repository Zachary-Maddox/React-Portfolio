import React from "react";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
    SiJavascript,
    SiMysql,
    SiExpress,
    SiHandlebarsdotjs,
    SiJquery,
    SiMongodb
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

function AboutMe() {
    return (
        <div id="AboutMe">
            <h1 className="AboutMe my-1 mx-8 text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-violet-800 to-cyan-400">
                Zachary Maddox
            </h1>
            <h2 className="Title mb-8 mx-8 text-lg">
                Full Stack Web Devoloper in the Making{" "}
            </h2>
            <p className="Description flex-wrap w-3/5 ml-8 indent-2">
                Currently enrolled with the University of Central Florida attending
                an online computer bootcamp for Full Stack Web
                Development. Dedicated learner looking for a entry level position
                on a dev team who is passionate for teaching aspiring future
                first-class developers.{" "}
            </p>
            <h2 className="text-2xl text-center my-4 font-serif underline underline-offset-8 decoration-1">
                Technologies Used
            </h2>

            <div className="m-5 text-center flex justify-center ">
                <a href="https://www.w3schools.com/html/">
                    <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">HTML
                    <FaHtml5 size={30} color="red" />
                    </div>
                </a>
                <a
                    className="ml-2"
                    href=" https://developer.mozilla.org/en-US/docs/Web/CSS"
                >
                    {" "}
                    <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">CSS
                    <IoLogoCss3 size={30} color="#000C66" />
                    </div>
                </a>
                <a
                    className="ml-2"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                >
                    {" "}
                    <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">JAVASCRIPT
                    <SiJavascript size={30} color="yellow" />
                    </div>
                </a>
                <a className="ml-2" href="https://nodejs.org/en/">
                    {" "}
                    <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">NODE JS
                    <FaNodeJs size={30} color="green" />
                    </div>
                </a>
                <a className="ml-2" href="https://reactjs.org/">
                    {" "}
                    <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">REACT JS
                    <GrReactjs size={30} color="lightblue" />
                    </div>
                </a>
                <a className="ml-2" href="https://www.mysql.com/">
                <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">MySQL
                    <SiMysql size={30} color="orange" />
                    </div>
                </a>
                <a className="ml-2" href="https://expressjs.com/">
                <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">EXPRESS
                <SiExpress size={30} color="white" />
                    </div>
                </a>
                <a className="ml-2" href="https://handlebarsjs.com/">
                <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">HANDLEBARS
                <SiHandlebarsdotjs size={30} color="black" />
                </div>
                </a>
                <a className="ml-2" href="https://jquery.com/">
                <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">JQUERY
                <SiJquery size={30} color="#000C66" />
                </div>
                </a>
                <a className="ml-2" href="https://www.mongodb.com/">
                <div className="hover:bg-cyan-600 bg-zinc-500 border-2 rounded-md border-slate-400 mb-2 flex items-center justify-center">MONGODB
                <SiMongodb size={30} color="#32CD30" />
                </div>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;
