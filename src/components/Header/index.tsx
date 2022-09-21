import { AiFillCaretDown } from "react-icons/ai"
import styles from "./Header.module.css"
import logo from "../../images/faculdade_branco.png"
import { useState } from "react";

export default function Header() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <header>

            <nav className={styles.navbar}>
                <img src={logo} alt="Logo Santissimo" className={styles.nav_branding} />
                <ul className={isActive ? `${styles.nav_menu_active}` : `${styles.nav_menu}`}>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Home  <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Graduação  <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}> Pós-Grauação <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Acadêmico  <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Institucional  <AiFillCaretDown /></span>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}>Contato  <AiFillCaretDown /></span>
                    </li>
                </ul>
                <div className={isActive ? `${styles.hamburger_active}` : `${styles.hamburger}`} onClick={toggleClass}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>

                </div>
            </nav>
        </header>
    );
}


