import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component }) => {

    const access = localStorage.getItem("token");
    return (
        access ? Component : <Navigate to='/' {...alert("로그인을 해주세요.")} />
    )
}