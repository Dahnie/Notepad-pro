import { useEffect, useState } from "react";
import editImg from "./img/edit.svg"
import trashImg from "./img/trashblack.svg"
import handleNewNoteCreate from "./js/main";
const Mainpage = () => {

    const allNotesObject = handleNewNoteCreate();
    console.log("alllll----", allNotesObject);

    // allNotesObject.push({
    //     color: "bg-colorThree",
    //     content: "I want to become better than i was yesterday"
    // })



    // const [myNotes, setmyNotes] = useState(null);
    // useEffect(() => {

    // }, [JSON.stringify(allNotesObject)])

    // const [color, setColor] = useState(null)
    // const [content, setContent] = useState("")

    let myNotes = localStorage.getItem("Notes")
    myNotes = JSON.parse(myNotes)
    console.log("------", myNotes)

    // Handle Dates
    const myDate = new Date();
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let date = myDate.getDate()
    let month = allMonths[myDate.getMonth()]
    let year = myDate.getFullYear()



    return (
        <div className="content mainpage-content col-span-10 w-full px-7 fontfam-regular pt-16">
            <div className="header font-semibold text-3xl">
                Notes
            </div>
            <div className="all-notes grid grid-cols-12 gap-5 py-5">
                {allNotesObject && allNotesObject.map((elem, i) => (
                    <div className={`note ${elem.color} h-48 w-52 rounded-3xl col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden1`} key={i + 1}>
                        <div className="visible-text content-start h-36 p-3 overflow-y-auto pb-2 text-sm font-medium">
                            {elem.content}
                        </div>
                        <div className="footer w-full h-8  flex justify-between items-center pt-3 px-2.5">
                            <div className="date text-xs font-semibold">{date}, {month} {year}</div>
                            <>
                                <div className="edit cursor-pointer pl-6">
                                    <span className="edit-btn rounded-full flex justify-center w-8 h-8 bg-gray-100">
                                        <img width="15px" height="15px" src={editImg} alt="edit-icon" />
                                    </span>
                                </div>
                                <div className="delete cursor-pointer">
                                    <span className="delete-btn rounded-full flex justify-center w-8 h-8 bg-gray-100">
                                        <img width="15px" height="15px" src={trashImg} alt="trash-icon" />
                                    </span>
                                </div>
                            </>
                            <div className="hidden-input hidden">
                                <input type="text" className="input" />
                            </div>
                        </div>
                    </div>
                )).reverse()}
            </div>

        </div>
    );
}

export default Mainpage;