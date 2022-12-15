import { useEffect, useRef } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {} from '../style/Header.scss';

export const Header = () => {
    //변수 정의
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    let checkToken = useRef(false);

    //헤더 제목 정의
    let title = null;
    if(location.pathname === "/") {
        title = "Todo Login";
    } else if(location.pathname === "/signup") {
        title = "Todo Signup";
    } else if(location.pathname === "/todo") {
        title = "Todo";
    }

    useEffect(() => {
        if(token) {
            checkToken.current = true;
        }
    }, [token])
    
    //로그아웃 기능
    const logoutHandler = () => {
        localStorage.removeItem('token');
        checkToken.current = false;
        navigate('/');
    }
    return <>
        <div className='header-div'>
            <h1>{title}</h1>
            {checkToken.current ? <button onClick={logoutHandler}>로그아웃</button> : "" }
        </div>
    </>
}