import './style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginLayout } from './layout/LoginLayout';
import { SignupLayout } from './layout/SignupLayout';
import { TodoLayout } from './layout/TodoLayout';
import { PrivateRoute } from './layout/PrivateRoute';
import { PublicRoute } from './layout/PublicRoute';

function App() {
  //브라우저 종료시 로컬스토리지 초기화
  window.addEventListener("unload", () => {
    localStorage.removeItem('token');
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute component={<LoginLayout/>}/>}/>
          <Route path='/signup' element={<PublicRoute component={<SignupLayout/>}/>}/>
          <Route path='/todo' element={<PrivateRoute component={<TodoLayout/>}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
