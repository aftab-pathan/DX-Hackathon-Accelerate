import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from "../config/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useMemo } from "react";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    setDoc
} from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type FirebaseProviderProps = {
    readonly children: React.JSX.Element
}


const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

//connect with firebase app
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
    const [user, setUser] = useState(null);
    const navigation = useNavigate();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                console.log(user)
                const docRef = doc(firestore, "Users", user.uid);
                getDoc(docRef).then((doc) => {
                    if (doc.exists()) {
                        setUser(doc.data());
                    }
                })
            } else {
                setUser(null);
            }
        });
    }, []);

    const signupUserWithEmailAndPassword = async (email: string, password: string, firstName: string, lastName: string) => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            const user = firebaseAuth.currentUser;
            if (user) {
                await setDoc(doc(firestore, "Users", user.uid), {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName
                });
            }
            toast.success("User Registered Successfully!!", {
                position: "top-center",
            });
            navigation("/login");
        } catch (error) {
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    }

    const signinWithGoogle = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            const user = result.user;
            if (result.user) {
                const collectionRef = collection(firestore, "userRole");
                const q = query(collectionRef, where("userEmail", "==", user.email));
                const result = await getDocs(q);
                console.log(result)
                await setDoc(doc(firestore, "Users", user.uid), {
                    email: user.email,
                    firstName: user.displayName,
                    lastName: "",
                    userRole: result?.docs?.userRole || ["user"]
                });
                toast.success("User logged in Successfully", {
                    position: "top-center",
                });
                navigation("/");
            }
        } catch (e) {
            toast.success(e.message, {
                position: "top-center",
            });
        }
    }

    const singinUserWithEmailAndPassword = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
            navigation("/");
            toast.success("User logged in Successfully", {
                position: "top-center",
            });
        } catch (error) {
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    }

    const createWork = async () => {
        try {
            return await addDoc(collection(firestore, "works"), {
                workTitle,
                workDescription,
                workStatus,
                createdBy: user.uid,
                estimated : user.email,
                category : user.displayName,
                skills ,
                payout,
                domain,
                client,
                assignee,
                approve,
                approveBy,
                appliedUsersIds
              });
        } catch (error) {
            
        }
    }

    const createUserWorkProfile = async () => {
        try {
            return await addDoc(collection(firestore, "userWorkProfile"), {
                experience,
                skills,
                description,
                unit,
                appliedJobIds
              });
        } catch (error) {
            
        }
    }

    const getWorkList = ()=>{

    }

    const getUserWorkProfile = ()=>{

    }

    const getUserDetails = ()=>{}

    const valueObj = useMemo(() => ({
        user,
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPassword,
        signinWithGoogle,
        createWork
    }), []);

    return (
        <FirebaseContext.Provider value={valueObj} >
            {children}
        </FirebaseContext.Provider>
    );
};