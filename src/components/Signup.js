import { useRef } from "react";
import classes from "../style/Signup.scss";

export const Signup = () => {
    //입력값 정의
    const idRef = useRef(null);
    const pwRef = useRef(null);

    //클릭 함수
    const signupHandler = () => {
        console.log(idRef.current.value);
        console.log(pwRef.current.value);
    }
    return <>
        <div className="signup-all-div">
            <div className="signup-id-div">
                <div className="signup-id-label-div"><label htmlFor="id">아이디</label></div>
                <div className="signup-id-input-div"><input id="id" name="id" ref={idRef} placeholder="이메일 형식으로 입력해주세요."/></div>
            </div>
            <div className="signup-pw-div">
                <div className="signup-pw-label-div"><label htmlFor="pw">패스워드</label></div>
                <div className="signup-pw-input-div"><input id="pw" name="pw" ref={pwRef} placeholder="8자 이상 입력해주세요."/></div>
            </div>
            <button onClick={signupHandler}>회원가입</button>
        </div>
    </>
}