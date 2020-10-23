import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';

class App extends React.Component {
  
  render(){
  return (
    
      <div>
        <Header/>
        {/* 중간에 main.html넣기(index.html 일단 복사한 애) */}
        <Footer/>
      </div>
      

  );}
}

export default App;