import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from './../utils/validate';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase/firebaseConfig";
import { addUser } from "../utils/reduxStore/userSlice";
import { USER_AVATAR } from "../utils/constants";

const useForm = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isForgotPasswordBtnVisible, setIsForgotBtnVisible] = useState(true);
    const dispatch = useDispatch();



    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const fullNameRef = useRef(null);


    const handleSignInorSignOut = () => {
        setIsSignIn(!isSignIn);
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const currentValue = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef?.current?.value,
            fullName: fullNameRef?.current?.value
        }

        try {
            const message = validate(currentValue.email, currentValue.password, currentValue.fullName);
            setErrorMessage(message);
            if (message) return;
            if (isSignIn) {
                if (currentValue.password !== currentValue.confirmPassword) {
                    setErrorMessage("Passwords do not match!");
                    return;
                }
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

    const handleReset = async (e) => {
        e.preventDefault();
        await sendPasswordResetEmail(auth, emailRef?.current?.value);
        alert('Password reset Link is sent to your email');
        setIsForgotBtnVisible(true);
    }
    const handleForgetPassword = (e) => {
        e.preventDefault();
        setIsForgotBtnVisible(false);
    }

    return {
        handleSignInorSignOut,
        handleSubmitForm,
        handleReset,
        handleForgetPassword,
        isSignIn,
        errorMessage,
        isForgotPasswordBtnVisible,
        emailRef,
        passwordRef,
        confirmPasswordRef,
        fullNameRef
    }
}

export default useForm;

