import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="hero">
            <div className="row">
                <div className="column">
                    <h1 className="hero--heading">
                        Hello!<br/>
                        I'm Nikita Kruzhilin, <br/>
                        a frontend developer <br/>
                        currently based<br/>
                        in Austin, TX.
                    </h1>
                    <div className="hero--examples">                        
                        <h4>apps</h4>
                        <ul>
                            <li>
                                <Link className="app--link" to="/todos">todolist</Link>
                            </li>
                            <li>
                                <Link className="app--link" to="/enlearn">enlearn</Link>
                            </li>
                            <li>
                                <Link className="app--link" to="/tictactoe">game</Link>
                            </li>
                        </ul>
                        <h4 className="home--mid--heading">work</h4>
                        <ul>
                            <li>
                                <a className="app--link" href="https://skinfiles.ru" target="_blanc">skinfiles</a>
                            </li>
                            <li>
                                <a className="app--link" href="https://courses.skinfiles.ru" target="_blanc">courses</a>
                            </li>
                            <li>
                                <a className="app--link" href="http://lopatin.design" target="_blanc">lopatin design</a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div> 
        </div>
    );
};

export default Home;