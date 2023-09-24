
const Body = () => {
const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
<div className="body">
        <h2 id="about" className="subheading">About me</h2>
          <p>I am Gianna Calderon! Since I was really young, I loved playing videogames. Lately, I've been interested in not just playing them, but making them! I have a background in Mechanical Engineering, have worked in sales for manufacturing companies, and I am based in California, USA.</p>
          <p>In my free time, I like to take care of my plants and I am currently in two professional dance teams, SNACKPACK Dance Collective and New Age Theatrics. I have competed previously with Commonality, another professional dance team, and I have performed in numerous community events and charities with New Age Theatrics. For more about dance, please visit my personal page where you could watch some snippets of my dance performances <a href="https://www.playtimediary.com/dance">here!</a></p>
          <p>Currently working on: Witch-themed Visual Novel made with Ren'Py. Here's a sneak peek of the protagonist's smile below (art by me)!</p>
          <img width="300px"src="/images/witch-VN-protagonist.png" alt="Sneak peek of the protagonist for the Visual Novel I am working on." />
        <h2 id="projects" className="subheading">My coding projects</h2>
          <div className='image-container'>
          <a href="https://funny-faun-83aa26.netlify.app/">
            <img src="/images/dress-up-game.png" alt="Dress up game made with Javascript" width="450px"/>
          </a>
          <a href="https://hilarious-torte-1d2cfb.netlify.app/">
            <img src="/images/ragnarok-online-quiz.png" alt="Quiz from an MMORPG named Ragnarok Online, adapted to web browser using React" />
          </a>
          </div>
          <p>{lorem}</p>
        <h2 id="blog" className="subheading">My blog</h2>
          <p>{lorem}</p>
      </div>
    )
}

export default Body