import React from "react";
import heroImg from "../assets/heroImg.png";

function Home() {
    const textStyle = {
        width: '502px',
        height: '367px',
        gap: '0px',
        opacity: 1,
        fontFamily: 'Roboto',
        fontSize: '50px',
        fontWeight: 700,
        lineHeight: '88px',
        textAlign: 'center',
    };

    const h4Style = {
        fontFamily: 'Roboto',
        fontSize: '40px',
        fontWeight: 400,
        lineHeight: '65px',
        textAlign: 'center',
        position: 'relative',
        top: '-280px',
    };

    const spanStyle = {
        fontFamily: 'Roboto',
        fontSize: '54px',
        fontWeight: 700,
        lineHeight: '65px',
        color: '#1A73E8',
    };

    const btnStyle = {
        width: '30%',
        left: '40%',
        top: '-240px',
        position: 'relative',
        fontFamily: 'Source Sans Pro',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'center',
        backgroundColor: '#1A73E8',
    }

    return (
        <div className="bg-[#EEF5FF] w-3/4 items-center m-20 h-[40%] shadow-lg shadow-[#00072B36] grid grid-rows-2 grid-cols-1">
            <div className="flex flex-col items-center">
                <img src={heroImg} alt="hero-img" className="h-[40%] pt-0 m-0 -mt-3" />
                <div>
                    <h2 style={textStyle} className="pl-5 -mt-10 m-0">
                        Let’s Learn & Earn
                    </h2>
                    <h4 style={h4Style} className="pl-5">
                        Get a chance to win <br/> up-to <span style={spanStyle}>Rs. 15,000</span> 
                    </h4>
                    <button className="pl-[40px] border p-5 text-white rounded-md" style={btnStyle}>Refer Now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
