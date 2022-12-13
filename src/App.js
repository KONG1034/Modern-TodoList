import './style/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginLayout } from './layout/LoginLayout';
import { SignupLayout } from './layout/SignupLayout';
import { TodoLayout } from './layout/TodoLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginLayout/>}/>
          <Route path='/signup' element={<SignupLayout/>}/>
          <Route path='/todo' element={<TodoLayout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
