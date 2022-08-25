import React from "react";
import { FaHtml5,FaNodeJs } from 'react-icons/fa';
import {IoLogoCss3 } from 'react-icons/io';
import {SiJavascript,SiMysql,SiExpress,SiHandlebarsdotjs,SiJquery } from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';



function AboutMe() {
    return (
        <div>
            <h1 className="AboutMe my-1 mx-8 text-4xl ">Zachary Maddox</h1>
            <h2 className="Title mb-8 mx-8 text-lg">
                Full Stack Web Devoloper in the Making{" "}
            </h2>
            <p className="Description flex-wrap w-3/5 ml-8 indent-2">
                Currently enrolled with University of Central Florida attending
                an online computer bootcamp for Full Stack Web
                Development.Dedicated learner looking for a entry level position
                on a dev team who is passionate for teaching aspiring future
                first-class developers.{" "}
            </p>
            <h2 className="text-2xl text-center underline-offset-8  my-4">
                Technologies Used
            </h2>
            {/* add a tags and link for icons */}
            <div className="m-5 text-center flex justify-center ">
                 <a  href="https://www.w3schools.com/html/">
                <FaHtml5 size={30} color="red" />
                </a>
                <a className="ml-2" href=" https://developer.mozilla.org/en-US/docs/Web/CSS">
                    {" "}
                    <IoLogoCss3  size={30} color="blue"/>
                    </a>
                <a className="ml-2" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    {" "}
                    <SiJavascript  size={30} color="yellow"/>
                    </a>
                <a className="ml-2" href="https://nodejs.org/en/">
                    {" "}
                    <FaNodeJs  size={30} color="green"/>
                    </a>
                <a className="ml-2" href="https://reactjs.org/">
                    {" "}
                    <GrReactjs  size={30} color="lightblue"/>
                    </a>
                <a className="ml-2" href="https://www.mysql.com/">
                    <SiMysql  size={30} color="orange" />
                    </a>
                <a className="ml-2" href="https://expressjs.com/">
                    <SiExpress size={30} color="gray" />
                    </a>
                <a className="ml-2" href="https://handlebarsjs.com/">
                    <SiHandlebarsdotjs size={30}  />
                    </a>
                <a className="ml-2" href="https://jquery.com/">
                    <SiJquery size={30}color="blue" />
                    </a>
            </div>
        </div>
    );
}

export default AboutMe;
