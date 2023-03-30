import './style.css'
import CV from './CV.pdf'

const Header = () => {
   
    return ( 
        <>
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Akzhol</em></strong><br/>
                I'm Frontend Developer
            </h1>
            <div className="header__text">
                <p>my goals is to become good React Developer</p>
            </div>
            <a href={ CV } target="_blanck"className="btn">Download CV</a>
        </div>

        <main className="section">
          <div className="container">
                    <ul className="content-list">
                      <li className="content-list__item">
                          <h2 className="title-2">Frontend</h2>
                          <p>HTML, CSS, Sass, Styled-Components, <br/>JavaScript, ReactJS, npm, Git, GitHub</p>
                      </li>
                  </ul>
            </div>
      </main>
    </header>
    </>
     );
}
 
export default Header;