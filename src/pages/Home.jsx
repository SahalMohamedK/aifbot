import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'

export default function Home() {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    async function loginWithGoogle() {
        await signInWithPopup(auth, provider).then((result) => {
            navigate("/overview");
        }).catch((error) => {
            alert(error)
        });
    }

    return (
        <div className='relative h-screen pt-10'>
            <div className='text-center text-6xl font-bold'>AIF Bot</div>
            <button className='center btn-primary' onClick={loginWithGoogle}>Sign in with google</button>
        </div>
    )
}
