import {useState} from 'react'
import styles from './Navbar.module.css';

export default function Nav(){
    // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  } 
    return(
        <nav>
            
        
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Politics</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Traveling</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Biography</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Contact</a>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      
  );
}
                


