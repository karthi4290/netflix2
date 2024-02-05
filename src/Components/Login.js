import Header from './Header';
import { BG, USER_AVATAR } from './../utils/constants';
import { validate } from '../utils/validate';
import { useRef, useState } from 'react';
import { auth } from './../utils/firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/reduxStore/userSlice';


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();


    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fullNameRef = useRef(null);


    const handleSignInorSignOut = () => {
        setIsSignIn(!isSignIn);
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const currentValue = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            fullName: fullNameRef.current?.value
        }
        try {
            const message = validate(currentValue.email, currentValue.password, currentValue.fullName);
            setErrorMessage(message);
            if (message) return;
            if (isSignIn) {
                await createUserWithEmailAndPassword(auth, currentValue.email, currentValue.password)
                await updateProfile(auth.currentUser, {
                    displayName: currentValue.fullName,
                    photoURL: USER_AVATAR
                });
                const { photoURL, uid, email, displayName } = auth.currentUser
                dispatch(addUser({ photoURL, uid, email, displayName }));
            } else {
                await signInWithEmailAndPassword(auth, currentValue.email, currentValue.password);
            }

        } catch (error) {
            setErrorMessage(error.message)
        }
    }






    return (
        <div>
            <Header />
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
                    <p className="w-full rounded-lg text-red-600 font-bold" >{errorMessage}</p>
                    <div className="my-4 flex ">
                        <p className="opacity-70">{isSignIn ? "Already Registered?" : "New to Netflix?"}</p>
                        <b onClick={handleSignInorSignOut} className="cursor-pointer mx-1 hover:underline">{isSignIn ? "Sign in now" : "Sign up now."}
                        </b>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login