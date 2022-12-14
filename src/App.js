import './style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginLayout } from './layout/LoginLayout';
import { SignupLayout } from './layout/SignupLayout';
import { TodoLayout } from './layout/TodoLayout';
import { PrivateRoute } from './layout/PrivateRoute';
import { PublicRoute } from './layout/PublicRoute';

function App() {
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
