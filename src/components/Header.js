import {useLocation} from 'react-router-dom';
import {classes} from '../style/Signup.scss';

export const Header = () => {
    //변수 정의
    const location = useLocation();

    //제목 정의
    let title = null;
    if(location.pathname == "/") {
        title = "Todo Login";
    } else if(location.pathname == "/signup") {
        title = "Todo Signup";
    } else if(location.pathname == "/todo") {
        title = "Todo";
    }
    return <>
        <h1>{title}</h1>
    </>
}