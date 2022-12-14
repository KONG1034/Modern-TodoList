import { useRef } from 'react';
import {classes} from '../style/Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { emailCheck } from '../util/emailCheck';
import axios from "axios";


export const Login = () => {
    //입력값 정의
    const idRef = useRef(null);
    const pwRef = useRef(null);
    const navigate = useNavigate();

    //로그인 기능
    const signinHandler = async () => {
        const userData = {
            "email":idRef.current.value,
            "password":pwRef.current.value
        }
        const headers = {
            "Content-Type" : "application/json"
        }
        if(emailCheck(userData.email) === true
        && userData.password.length >= 8) {
            await axios.post("https://pre-onboarding-selection-task.shop/auth/signin",
            userData,
            {headers})
            .then(res => {
                if(res.status === 200) {
                    localStorage.setItem("token", res.data.access_token);
                    navigate("/todo");
                }
            })
            .catch(err => {
                console.log(err);
                alert('아이디/패스워드를 올바르게 입력해주세요.');
            });
        } else {
            alert('아이디/패스워드를 올바르게 입력해주세요.');
        }
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