import styles from "./NotFound.module.css";
import { ReactComponent as NotFoundImage } from "../../images/not_found.svg";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={
            styles.container
        }>
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {"Voltar"}</button>
            </div>
            <NotFoundImage />
        </div >
    );
}
