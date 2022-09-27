import styles from "./Cursos.module.css";
import { useParams, useNavigate, Routes, Route, useLocation } from "react-router-dom";
import cursos from "../../data/itens.json";
import NotFound from "../../components/NotFound";
import { useEffect } from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { style } from "@mui/system";

export default function Cursos() {

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    const { id } = useParams();
    const navigate = useNavigate();
    const curso = cursos.find(item => item.router === id);
    if (!curso) {
        return <NotFound />;
    }

    const Icontainer = {

        backgroundImage: `url(${curso.photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }



    return (
        <Routes>
            <Route path="*" >
                <Route index element={
                    <>

                        <section className={styles.container} style={Icontainer}>

                            <div style={Icontainer}>
                                <div className={styles.conteudo}>
                                    <h1 className={styles.titulo}> {curso.title}</h1>
                                    <main className={styles.containerMain}>
                                       
                                       <nav>
                                        <ul>
                                            <li>Sobre o Curso</li>
                                            <li>Missão</li>
                                            <li>Objetivos</li>
                                            <li>Perfil do Egresso</li>
                                            <li>Mensalidade</li>
                                            <li>Coordenador</li>
                                            <li>Corpo Docente</li>
                                            <li>Núcleo Docente Estruturante (NDE)</li>
                                            <li>Fluxograma</li>
                                            <li>Plano de Ensino</li>
                                            <li>Matriz Curricular</li>
                                            <li>Horários</li>
                                            <li>Barema - Atividades Complementares de Curso</li>
                                            <li>Periódicos</li>
                                            <li>Avaliação</li>
                                            <li>Galeria do Curso</li>

                                            
                                        </ul>
                                       </nav>

                                    </main> 
                                  
                                </div>
                            </div>
                        </section>

                    </>
                }
                />
            </Route>
        </Routes>
    );

}

