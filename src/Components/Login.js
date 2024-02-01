import Header from './Header';
import { BG } from './../utils/constants';
import { useState } from 'react';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);


    const handleSignInorSignOut = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <>
            <div className="absolute bg-gradient-to-b from-black z-10 ">
                <Header />
            </div>
            <div className="absolute">
                <img src={BG} alt="BG" />
            </div>
            <div className=" bg-black bg-opacity-75  absolute w-3/12 right-0 left-0 mx-auto my-36 rounded-lg p-12">
                <form className="text-white">
                    <h1 className=" text-4xl font-bold my-4">{isSignIn ? "Sign Up" : "Sign In"}</h1>
                    {isSignIn && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full rounded-lg " />}

                    <input type="email" placeholder="Email" className="p-2 my-4 w-full rounded-lg " />
                    <input type="password" placeholder="Password" className="p-2 my-4 w-full rounded-lg" />
                    <button className="bg-red-600 my-4 w-full py-2 rounded-lg font-medium">{isSignIn ? "Sign Up" : "Sign In"}</button>
                    <div className="my-4 flex ">
                        <p className="opacity-70">{isSignIn ? "Already Registered?" : "New to Netflix?"}</p>
                        <b onClick={handleSignInorSignOut} className="cursor-pointer mx-1 hover:underline">{isSignIn ? "Sign in now" : "Sign up now."}
                        </b>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Login