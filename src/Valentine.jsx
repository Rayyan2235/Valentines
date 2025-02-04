import React, { useState, useEffect } from 'react';
import profilePic from './assets/Hearts.png'




const NavButton = ({ text, onClick, className, style }) => {
    return <button className={className} onClick={onClick} style={style}>{text}</button>;
};


function Valentine(){
    const [activeTab, setActiveTab] = useState('home')
    const [position, setPosition] = useState({x:150, y:0});

    useEffect(() => {
        console.log("Button position updated:", position);
    }, [position]); // Logs when position updates






    const handleClickNo = () => {
        // Get the window dimensions, accounting for button size
        const maxWidth = window.innerWidth - 100;  // 100px for button width
        const maxHeight = window.innerHeight - 50;  // 50px for button height
       // Determine x coordinate 
    // If it's the first click (x is still 150), move slightly from initial position
    // Otherwise, generate a completely random x position
    const newX = position.x === 150 
        ? position.x + Math.floor(Math.random() * 100) 
        : Math.max(0, Math.floor(Math.random() * maxWidth));

    // Same logic for y coordinate
    // If y is still 0, move slightly 
    // Otherwise, generate a completely random y position
    const newY = position.y === 0 
        ? position.y + Math.floor(Math.random() * 100) 
        : Math.max(0, Math.floor(Math.random() * maxHeight));

    // Update the position state with the new coordinates
    setPosition({ x: newX, y: newY });

    };


    

    return(
        <div style={{ position: 'relative', height: '400px', width: '400px' }}> {/* Set width too */}
            
            {activeTab === 'home' && (
                <>
                <div className="background">
                    <b><h1 className='header'><b> Will you be my Valentine?</b></h1></b>
                    
                
                    <nav>
                        <div className="button-container">
                        <NavButton className= 'yes' text="Yes"  onClick={() => setActiveTab('yes')} />
                        <NavButton 
                            className="no" 
                            text="No" 
                            onClick={handleClickNo} 
                            style={{
                                position: position.x === 150 ? 'static' : 'fixed',
                                left: `${position.x}px`,
                                top: `${position.y}px`,
                                transition: 'all 0.2s ease'
                            }}
                        
                            
                        />
                        </div>
                        
                       </nav>
                       </div>
                       
                       
                </>
                

            )}
            
            <div className="background">

            {activeTab === 'yes' &&(

                <h2> Aight, Lets go Fortnite date this Friday </h2>



            
            )} 
            </div>

        
        </div>
    );

};

export default Valentine;