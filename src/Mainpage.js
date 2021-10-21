import editImg from "./img/edit.svg"
import trashImg from "./img/trashblack.svg"
import handleNewNoteCreate from "./js/main";
import 'animate.css';
import { useState } from "react";
const Mainpage = () => {

    const allNotesObject = handleNewNoteCreate();
    // let localData = localStorage.getItem("Notes"
    let myNotes = localStorage.getItem("Notes")
    myNotes = myNotes ? JSON.parse(myNotes) : [];


    // Handle Dates
    const myDate = new Date();
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let day = myDate.getDate()
    let month = allMonths[myDate.getMonth()]
    let year = myDate.getFullYear()

    // Handle Delete
    const handleDelete = function (e) {
        const confirmDelete = e.target.parentElement.parentElement.nextSibling;
        if (e.target.classList.contains("trash-img")) {
            const noteContent = e.target.parentElement.parentElement.nextSibling.parentElement.parentElement.firstChild.textContent
            e.target.parentElement.parentElement.nextSibling && e.target.parentElement.parentElement.nextSibling.classList.toggle("hidden")
            if (!e.target.parentElement.parentElement.nextSibling.classList.contains("hidden")) {
                e.target.parentElement.parentElement.nextSibling.lastChild.firstChild && e.target.parentElement.parentElement.nextSibling.lastChild.firstChild.addEventListener("click", (e) => {
                    // Yes
                    e.stopPropagation();
                    confirmDelete.classList.add("hidden")
                    let meNotes = localStorage.getItem("Notes");
                    meNotes = JSON.parse(meNotes);
                    let filteredNotes = meNotes.filter(elem =>
                        (elem.content !== noteContent)
                    )

                    localStorage.clear();
                    localStorage.setItem("Notes", JSON.stringify(filteredNotes))
                    window.location.reload()

                })
                e.target.parentElement.parentElement.nextSibling.lastChild.lastChild && e.target.parentElement.parentElement.nextSibling.lastChild.lastChild.addEventListener("click", (e) => {
                    //    No
                    e.stopPropagation();
                    confirmDelete.classList.add("hidden")
                })
            }

        }


    }

    // Handle edit
    const handleEdit = function (e) {
        if (e.target.classList.contains("edit-img")) {
            const noteContent = e.target.parentElement.parentElement.nextSibling.parentElement.parentElement.firstChild.textContent
            const headParent = e.target.parentElement.parentElement.nextSibling.parentElement.parentElement;
            headParent.firstChild.classList.add("hidden");
            headParent.firstChild.nextSibling.classList.add("hidden");
            headParent.lastChild.classList.remove("hidden");

        }
    }


    // Handle Save
    const [content, setContent] = useState()
    function HandleSaveNote(e) {
        e.stopPropagation();
        let myNotesUnparsed = localStorage.getItem("Notes")
        let allNotesObjectEdit = myNotesUnparsed ? JSON.parse(myNotesUnparsed) : [];

        let editContent = e.target.parentElement.previousSibling.textContent;
        let theContent;
        let color;
        let date;
        let currentContent;
        let updatedDate = `${day}, ${month} ${year}`;
        let index;
        let myColor = e.target.parentElement.previousSibling.classList[0];
        for (const [i, elem] of allNotesObjectEdit.entries()) {
            if (elem.content === editContent) {
                theContent = allNotesObjectEdit[i];
                currentContent = theContent.content
                color = theContent.color;
                date = theContent.date;
            }
        }

        let edittedContent;
        // When the content is edited
        if (content !== undefined) {
            edittedContent = { color: myColor, content, date: updatedDate };
        }
        else {
            // When the content is not changed 
            edittedContent = { color, currentContent, date }
        }
        // console.log("CurrentCont----", edittedContent);
        index = e.target.parentElement.parentElement.parentElement.getAttribute("data-title");

        // console.log("EDITTED-BEFORE-------", allNotesObjectEdit);
        let edittedAllNotesObjectEdit = allNotesObjectEdit.slice();
        let deleted = edittedAllNotesObjectEdit.splice(index, 1, edittedContent)
        // console.log("EDITTED-AFTER-------", edittedAllNotesObjectEdit);
        localStorage.clear();
        localStorage.setItem("Notes", JSON.stringify(edittedAllNotesObjectEdit));
        window.location.reload();
        setTimeout(() => {
            e.target.parentElement.parentElement.parentElement.classList.add("hidden");
        }, 400)

    }

    // Handle Cancel Note
    function handleCancelNote(e) {
        e.stopPropagation()
        window.location.reload()
        setTimeout(() => {
            e.target.parentElement.parentElement.parentElement.classList.add("hidden");
        }, 400)
    }


    // TODO
    // 1. Delete only exact index
    // 2. Don't create an empty note


    return (
        <div className="content mainpage-content col-span-9 md:col-span-10 w-full fontfam-regular pt-16 pl-16 md:pl-7 px-7">
            <div className="header font-semibold text-3xl pl-4 md:pl-0">
                Notes
            </div>
            <div className="all-notes grid grid-cols-12 gap-5 py-5">
                {allNotesObject && allNotesObject.map((elem, i) => (
                    <div className={`note ${elem.color} h-48 w-52 rounded-3xl col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 overflow-hidden relative animate__animated animate__fadeInUp`} key={i + 1} data-title={i}>
                        <div className="visible-text content-start h-36 p-3 overflow-y-auto pb-2 text-sm font-medium">
                            {elem.content}
                        </div>
                        <div className="footer w-full h-8  flex justify-between items-center pt-3 px-2.5">
                            <div className="date text-xs font-semibold">{elem.date}</div>
                            <>
                                <div className="edit cursor-pointer pl-6" onClick={handleEdit}>
                                    <span className="edit-btn rounded-full flex justify-center w-8 h-8 bg-gray-100 hover:bg-gray-300">
                                        <img className="edit-img" width="16px" height="15px" src={editImg} alt="edit-icon" />
                                    </span>
                                </div>
                                <div className="delete cursor-pointer" onClick={handleDelete}>
                                    <span className="delete-btn rounded-full flex justify-center w-8 h-8 bg-gray-100 hover:bg-gray-300" >
                                        <img className="trash-img" width="15px" height="15px" src={trashImg} alt="trash-icon" />
                                    </span>
                                </div>
                                <div className="absolute confirm-message bg-gray-300 px-4 py-1 rounded-xl bottom-2 right-2 border border-red-300 shadow-xl hidden">
                                    <span ><span className="text-red-400 font-semibold">Delete?</span> Are you sure?</span>
                                    <span className="answer flex justify-center font-semibold py-2">
                                        <span className="yes bg-red-200 hover:bg-red-300 px-2 rounded-md border border-red-300 mx-2 cursor-pointer">yes</span>
                                        <span className="no bg-gray-100 hover:bg-gray-200 px-2 rounded-md border border-red-300 mx-2 cursor-pointer">no</span>
                                    </span>
                                </div>
                            </>
                        </div>
                        <div className={`${elem.color} new-note px-6 pt-3 text-sm h-48 w-52 rounded-3xl col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 overflow-hidden border-gray-300 hidden`}>
                            <textarea className={`${elem.color} new-note-textarea text-sm h-36 w-40 overflow-x-hidden overflow-y-auto border-gray-400 border p-3 pb-0 rounded-md`} value={content} onChange={(e) => setContent(e.target.value)} >
                                {elem.content}
                            </textarea>
                            <div className="h-10 flex justify-center items-center">
                                <div className="save-btn cursor-pointer rounded-md px-2.5 mx-1.5 mb-2 flex text-center bg-gray-100 font-semibold" onClick={HandleSaveNote}>Save</div>
                                <div className="cancel-btn cursor-pointer rounded-md px-2.5 mx-1.5 mb-2 flex text-center bg-gray-100 font-semibold" onClick={handleCancelNote}>Cancel</div>
                            </div>
                        </div>
                    </div>
                )).reverse()}
            </div>

        </div>
    );

}

export default Mainpage;