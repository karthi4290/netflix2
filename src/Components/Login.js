import Header from './Header';
import { BG } from './../utils/constants';
import useForm from '../hooks/useForm';


const Login = () => {
    const {
        handleSignInorSignOut,
        handleForgetPassword,
        handleReset,
        handleSubmitForm,
        isSignIn,
        errorMessage,
        isForgotPasswordBtnVisible,
        emailRef,
        passwordRef,
        confirmPasswordRef,
        fullNameRef
    } = useForm();


    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG} alt="BG" />
            </div>
            <div className=" bg-black bg-opacity-75  absolute w-3/12 right-0 left-0 mx-auto my-36 rounded-lg p-12">
                <form onSubmit={handleSubmitForm} className="text-white" >
                    {isForgotPasswordBtnVisible && <h1 className=" text-4xl font-bold my-4">{isSignIn ? "Sign Up" : "Sign In"}</h1>}
                    {!isForgotPasswordBtnVisible && <h1 className=" text-4xl font-bold my-4">Reset Password</h1>}
                    {isSignIn && <input ref={fullNameRef} type="text" placeholder="Full Name" className="p-2 my-4 w-full rounded-lg  text-black" />}
                    <input ref={emailRef} type="text" placeholder="Email" className="p-2 my-4 w-full rounded-lg text-black" />
                    {isForgotPasswordBtnVisible && <input ref={passwordRef} type="password" placeholder="Password" className="p-2 my-4 w-full rounded-lg  text-black " />}
                    {isSignIn && <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" className="p-2 my-4 w-full rounded-lg  text-black " />}
                    {isForgotPasswordBtnVisible && <button type="submit" className="bg-red-600 my-4 w-full py-2 rounded-lg font-medium">{isSignIn ? "Sign Up" : "Sign In"}</button>}
                    {!isForgotPasswordBtnVisible && <button onClick={handleReset} className="bg-red-600 my-4 w-full py-2 rounded-lg font-medium">Reset</button>}
                    <p className="w-full rounded-lg text-red-600 font-bold" >{errorMessage}</p>
                    {isForgotPasswordBtnVisible && <div className="my-4 flex ">
                        <p className="opacity-70">{isSignIn ? "Already Registered?" : "New to Netflix?"}</p>
                        <b onClick={handleSignInorSignOut} className="cursor-pointer mx-1 hover:underline">{isSignIn ? "Sign in now" : "Sign up now."}
                        </b>
                    </div>}
                    {isForgotPasswordBtnVisible && !isSignIn && <p onClick={handleForgetPassword} className="opacity-70 cursor-pointer hover:underline">Forgot Password?</p>}
                </form>
            </div>
        </div>
    )
}

export default Login