import React from "react";
import { SiGithub, SiLinkedin,SiStackoverflow } from "react-icons/si";
import {
    AiOutlineCopyright,
    AiOutlineMail,
    AiOutlineDownload,
} from "react-icons/ai";

function footer() {
    return (
        <div id="Contact">
            <h1 className="text-3xl text-center underline-offset-8  mt-20 font-serif ">
                Contact Information
            </h1>
            <div className=" text-center mb-4">
                <a
                    className="flex justify-center mt-4"
                    href="mailto: z19s96p@aol.com"
                >
                    {" "}
                    <AiOutlineMail size={20} /> z19s96p@aol.com
                </a>
                <a
                    className="flex justify-center"
                    href="/documents/Zachary-Maddox-Resume.pdf"
                    download
                >
                    {" "}
                    <AiOutlineDownload size={20} />
                    Download My Resume{" "}
                </a>
            </div>
            <h2 className="text-xl text-center font-serif">Socials</h2>
            <div className="m-4 text-center flex justify-center space-x-2">
                <a href="https://github.com/Zachary-Maddox">
                    {" "}
                    <SiGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/zach-maddox-539a85142/">
                    {" "}
                    <SiLinkedin size={30} />
                </a>
                <a href="https://stackoverflow.com/users/19164426/zachary-maddox">
                    {" "}
                    <SiStackoverflow size={30} />
                </a>
            </div>
            <div className="pb-4 text-center flex justify-center items-center font-serif">
                <AiOutlineCopyright size={13} className="mr-2" /> Zachary Maddox
                2022
            </div>
        </div>
    );
}

export default footer;
