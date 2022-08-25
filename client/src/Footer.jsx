import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineCopyright } from "react-icons/ai";

function footer() {
    return (
        <div>
            <h1 className="text-2xl text-center underline-offset-8  my-4">
                Contact Information
            </h1>
            <div className=" text-center justify-center mb-4">
                <a href="mailto: z19s96p@aol.com">
                    <span className="block">z19s96p@aol.com</span>
                </a>
                <a href="Zachary-Maddox-Resume.docx" download>
                    <span className="block">Download My Resume </span>
                </a>
            </div>
            <h2 className="text-xl flex justify-center">Socials</h2>
            <div className="m-4 text-center flex justify-center space-x-2">
                <a href="https://github.com/Zachary-Maddox">
                    {" "}
                    <SiGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/zach-maddox-539a85142/">
                    {" "}
                    <SiLinkedin size={30} />
                </a>
            </div>
            <div className="m-4 text-center justify-center">
                <span>
                    <AiOutlineCopyright size={13} /> Zachary Maddox 2022
                </span>
            </div>
        </div>
    );
}

export default footer;
