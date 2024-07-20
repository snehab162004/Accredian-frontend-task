import React from "react";
import heroImg from "../assets/heroImg.png";

function Home() {
    const textStyle = {
        width: '502px',
        height: '100px',
        opacity: 1,
        fontFamily: 'Roboto',
        fontSize: '50px',
        fontWeight: 700,
        lineHeight: '88px',
        textAlign: 'center',
        top: '200px',
    };

    const h4Style = {
        fontFamily: 'Roboto',
        fontSize: '40px',
        fontWeight: 400,
        lineHeight: '65px',
        textAlign: 'center',
        position: 'relative',
        top: '-30px',  
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
        position: 'relative',
        top: '-30px', 
        fontFamily: 'Source Sans Pro',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'center',
        backgroundColor: '#1A73E8',
    };

    return (
        <div className="bg-[#EEF5FF] w-3/4 items-center m-20 mx-auto mt-[40px] h-auto shadow-lg shadow-[#00072B36] grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
                <div className="text-center">
                    <h2 style={textStyle} className="pl-5">
                        Let’s Learn & Earn
                    </h2>
                    <h4 style={h4Style} className="pl-5">
                        Get a chance to win <br /> up to <span style={spanStyle}>Rs. 15,000</span> 
                    </h4>
                    <button className="pl-5 border p-5 text-white rounded-md mt-5" style={btnStyle}>Refer Now</button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img src={heroImg} alt="hero-img" className="w-[70%] pl-[20px]" />
            </div>
        </div>
    );
}

export default Home;
