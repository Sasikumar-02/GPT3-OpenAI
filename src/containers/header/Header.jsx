import React from "react";
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1> {/* --gradient__text style is presented in index.css */}
                <p>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="your email address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/> {/*imported a people image named people.png*/}
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>    
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai"/> 
            </div>
        </div>
    );
}


export default Header;