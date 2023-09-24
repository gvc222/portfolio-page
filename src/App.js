import NavBar from './components/NavBar';
import './App.css';
import Body from './components/Body';

function App() {
//   const goToAbout = () => {
//     window.location.href = "#about";
//   }


  return (
    <div className='container'>
      <h1 className='header'>Gianna Calderon</h1>
      <h3>Engineer  |  Digital Artist  |  Game Developer  |  Dancer</h3>
      <h4>This is still under construction! For latest updates, please head to <a href="https://www.playtimediary.com/" target="_blank">my personal blog.</a></h4>

      <NavBar />

      <hr></hr>

      <Body />

      <div className='footer'>
        <h5 id="contact">Contact</h5>
          <address>
            Made by Gianna C.<br/>
            Visit my <a href="https://github.com/gvc222" target="_blank">Github</a><br/>
            Check out my other projects at:<br/>
            <a href="https://www.playtimediary.com/" target="_blank"> Playtime Diary</a><br/>
            Connect with me on <a href="https://www.linkedin.com/in/giannacalderon" target="_blank">LinkedIn</a>
          </address>
      </div>
      
    </div>
  );
}

export default App;


