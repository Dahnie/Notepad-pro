// import "./img/plusgray.svg";
const handleNewNoteCreate = function () {
    let newColor;
    let newContent;
    let newDate;
    let saveCreatebtn;



    let localData = localStorage.getItem("Notes")
    // console.log("First Render", localData);

    let allNotesObject = localData ? JSON.parse(localData) : [
        // {
        //     color: "bg-colorFour",
        //     content: "Create new notes...",
        // },
        // {
        //     color: "bg-colorOne",
        //     content: "lorem ipsun dolor dolor lorem ipsun dolor dolor "
        // },
        // {
        //     color: "bg-colorFive",
        //     content: "lorem ipsun dolor dolor lorem ipsun dolor dolor "
        // },
        // {
        //     color: "bg-colorFour",
        //     content: "lorem ipsun dolor dolor lorem ipsun dolor dolor "
        // },
        // {
        //     color: "bg-colorThree",
        //     content: "I want to become better than i was yesterday"
        // }
    ]



    window.addEventListener("load", () => {


        localStorage.setItem("Notes", JSON.stringify(allNotesObject));
        let myNotesUnparsed = localStorage.getItem("Notes")
        allNotesObject = JSON.parse(myNotesUnparsed)
        // console.log(JSON.stringify(allNotesObject));

        const colorsBar = document.querySelector(".colors");
        const addColorBtn = document.querySelector(".add-btn");
        const eachColor = document.querySelectorAll(".each-color");
        const allNotesSection = document.querySelector(".all-notes");

        const createNewNote = function (color) {
            const newElemDiv = document.createElement("div")
            const newElem = document.createElement("textarea")
            const saveContentDiv = document.createElement("div")
            const saveContentElem = document.createElement("div")
            const cancelContentElem = document.createElement("div")
            saveContentElem.append("Save")
            cancelContentElem.append("Cancel")
            saveContentElem.classList.add("save-btn", "cursor-pointer", "rounded-md", "px-2.5", "mx-1.5", "mb-2", "flex", "text-center", "bg-gray-100", "font-semibold")
            cancelContentElem.classList.add("cancel-btn", "cursor-pointer", "rounded-md", "px-2.5", "mx-1.5", "mb-2", "flex", "text-center", "bg-gray-100", "font-semibold")
            saveContentDiv.classList.add("h-10", "flex", "justify-center", "items-center")
            saveContentDiv.append(saveContentElem)
            saveContentDiv.append(cancelContentElem)
            newElemDiv.classList.add(`bg-color${color}`, "new-note", "px-6", "pt-3", "text-sm", "h-48", "w-52", "rounded-3xl", "col-span-12", "md:col-span-6", "lg:col-span-3", "overflow-x-hidden", "overflow-y-hidden", "border-gray-300")
            newElem.classList.add(`bg-color${color}`, "new-note-textarea", "text-sm", "h-36", "w-40", "overflow-x-hidden", "overflow-y-auto", "border-gray-400", "border", "p-3", "pb-0", "rounded-md")
            newElemDiv.insertAdjacentElement("afterbegin", newElem)
            newElemDiv.insertAdjacentElement("beforeend", saveContentDiv)
            allNotesSection.insertAdjacentElement("afterbegin", newElemDiv)

            // Handle Cancel
            let cancelCreatebtn = document.querySelector(".cancel-btn");
            let newNoteDiv = document.querySelector(".new-note");
            newNoteDiv.addEventListener("mouseover", (e) => {
                e.stopPropagation();
                if (cancelCreatebtn) {
                    cancelCreatebtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        cancelCreatebtn.parentElement.parentElement.remove();
                    })
                }
            })


            // Handle Save
            saveCreatebtn = document.querySelector(".save-btn");
            function saveNote(e) {
                e.stopPropagation();
                newContent = saveCreatebtn.parentElement.previousSibling.value;
                newColor = color;

                const myDate = new Date();
                const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

                let date = myDate.getDate()
                let month = allMonths[myDate.getMonth()]
                let year = myDate.getFullYear()

                newDate = `${date}, ${month} ${year}`

                allNotesObject.push({
                    color: `bg-color${color}`,
                    content: `${newContent}`,
                    date: `${newDate}`
                })

                localStorage.setItem("Notes", JSON.stringify(allNotesObject))
                // console.log(allNotesObject)

                myNotesUnparsed = localStorage.getItem("Notes")

                allNotesObject = JSON.parse(myNotesUnparsed);
                saveCreatebtn.parentElement.parentElement.remove();

                window.location.reload();


            }
            if (saveCreatebtn) {
                saveCreatebtn.addEventListener("click", saveNote)
            }
        }

        // Handle Create
        eachColor.forEach(colorElem => {
            colorElem.addEventListener("click", (e) => {
                e.stopImmediatePropagation()
                if (colorElem.classList.contains("color-1")) {
                    createNewNote("One");
                } else if (colorElem.classList.contains("color-2")) {
                    createNewNote("Two")
                } else if (colorElem.classList.contains("color-3")) {
                    createNewNote("Three")
                }
                else if (colorElem.classList.contains("color-4")) {
                    createNewNote("Four")
                }
                else if (colorElem.classList.contains("color-5")) {
                    createNewNote("Five")
                }
            })
        });

    })


    return allNotesObject;
}

export default handleNewNoteCreate;




