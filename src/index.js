import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'

function App(){
  return(
    <div className='card'>
      <Avatar/>
      <div className='data'>
        <Intro/>
        <SkillList/>
      </div>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='jahanvi.jpg' alt='Jahanvi Modi'/>
}

function Intro(){
  return (
    <div>
        <h1>Jahanvi Modi</h1>
        <p>
          🔭 I’m currently a 4rd year student pursuing B.E. in Information Technology from Ahmedabad Institute of Technology. I have learnt many programming languages like HTML, CSS, JS, C, C++, Android and many more.
          <br></br>
          <br></br>
          I'm a web developer passionate about continuous growth and skill development. With a strong foundation in programming, I strive to create user-friendly and visually appealing websites. I believe in effective communication and collaboration to exceed client expectations. My expertise includes HTML, CSS, JavaScript, React, Angular and Node.js. I value clean code, efficient algorithms, and performance optimization. I enjoy reading about new technologies and engaging in outdoor activities for inspiration. During my leisure hours, I dedicate myself to working on personal projects. I embrace challenges and constantly seek to improve. Let's connect and build something amazing together!
          <br></br>
          <br></br>
          🌱 I’m currently learning MERN & MEAN stack.
          <br></br>
          <br></br>
          ⚡ Fun fact: I am a foodie and love to travel.
        </p>
    </div>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='Java' emoji='😃' color="#d07dad"/>
      <Skill skill='MERN stack' emoji='😉' color="#854bb2"/>
      <Skill skill='MEAN stack' emoji='🤩' color="#9d4277"/>
      <Skill skill='Android' emoji='🫰' color="#f3797f"/>
      <Skill skill='Leadership' emoji='💪' color="#88b8d0"/>

    </div>
  );
}

function Skill(props){
  return (
    <div className='skill' style={{
      backgroundColor : props.color
    }}>
      {/* Java ⚡ */}
      <span>
        {props.skill}
      </span>
      <span>
        {props.emoji}
        </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
