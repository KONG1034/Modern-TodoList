import { useRef } from 'react';
import {classes} from '../style/Login.scss';
import { Link } from 'react-router-dom';


export const Login = () => {
    //입력값 정의
    const idRef = useRef(null);
    const pwRef = useRef(null);

    //클릭 함수
    const signinHandler = () => {
        console.log("로그인");
    }
    return <>
        <div className='login-all-div'>
            <div className='login-id-div'>
                <div className='login-label-div'><label htmlFor="id">아이디</label></div>
                <div className='login-input-id-div'><input type="text" id="id" name="id" ref={idRef}/></div>
            </div>
            <div className='login-pw-div'>
                <div className='login-label-div'><label htmlFor="id">비밀번호</label></div>
                <div className='login-input-pw-div'><input type="password" id="id" name="id" ref={pwRef}/></div>
            </div>
            <div className='login-btn-div'>
                <button onClick={signinHandler} className='signin-btn'>로그인</button>
                <Link to="/signup"><button className='signup-btn'>회원가입</button></Link>
            </div>
        </div>
    </>
}