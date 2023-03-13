import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import UserList from './pages/List';


// 밑에 HTML 처럼 보이지만
// 실질적으론 JSX 문법이기 때문에 
// HTML 태그 쓰듯이 쓸수는 없다
// 가령 div class가 아닌 className을 쓰는 것

//<Link> 태그는 <a> 태그와 동일
//링크를 클릭할 때마다 화면이 전환되려면
//<Routes> 태그로 브라우저 path별로 어떤 컴포넌트를 매핑할지 정의
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> | 
        <Link to="/counter">Counter</Link> | 
        <Link to="/input">Input</Link> |
        <Link to="/input2">Input2</Link> |
        <Link to="/userlist">UserList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/counter" element={<Counter/>} /> 
        <Route path="/input" element={<Input/>} />
        <Route path="/input2" element={<Input2/>} />
        <Route path="/userlist" element={<UserList/>} />
      </Routes>
    </div>
  );
}

export default App;
