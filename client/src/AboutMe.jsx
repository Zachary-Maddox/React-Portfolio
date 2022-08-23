import React from "react";
// import { FaBeer } from "react-icons/fa";
// class Question extends React.Component {
//     render() {
//         return (
//             <h3>
//                 {" "}
//                 Lets go for a <FaBeer />?{" "}
//             </h3>
//         );
//     }
// }

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
                on a dev team who is passionate for teaching aspiring
                first-class developers.{" "}
            </p>
            <h2 className="text-2xl text-center underline-offset-8  my-4">
                Technologies Used
            </h2>
            <div className="m-5 text-center">
                <button className="ButtonIcons bg-purple-800 text-stone-100 rounded-md ">
                    FaHtml5
                </button>
                <button className="ButtonIcons bg-purple-800 text-stone-100 rounded-md ml-2">
                    {" "}
                    IoLogoCss3
                </button>
                <button className="ButtonIcons bg-purple-800 text-stone-100 rounded-md ml-2">
                    {" "}
                    SiJavascript
                </button>
                <button className="ButtonIcons bg-purple-800 text-stone-100 rounded-md ml-2">
                    {" "}
                    FaNodeJs
                </button>
                <button className="ButtonIcons bg-purple-800 text-stone-100 rounded-md ml-2">
                    {" "}
                    GrReactjs
                </button>
                <button className="ButtonIcons bg-purple-800 text-stone-100 rounded-md ml-2">
                    SiMysql
                </button>
            </div>
        </div>
    );
}

export default AboutMe;
