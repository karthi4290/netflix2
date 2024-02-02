import Header from './Header';
import { BG } from './../utils/constants';
import { validate } from '../utils/validate';
import { useRef, useState } from 'react';
import { auth } from './../utils/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [errorMessageDisplay, setErrorMessageDisplay] = useState(false);
    const [isValidateMsg, setIsValidateMsg] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fullNameRef = useRef(null);


    const handleSignInorSignOut = () => {
        setIsSignIn(!isSignIn);
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        //           Validation
        const validateMessage = validate(emailRef?.current?.value, passwordRef?.current?.value,fullNameRef?.current?.value);
        if (validateMessage === null) {
            setErrorMessageDisplay(false);
        }
        setErrorMessageDisplay(true);
        setIsValidateMsg(validateMessage);

        //                 Signup

        //   const userCredential = await  createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        //         const user = userCredential.user;
        //         console.log('user', user);

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
                <form className="text-white" onSubmit={handleSubmitForm}>
                    <h1 className=" text-4xl font-bold my-4">{isSignIn ? "Sign Up" : "Sign In"}</h1>
                    {isSignIn && <input ref={fullNameRef} type="text" placeholder="Full Name" className="p-2 my-4 w-full rounded-lg  text-black" />}
                    <input ref={emailRef} type="text" placeholder="Email" className="p-2 my-4 w-full rounded-lg text-black" />
                    <input ref={passwordRef} type="password" placeholder="Password" className="p-2 my-4 w-full rounded-lg  text-black " />
                    <button type="submit" className="bg-red-600 my-4 w-full py-2 rounded-lg font-medium">{isSignIn ? "Sign Up" : "Sign In"}</button>
                    {errorMessageDisplay && <p className="p-1 my-1 w-full rounded-lg text-red-600 font-bold" >{isValidateMsg}</p>}
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