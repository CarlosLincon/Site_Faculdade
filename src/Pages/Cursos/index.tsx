import styles from "./Cursos.module.css";
import { useParams, Routes, Route, useLocation } from "react-router-dom";
import cursos from "../../data/itens.json";
import NotFound from "../../components/NotFound";
import { useEffect, useState } from "react";
import Coodernador from "./coodernador.json"
import classNames from "classnames";





export default function Cursos() {


    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    const { id } = useParams();
    const [active, setActive] = useState(false);
    const [idActive, setIdActive] = useState(0);
    const curso = cursos.find(item => item.router === id);
    if (!curso) {
        return <NotFound />;
    }

    const coodernador = Coodernador[curso.index];



    function trocandoAclasseOn(id: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let el = e;
        console.log(el);
        window.scrollTo(0, el.pageY - 47);
        console.log(window.scrollY);
        setActive(false);
        setIdActive(0);
        setActive(true);
        setIdActive(id);
    }


    return (
        <Routes>
            <Route path="*" >
                <Route index element={
                    <>

                        <main className={styles.container} >
                            <section className={styles.conteudo_sobre_o_Curso}>
                                <div className={styles.conteudo_sobre_img}>
                                    <img src={curso.photo} alt={curso.title} />
                                    <div className={styles.conteudo_sobre_p}>
                                        <div className={styles.conteudo_sobre_p_container}>

                                            <h1><span>Graduação</span></h1>
                                            <h6><span>{curso.title}</span></h6>

                                        </div>
                                    </div>

                                </div>

                                <div className={styles.container_o_curso}>
                                    <div onClick={((event) => { trocandoAclasseOn(1, event) })} className={classNames({
                                        [styles.container_o_curso_div_disable]: !active || idActive !== 1,
                                        [styles.container_o_curso_div_active]: active && idActive === 1
                                    })}>
                                        <h1>O curso</h1>
                                        <span>
                                            {curso.description}
                                        </span>
                                    </div>
                                    <div onClick={((e) => { trocandoAclasseOn(2, e) })} className={classNames({ [styles.container_o_curso_div_active]: active && idActive === 2 })}>
                                        <h1>Obejetivos do Curso</h1>
                                        <span>
                                            {curso.objetivos}
                                        </span>
                                    </div>

                                    <div onClick={((e) => { trocandoAclasseOn(3, e) })} className={classNames({ [styles.container_o_curso_div_active]: active && idActive === 3 })}>
                                        <h1>Perfil do Aluno</h1>
                                        <span>
                                            {curso.perfil}
                                        </span>
                                    </div>
                                    <div onClick={((e) => { trocandoAclasseOn(4, e) })} className={classNames({ [styles.container_o_curso_div_active]: active === true && idActive === 4 })}>
                                        <h1>Missão</h1>
                                        <span>
                                            {curso.missao}
                                        </span>
                                    </div>
                                </div>


                            </section>
                            <section className={styles.coordenador_container}>
                                <h1>Coordenador</h1>
                                <p>{coodernador.name}</p>
                                <div className={styles.coordenador_container_div}>
                                    <div className={styles.coordenador_container_wrapper_div}>
                                        <div className={styles.cards}>
                                            <p>{coodernador.descricao} </p>
                                        </div>
                                    </div>

                                    <div className={styles.coordenador_container_wrapper_div}>
                                        <div className={styles.coordenador_container_wrapper_div_container}>
                                            <img src={coodernador.src} alt={coodernador.name} />
                                            <div className={styles.coordenador_container_wrapper_div_veja_mais}>
                                                <h3>
                                                    Veja mais
                                                </h3>
                                                <button>
                                                    <a rel="noreferrer" target="_blank" href={coodernador.link}>Currículo Lattes</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </main>

                    </>
                }
                />
            </Route>
        </Routes>
    );

}

