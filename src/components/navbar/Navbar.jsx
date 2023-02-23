import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'; // importing a few icons (RiMenu3Line, RiCloseLine) from a react-icons/ri
import './navbar.css'
import logo from '../../assets/logo.svg'
//BEM - a specific CSS naming convention called BEM (Black Element Modifier) eg: gpt3__navbar
const Button = () => (
    <>
    <p>Sign in</p>
    <button type="button">Sign up</button>
    </>
)
const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Libraries</a></p>
    </>
    
)

const Navbar = () => {
    // toggleMenu -> variable and setToggleMenu -> function that is going to allow us to change that variable by using useState() and useState() initially set to "false"
    const {toggleMenu, setToggleMenu} = useState(false);  
    

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="gpt3__navbar-links_container">
                    {/* <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Libraries</a></p> */}

                    {/* instead of writing the above lines we can call the Menu() funtion here to get the above lines */}
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <Button/>
            </div>        

            {/* the below mentioned lines of code is for mobile and tablet view          */}

            <div className="gpt3__navbar-menu">
                { toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={ ()=> setToggleMenu(false)}/> //if it is not currently open then go to the below line -> "it is as like if-else statement"
                    : <RiMenu3Line color="#fff" size={27} onClick={ ()=> setToggleMenu(true)}/> // it will execute if the above line didn't executed
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <Button/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;