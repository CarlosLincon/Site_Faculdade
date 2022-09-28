import styles from "./Cursos.module.css";
import { useParams, Routes, Route, useLocation } from "react-router-dom";
import cursos from "../../data/itens.json";
import NotFound from "../../components/NotFound";
import { useEffect } from "react";

export default function Cursos() {

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    const { id } = useParams();
    const curso = cursos.find(item => item.router === id);
    if (!curso) {
        return <NotFound />;
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
                                    <div>
                                        <h1>O curso</h1>
                                        <span>
                                            {curso.description}
                                        </span>
                                    </div>
                                    <div>
                                        <h1>Obejetivos do Curso</h1>

                                        <span>
                                            {curso.objetivos}
                                        </span>
                                    </div>
                                    <div>
                                        <h1>Perfil do Aluno</h1>
                                        <span>
                                            {curso.perfil}
                                        </span>
                                    </div>
                                    <div>
                                        <h1>Missão</h1>
                                        <span>
                                            {curso.missao}
                                        </span>
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

