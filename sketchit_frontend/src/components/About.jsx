import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
    const [activeFooter, setActiveFooter] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
  
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
  
        window.addEventListener('resize', handleResize)
  
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize)
    }, []);
  
    useEffect(() => {
        if(screenSize < 768) {
            setActiveFooter(false)
        }
        else {
            setActiveFooter(true)
        }
    }, [screenSize])
	
	var arrow = '<'
	var backarrow = '>'
	
	const goToHome = () => {
    
        navigate('/');
      };

  return (
    <div>
        {activeFooter && (
            <div style={{backgroundColor: '#f5f5f5'}}>
				<div style={{backgroundColor: 'rgba(51, 181, 229, 1)'}}>
					<button
                    type="button"
                    style={{ marginLeft: '5px', paddingTop: '10px', background: 'none' }}
                    className=" flex justify-center items-center p-2 cursor-pointer outline-none"
                    onClick={goToHome}
					>
                     <span className="font-bold" style={{color: 'white', fontSize: '19px'}}> {arrow} Back To Home</span>
				</button>
				</div>
                <h1 style={{fontSize: '25px', paddingLeft: '15px', paddingTop: '20px', fontWeight: 'bold', color: '#33b5e5' }}>What is SketchIt?</h1>
                <p style={{fontSize: '18px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>SketchIt is a Image Sharing Social Media Platform that offers you the opportunity to stock and <br></br> share  your favourite images. If you are someone who has a knack for photography or even who <br></br>  loves to write quotes, then SketchIt is the perfect place for you. You can share skillful <br></br> photographs, quotes, memes, and many more. We would love to welcome all informational <br></br> and knowledgeable images. </p>
                <p style={{fontSize: '18px', paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold', color: 'grey'}}>The main purpose of developing this app is to remove the Bad Aspect from Social Media  so that <br></br> everyone can enjoy and use it for Good Cause. It is an enjoyable and useful platform for all users. </p>
				<p style={{fontSize: '25px', paddingLeft: '15px', paddingTop: '20px', fontWeight: 'bold', color: '#33b5e5'}}>Why SketchIt?</p>
                <p style={{fontSize: '18px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>~ We don't use the User's data. Their data is safe with us. We value their privacy above all else. </p>
                <p style={{fontSize: '18px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>~ We don't use data for any in-app advertisements.</p>
                <p style={{fontSize: '18px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>~ We don't allow any inappropriate content. Users with any inappropriate content will be blocked.</p>
                <p style={{fontSize: '22px', padding: '10px', fontWeight: 'bold', color: '#33b5e5'}}>So, Lets Sketch Out The World!</p>
				
                <p style={{fontSize: '16px', paddingLeft: '10px', paddingTop: '20px', fontWeight: 'bold', color: '#33b5e5'}}>SketchIt <span style={{color:'grey'}}> From</span> LightWay</p>
                <p style={{fontSize: '16px', paddingLeft: '10px', paddingTop: '5px', paddingBottom: '10px', fontWeight: 'bold', color: '#33b5e5'}}> © 2021 - 2022 | All rights reserved </p>
            </div>
        )}
        {!activeFooter && (
            <div style={{backgroundColor: 'f5f5f5'}}>
				<div style={{backgroundColor: 'rgba(51, 181, 229, 1)'}}>
					<button
                    type="button"
                    style={{ marginLeft: '5px', paddingTop: '10px', background: 'none' }}
                    className=" flex justify-center items-center p-2 cursor-pointer outline-none"
                    onClick={goToHome}
					>
                     <span className="font-bold" style={{color: 'white', fontSize: '19px'}}> {arrow} Back To Home</span>
				</button>
				</div>

                <h1 style={{fontSize: '30px', paddingLeft: '15px', paddingTop: '20px', fontWeight: 'bold', color: '#33b5e5'}}>What is SketchIt?</h1>
                <p style={{fontSize: '16px', paddingLeft: '20px', paddingRight: '10px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>SketchIt is a Image Sharing Social Media Platform that offers you the opportunity to stock and share   your favourite images. If you are someone who has a knack for photography or even who loves to write quotes, then SketchIt   is the perfect place for you. You can share skillful  photographs, quotes, memes, and many more. We would  love to welcome all informational and knowledgeable images. </p>
                <p style={{fontSize: '16px', paddingLeft: '20px', paddingRight: '10px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>The main purpose of developing this app is to remove the Bad Aspect from Social Media  so that  everyone can enjoy and use it for Good Cause. It is an enjoyable and useful platform for all users. </p>
                <p style={{fontSize: '30px', paddingLeft: '15px', paddingTop: '40px', fontWeight: 'bold', color: '#33b5e5'}}>Why SketchIt?</p>
                <p style={{fontSize: '16px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>~ We don't use the User's data. Their data is safe with us. We value their privacy above all else. </p>
                <p style={{fontSize: '16px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>~ We don't use data for any in-app advertisements.</p>
                <p style={{fontSize: '16px', paddingLeft: '20px', paddingTop: '20px', fontWeight: 'bold', color: 'grey'}}>~ We don't allow any inappropriate content. Users with any inappropriate content will be blocked.</p>
                <p style={{fontSize: '18px', padding: '10px', fontWeight: 'bold', color: '#33b5e5'}}>So, Lets Sketch Out The World!</p>
			
                <p style={{fontSize: '16px', paddingLeft: '10px', paddingTop: '20px', fontWeight: 'bold', color: '#33b5e5'}}>SketchIt <span style={{color:'grey'}}> From</span> LightWay</p>
                <p style={{fontSize: '16px', paddingLeft: '10px', paddingTop: '5px', paddingBottom: '10px', fontWeight: 'bold', color: '#33b5e5'}}> © 2021 - 2022 | All rights reserved </p>
				
            </div>
        )}
    </div>
  )
};

export default About