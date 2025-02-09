import { useContext } from "react";
import SignInComponent from "./SignInComponent/SignInComponent";
import SignUpComponent from "./SignUpComponent/SignUpComponent";
import { userContext } from "../MainComponent/MainComponent";

const AuthComponent = () =>{
    const contextData = useContext(userContext);
    return(
        <>
        {contextData.isSignUp ? <SignUpComponent /> : <SignInComponent />}
        </>
    )
}

export default AuthComponent;