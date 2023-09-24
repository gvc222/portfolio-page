
import './App.css';

function App() {
//   const goToAbout = () => {
//     window.location.href = "#about";
//   }
const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <div className='container'>
      <h1 className='header'>Gianna Calderon</h1>
      <h3>This is still under construction! For latest updates, please head to <a href="https://www.playtimediary.com/">my personal blog.</a></h3>
      <div className='links'>
        <nav>
          <a href="#about">About me | </a>
          <a href="#projects">Coding Projects | </a>
          <a href="https://github.com/gvc222" target="_blank">My Github Website | </a>
          <a href="https://www.playtimediary.com/" target="_blank">My personal blog | </a>
          <a href="#contact">Contact me</a>
        </nav>
      </div>
      <hr></hr>
      <div className="body">
        <h2 id="about" className="subheading">About me</h2>
          <p>I am Gianna Calderon! Since I was really young, I loved playing videogames. Lately, I've been interested in not just playing them, but making them! I have a background in Mechanical Engineering, have worked in sales for manufacturing companies, and I am based in California, USA.</p>
          <p>{lorem}</p>
        <h2 id="projects" className="subheading">My coding projects</h2>
          <div className='image-container'>
          <a href="https://funny-faun-83aa26.netlify.app/">
            <img src="/images/dress-up-game.png" alt="Dress up game made with Javascript" width="500px"/>
          </a>
          <a href="https://hilarious-torte-1d2cfb.netlify.app/">
            <img src="/images/ragnarok-online-quiz.png" alt="Quiz from an MMORPG named Ragnarok Online, adapted to web browser using React" />
          </a>
          </div>
          <p>{lorem}</p>
        <h2 id="blog" className="subheading">My blog</h2>
          <p>{lorem}</p>
      </div>
      <div>
      <h5 id="contact">Contact</h5>
      <address>
        Made by Gianna C.<br/>
        Visit my <a href="https://github.com/gvc222">Github</a><br/>
        Check out my other projects at:<br/>
        <a href="https://www.playtimediary.com/"> Playtime Diary</a><br/>
        Connect with me on <a href="https://www.linkedin.com/in/giannacalderon">LinkedIn</a>
      </address>
      </div>
      
    </div>
  );
}

export default App;


