import React, { useState } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom';






const Navbar = () =>  {
    const [varible, setVaraible] = useState(true)
    const changeState = () => {setVaraible(!varible)}


    const page_values = [{text : "Home", path: ""},
                        {text : "About Me", path: "/aboutme"},
                        {text : "Projects", path: "/projects"},]

    let path = window.location.href.substr((window.location.href.indexOf("/website"))+8)

    return (
        <span className = {styles.container}>
          <nav className={styles.navbar}>
            <Link to={process.env.PUBLIC_URL} className={styles.navbar_brand} onClick={changeState}>Alexander Waters</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  {
                      page_values.map((page) => {
                          let def_className="nav-link"
                          if (path === page.path){
                              def_className = "nav-link active " + styles.active 
                      }
                    return (<li className = "nav-item" key = {page.path}> 
                      <Link to={process.env.PUBLIC_URL + page.path} className={def_className} onClick={changeState}>{page.text}</Link>
                    </li>)
                  })}
              </ul>
            </div>
          </nav>
        </span>
    );
}

export default Navbar;


