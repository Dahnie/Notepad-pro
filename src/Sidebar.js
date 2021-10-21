import plusGray from "./img/plusgray.svg"
import 'animate.css';

const Sidebar = () => {
    return (
        <div className="content sidebar-content col-span-3 md:col-span-2 fontfam-regular text-base fontfam-regular w-full border-r border-gray-300 pt-16">
            <div className="app-name font-semibold text-sm md:text-lg flex justify-center">Notepad-pro</div>
            <div className="add-color pt-14">
                <div className="add-btn w-full flex justify-center cursor-pointer">
                    <span className="plus-btn bg-black rounded-full flex justify-center w-12 h-12">
                        <img width="25px" height="25px" src={plusGray} alt="icon" />
                    </span>
                </div>
                <div className="colors p-2 pt-8 w-full justify-center hidden transform transition-all animate__animated animate__fadeInUp">
                    <div className="colors-list">
                        <div className="each-color color-1 w-6 h-6 bg-colorOne rounded-full my-4 cursor-pointer"></div>
                        <div className="each-color color-2 w-6 h-6 bg-colorTwo rounded-full my-4 cursor-pointer"></div>
                        <div className="each-color color-3 w-6 h-6 bg-colorThree rounded-full my-4 cursor-pointer"></div>
                        <div className="each-color color-4 w-6 h-6 bg-colorFour rounded-full my-4 cursor-pointer"></div>
                        <div className="each-color color-5 w-6 h-6 bg-colorFive rounded-full my-4 cursor-pointer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;