import { useNavigate } from 'react-router-dom';
import { LOGO } from './../utils/constants';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './../utils/firebase/firebaseConfig';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/reduxStore/userSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }

    // Check authentication status on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { photoURL, uid, email, displayName } = user;
                dispatch(addUser({ photoURL, uid, email, displayName }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []);
    return (
        <div className="absolute bg-gradient-to-b from-black  flex justify-between w-full z-10">
            <div className="w-[14%] px-14 ">
                <img src={LOGO} alt="Logo" />
            </div>

            {user &&
                <div className="px-10 my-1.5  text-white flex justify-around ">
                    <button className="mx-3" onClick={handleSignOut} >Sign out</button>
                    < img className="py-3 rounded-full" src={user?.photoURL} />
                </div>
            }
        </div>
    )
}

export default Header
