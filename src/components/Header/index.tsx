import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Header.module.css";
import logo from "../../images/faculdade_branco.png";
import { useEffect, useState } from "react";
import classNames from "classnames";
import TamanhoDaTela from "../TamanhoDaTela";






export default function Header() {

    let TamanhoTela = TamanhoDaTela();
    const [isActive, setActive] = useState(false);
    const [isActiveLi, setActiveLi] = useState(false);
    const [targetAtual, setTargetAtual] = useState<EventTarget>();



    const toggleClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        if (TamanhoTela > 1280) {
            setActive(false)
        } else {

        }
    }, [TamanhoTela])


    function trocandoAclasseOn() {
        // let target = e.target;
        // setTargetAtual(target);
        setActiveLi(true);
    }
    function trocandoAclasseOut() {
        setActiveLi(false);
    }

    return (


        <header >
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
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi,
                        [styles.nav_item_active]: isActiveLi 
                    })} onMouseOver={(() => { trocandoAclasseOn() })}
                        onMouseLeave={(() => { trocandoAclasseOut() })}>
                        <span className={styles.nav_link}>Graduação <AiFillCaretDown /></span>
                        <ul>
                            <li><span>Administração</span></li>
                            <li><span>Ciências Contábeis</span></li>
                            <li><span>Direito</span></li>
                            <li><span>Enfermagem</span></li>
                            <li><span>Engenharia de Produção</span></li>
                            <li><span>Pedagogia</span></li>
                            <li><span>Psicologia</span></li>
                            <li><span>Serviço Social</span></li>
                            <li><span>Sistemas de Informação</span></li>
                        </ul>
                    </li>
                    <li className={styles.nav_item}>
                        <span className={styles.nav_link}> Pós-Grauação <AiFillCaretDown /></span>
                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi,
                        [styles.nav_item_active]: isActiveLi
                    })} onMouseOver={(() => { trocandoAclasseOn() })} onMouseLeave={(() => { trocandoAclasseOut() })}>
                        <span className={styles.nav_link}>Acadêmico <AiFillCaretDown /></span>
                        <ul>
                            <li>E-book</li>
                            <li>Extensão</li>
                            <li>Estágio</li>
                            <li>Solicitação de Diploma</li>
                            <li>Mensalidades e Taxas</li>
                            <li>Manual do Aluno</li>
                            <li>Colação de Grau</li>
                            <li>Histórico</li>
                            <li>Caderneta On-line</li>
                            <li>Certificados</li>
                            <li>Biblioteca</li>

                        </ul>
                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi,
                        [styles.nav_item_active]: isActiveLi
                    })} onMouseOver={(() => { trocandoAclasseOn() })}
                        onMouseLeave={(() => { trocandoAclasseOut() })}>
                        <span className={styles.nav_link}>Institucional <AiFillCaretDown /></span>
                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi,
                        [styles.nav_item_active]: isActiveLi
                    })} onMouseOver={(() => { trocandoAclasseOn() })}
                        onMouseLeave={(() => { trocandoAclasseOut() })} >
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




