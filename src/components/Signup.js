import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import {} from "../style/Signup.scss";
import axios from 'axios';
import { emailCheck } from "../util/emailCheck";

export const Signup = () => {
    //변수 정의
    const idRef = useRef(null);
    const pwRef = useRef(null);
    const [idText, setIdText] = useState("");
    const [pwText, setPwText] = useState("");
    const [dataCheck, setDataCheck] = useState(true);
    const navigate = useNavigate();

    //회원가입 기능
    const signupHandler = () => {
        const userData = {
            "email":idRef.current.value,
            "password":pwRef.current.value
        }
        const headers = {
            "Content-Type" : "application/json"
        }
        if(emailCheck(userData.email) === true
        && userData.password.length >= 8) {
            axios.post("https://pre-onboarding-selection-task.shop/auth/signup",
            userData,
            {headers})
            .then(res => {
                alert('회원가입이 완료되었습니다.');
                navigate('/');
            })
            .catch(err => console.log(err));
        } else {
            alert('아이디/패스워드를 올바르게 입력해주세요.');
        }
    }
    //뒤로가기 기능
    const backHandler = () => {
        navigate('/');
    }
    //아이디 유효성 검사
    const liveIdCheck = () => {
        if(emailCheck(idRef.current.value)) {
            setIdText("이메일 체크 완료!");
        } else {
            setIdText("이메일을 올바르게 입력해주세요.");
        }
    }
    //비밀번호 유효성 검사
    const livePwCheck = () => {
        if(pwRef.current.value.length >= 8) {
            setPwText("비밀번호는 체크 완료!");
        } else if(pwRef.current.value.length === 0){
            setPwText("");
        } else {
            setPwText("비밀번호는 8글자 이상 입력해주세요.");
        }
    }
    //유효성 검사를 통해 버튼 활성화 기능
    const doubleCheck = () => {
        if(emailCheck(idRef.current.value) && pwRef.current.value.length >= 8) {
            setDataCheck(!dataCheck);
        } else {
            setDataCheck(dataCheck);
        }
    }
    return <>
        <div className="signup-all-div">
            <div className="signup-id-div">
                <div className="signup-id-label-div"><label htmlFor="id">아이디</label></div>
                <div className="signup-id-input-div"><input type="email" id="id" name="id" ref={idRef} placeholder="이메일 형식으로 입력해주세요." onChange={liveIdCheck}/></div>
            </div>
            <p>{idText}</p>
            <div className="signup-pw-div">
                <div className="signup-pw-label-div"><label htmlFor="pw">패스워드</label></div>
                <div className="signup-pw-input-div"><input type="password" id="pw" name="pw" onBlur={doubleCheck} ref={pwRef} placeholder="8자 이상 입력해주세요." onChange={livePwCheck}/></div>
            </div>
            <p>{pwText}</p>
            <button disabled={dataCheck} onClick={signupHandler}>회원가입</button>
            <button onClick={backHandler}>돌아가기</button>
        </div>
    </>
}