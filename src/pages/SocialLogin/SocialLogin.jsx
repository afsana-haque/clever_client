import React, { useContext } from 'react';
import { FaGoogle, FaGithub} from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSingIn()
        .then(result => {
           const loggedInUser= result.user;
           console.log(loggedInUser);
        navigate(from, { replace: true });
     
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
        <div className='divider'>OR</div>
        <div className='text-center'>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline mr-4"><FaGoogle/></button>
            <button className="btn btn-circle btn-outline"><FaGithub/></button>
        </div>
    </div>
    );
};

export default SocialLogin;