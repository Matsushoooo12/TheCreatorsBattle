import { auth, db, googleProvider } from '../firebase/config'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import dayjs from 'dayjs'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useOAuthLogin = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')
  const now = dayjs().format()
  // Googleログイン
  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const user = []
        querySnapshot.forEach((doc) => {
          user.push(doc.id)
        })
        if (!user.includes(res.user.uid)) {
          await setDoc(doc(db, 'users', res.user.uid), {
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
            createdAt: now,
          })
            .then(() => {
              router.push('/')
            })
            .catch((e) => {
              setErrorMessage(e)
            })
        }
        router.push('/')
      })
      .catch((e) => {
        setErrorMessage(e)
      })
  }
  return {
    googleLogin,
    errorMessage,
  }
}
