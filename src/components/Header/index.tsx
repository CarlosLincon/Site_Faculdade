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
    const [idActive, setIdActive] = useState(0);


    const toggleClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        if (TamanhoTela > 1280) {
            setActive(false)
        } else {

        }
    }, [TamanhoTela])


    function trocandoAclasseOn(id: number) {
        setActiveLi(true);
        setIdActive(id);
    }
    function trocandoAclasseOut(id: number) {
        setIdActive(id);
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
                        <span className={styles.nav_link}>Home </span>

                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi || idActive != 1,
                        [styles.nav_item_active]: isActiveLi === true && idActive === 1
                    })} onMouseOver={(() => { trocandoAclasseOn(1) })}
                        onMouseLeave={(() => { trocandoAclasseOut(0) })}>
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
                        <span className={styles.nav_link}> Pós-Grauação </span>
                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi || idActive != 2,
                        [styles.nav_item_active]: isActiveLi === true && idActive === 2
                    })} onMouseOver={(() => { trocandoAclasseOn(2) })}
                        onMouseLeave={(() => { trocandoAclasseOut(0) })}>
                        <span className={styles.nav_link}>Acadêmico <AiFillCaretDown /></span>
                        <ul>
                            <li><span>E-book</span></li>
                            <li><span>Extensão</span></li>
                            <li><span>Estágio</span></li>
                            <li><span>Solicitação de Diploma</span></li>
                            <li><span>Mensalidades e Taxas</span></li>
                            <li><span>Manual do Aluno</span></li>
                            <li><span>Colação de Grau</span></li>
                            <li><span>Histórico</span></li>
                            <li><span>Caderneta On-line</span></li>
                            <li><span>Certificados</span></li>
                            <li><span>Biblioteca</span></li>

                        </ul>
                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi || idActive != 3,
                        [styles.nav_item_active]: isActiveLi === true && idActive === 3
                    })} onMouseOver={(() => { trocandoAclasseOn(3) })}
                        onMouseLeave={(() => { trocandoAclasseOut(0) })}>
                        <span className={styles.nav_link}>Institucional <AiFillCaretDown /></span>
                        <ul>
                            <li><span>A Faculdade</span></li>
                            <li><span>Infraestrutura</span></li>
                            <li><span>Corpo Administrativo</span></li>
                            <li><span>Corpo Docente</span></li>
                            <li><span>Regimentos</span></li>
                            <li><span>Publicações</span></li>
                            <li><span>Logomarca</span></li>
                            <li><span>CPA</span></li>
                            <li><span>Empresas Parceiras</span></li>

                        </ul>
                    </li>
                    <li className={classNames({
                        [styles.nav_item]: !isActiveLi || idActive != 4,
                        [styles.nav_item_active]: isActiveLi === true && idActive === 4
                    })} onMouseOver={(() => { trocandoAclasseOn(4) })}
                        onMouseLeave={(() => { trocandoAclasseOut(0) })} >
                        <span className={styles.nav_link}>Contato <AiFillCaretDown /></span>
                        <ul>
                            <li><span>Fale Conosco</span></li>
                            <li><span>Localização</span></li>

                        </ul>
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




