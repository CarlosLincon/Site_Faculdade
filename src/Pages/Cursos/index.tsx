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

    // const Icontainer = {

    //     backgroundImage: `url(${curso.photo})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    // }



    return (
        <Routes>
            <Route path="*" >
                <Route index element={
                    <>

                        <main className={styles.container} >
                            <div className={styles.conteudo}>


                            </div>
                        </main>

                    </>
                }
                />
            </Route>
        </Routes>
    );

}

