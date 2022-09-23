import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Header.module.css";
import logo from "../../images/faculdade_branco.png";
import { useEffect, useState } from "react";
import classNames from "classnames";
import TamanhoDaTela from "../TamanhoDaTela";






export default function Header() {

    let TamanhoTela = TamanhoDaTela();
    const [isActive, setActive] = useState(false);
        

    const toggleClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        if ( TamanhoTela > 1280) {
            setActive(false)
        } else {

        }
    })


    return (


        <header>

            <nav className={styles.navbar}>
                <img src={logo} alt="Logo Santissimo" className={styles.nav_branding} />

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




