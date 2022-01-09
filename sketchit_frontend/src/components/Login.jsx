import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo.png';
import logoGrey from '../assets/logo_grey.png';

import { client } from '../client';

const Login = () => {
  // const [showPopUp, setShowPopUp] = useState(true)
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

  const goBack = () => {
    
    navigate('/welcome');
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
      {activeFooter && (
        <div 
          style={{backgroundImage: `linear-gradient(to top left, #33b5e5 0%, #ccffff 100%)`}}
          className="w-full h-full object-cover"
        ></div>
      )}
      {!activeFooter && (
        <div 
          style={{backgroundImage: `linear-gradient(to top left, #E1D9D1 0%, #F5F5F5 100%)`}}
          className="w-full h-full object-cover"
        ></div>
      )}

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
        {activeFooter && (
            <div  style={{backgroundColor: '#ffffff', width: 300, height: 300, borderRadius: 25}} className="h-200 w-200 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none">
              <div className="flex flex-col justify-center items-center">
                <p className="pb-1 font-bold" style={{color: 'grey'}}>Feel Free to Sign Up,</p>
                <p className="pb-5 font-bold" style={{color: 'grey'}}>It's Safe, Secure & Fast!</p>
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                  render={(renderProps) => (
                    <button
                      type="button"
                      style={{ borderColor: '#33b5e5', borderWidth: '4px' }}
                      className="bg-mainColor flex justify-center items-center p-2 rounded-lg cursor-pointer outline-none"
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

                <button
                  type="button"
                  style={{backgroundColor: '#ffffff'}}
                  className="flex justify-center items-center px-3 p-2 rounded-lg cursor-pointer outline-none"
                  onClick={goBack}
                  >
                  <span className="font-bold" style={{color: '#33b5e5'}}>Go Back</span>
                </button>
              </div>
            </div>
          )}
          {!activeFooter && (
            <>
            <div className=" flex flex-col justify-center items-center">
                <p className="pb-1 pt-5 font-bold" style={{ color: '#33b5e5' }}>Feel Free to Sign In,</p>
                <p className="pb-8 font-bold" style={{ color: '#33b5e5' }}>It's Safe, Secure & Fast!</p>
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                  render={(renderProps) => (
                    <button
                      type="button"
                      style={{ borderColor: '#33b5e5', borderWidth: '4px', borderRadius: '25px' }}
                      className="bg-mainColor flex justify-center items-center p-2  cursor-pointer outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle className="mr-4" /> <span className="font-bold" style={{ color: '#33b5e5' }}>Sign In With Google</span>
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin" />

                <button
                  type="button"
                  style={{background: 'none'}}
                  className="flex justify-center items-center px-3 p-2 rounded-lg cursor-pointer outline-none"
                  onClick={goBack}
                  >
                  <span className="font-bold" style={{color: 'grey'}}>Go Back</span>
                </button>
              </div></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;