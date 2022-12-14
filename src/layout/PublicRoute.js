import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component }) => {
    const access = localStorage.getItem("token");
    return (
        access ? <Navigate to='/todo' {...alert("해당 페이지로 이동을 원하신다면 로그아웃을 해주세요.")} /> : Component
    )
}