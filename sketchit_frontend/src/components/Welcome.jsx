import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo.png';
// import logoGrey from '../assets/logo_grey.png';

import { client } from '../client';

function Welcome() {
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

    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl } = response.profileObj;
        const doc = {
          _id: googleId,
          _type: 'user',
          userName: name,
          image: imageUrl,
        };
        client.createIfNotExists(doc).then(() => {
          navigate('/', { replace: true });
        });
      };

      const goToabout = () => {
    
        navigate('/about');
      };
	  
	  // `linear-gradient(to top left, #33b5e5 0%, rgba(51, 181, 229, 0.5) 100%)`

    return (
        <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
      {activeFooter && (
        <div 
          style={{backgroundColor: 'rgba(51, 181, 229, 0.3)'}}
          className="w-full h-full object-cover"
        ></div>
      )}
      {!activeFooter && (
        <div 
          style={{backgroundColor: '#ffffff'}}
          className="w-full h-full object-cover"
        ></div>
      )}
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
        {activeFooter && (
            <div  style={{backgroundColor: '#ffffff', width: 570, height: 400, borderRadius: 25}} className=" flex justify-between items-center p-3 rounded-lg cursor-pointer outline-none">
              <div className="p-5 items-centre  ">
                <img className="pb-1 "src={logo} width="200px" alt="Logo"/>
                <p className="font-bold pb-5" style={{color: '#33b5e5'}}>Lets Sketch Out The World!</p>
                <p className="font-bold" style={{color: 'grey', fontSize: '15px'}}><b>Stock </b> and <b> Share </b> your <b>Favourite</b> &<br></br>  <b> Knowledgeable </b> images  with <b> Full<br></br>  Privacy </b> and <b>Security</b> of your <b>Data. </b></p>

              </div>
              <div className=" flex flex-col justify-center items-center">
                <p className="pb-1 font-bold" style={{color: 'grey'}}>Feel Free to Sign Up,</p>
                <p className="pb-5 font-bold" style={{color: 'grey'}}>It's Safe, Secure & Fast!</p>
              <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                  render={(renderProps) => (
                    <button
                      type="button"
                      style={{ borderColor: '#33b5e5', borderWidth: '4px', borderRadius: '15px', background: 'none' }}
                      className=" flex justify-center items-center p-2 cursor-pointer outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle className="mr-3" /> <span className="font-bold" style={{color: '#33b5e5'}}>Sign Up With Google</span>
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                />

                {/* <button
                  type="button"
                  style={{backgroundColor: '#ffffff'}}
                  className="flex justify-center items-center px-3 p-2 rounded-lg cursor-pointer outline-none"
                  onClick={goToabout}
                  >
                  <span className="font-bold" style={{color: '#33b5e5'}}>More About Us</span>
                </button> */}
                
              </div>
              
            </div>
          )}
          {!activeFooter && (
            <><div className="flex flex-col justify-center items-center">
                <img className="pb-1 "src={logo} width="200px" alt="Logo"/>
                <p className="font-bold pb-4" style={{color: '#33b5e5'}}>Lets Sketch Out The World!</p>
                <p className="font-bold pb-10" style={{color: 'grey', fontSize: '15px'}}><b>Stock </b> and <b> Share </b> your <b>Favourite</b> &<br></br>  <b> Knowledgeable </b> images  with <b> Full<br></br>  Privacy </b> and <b>Security</b> of your <b>Data. </b></p>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <p className=" font-bold" style={{color: '#33b5e5'}}>Feel Free to Sign Up,</p>
                <p className="pb-5 font-bold" style={{color: '#33b5e5'}}>It's Safe, Secure & Fast!</p>
              <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                  render={(renderProps) => (
                    <button
                      type="button"
                      style={{ background: 'none', borderColor: '#33b5e5', borderWidth: '4px', borderRadius: '15px' }}
                      className="bg-mainColor flex justify-center items-center p-2 cursor-pointer outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle className="mr-4" /> <span className="font-bold" style={{color: '#33b5e5'}}>Sign Up With Google</span>
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                />
                {/* <button
                  type="button"
                  style={{background: 'none'}}
                  className="flex justify-center items-center px-3 p-2 rounded-lg cursor-pointer outline-none"
                  onClick={goToabout}
                  >
                  <span className="font-bold" style={{color: '#33b5e5'}}>More About Us</span>
                </button> */}

              </div></>
          )}
        </div>
      </div>
    </div>
    )
}

export default Welcome
