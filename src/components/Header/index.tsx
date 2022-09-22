import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Header.module.css";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { useWindowSize } from 'usehooks-ts'





export default function Header() {
    const { width } = useWindowSize()
    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
       setActive(!isActive);
    };
 
    useEffect(() =>{
        if(width > 1280){
            setActive(false)
        }else{
            console.log("Não bateu a condição")
        }
    })
    

    return (


        <header>

            <nav className={styles.navbar}>
                <img  alt="Logo Santissimo" className={styles.nav_branding} />
                
                <ul

                    className={classNames({
                        [styles.nav_menu]: !isActive,
                        [styles.nav_menu_active]: isActive
                    })}

                >
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Home <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Graduação <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}> Pós-Grauação <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Acadêmico <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Institucional <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Contato <AiFillCaretDown /></span>
                    </li>
                </ul>
                <div
                    className={classNames({
                        [styles.hamburger]: !isActive,
                        [styles.hamburger_active]: isActive
                    })}
                    onClick={toggleClass}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>

                </div>
            </nav>
        </header>
    );
}




