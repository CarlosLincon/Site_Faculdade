import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EnadeImg from "../../images/SantissimoNews/Enades.jpg";
import EnemImg from "../../images/SantissimoNews/banner-site-epo.png";
import { wrap } from 'module';



const SantissimoAcontece = () => {
  return (<>
    <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "55px", maxWidth: "80vw", flexWrap: "wrap" }}>
      <Typography gutterBottom variant="h2" component="div" sx={{ color: "#030224", fontSize: "2rem" }}>
        Santissimo News
      </Typography>
    </Card>
    <Card sx={{ minWidth: "33.3%", maxWidth: "80vw", display: "flex", justifyContent: "center", alignItems: "center", margin: "55px auto", flexWrap: "wrap",textAlign:"justify" }}>

      <CardActionArea sx={{ color: "#030224", minHeight: "356px", maxWidth: "33.3%" }}>
        <CardMedia
          component="img"
          height="140"
          image={EnadeImg}
          alt="Enade 2021 Sistemas de Informação"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Enade
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "#030224" }}>
            Lista de estudantes convocados para o enade 2021 Curso de Sistemas de Informação.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea sx={{ color: "#030224", minHeight: "356px", maxWidth: "33.3%",textAlign:"justify" }}>
        <CardMedia
          component="img"
          height="140"
          image={EnadeImg}
          alt="Enade 2021 Sistemas de Informação"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Enade
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "#030224" }}>
            Lista de estudantes convocados para o enade 2021 Curso de Pedagogia.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea sx={{ color: "#030224", minHeight: "356px", maxWidth: "33.3%", textAlign:"justify" }}>
        <CardMedia
          component="img"
          height="140"
          image={EnemImg}
          alt="Enade 2021 Sistemas de Informação"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Enem
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "#030224" }}>
            O Processo Seletivo ONLINE é realizado em parceria com a Instituição UniBolsas Brasil. Após o preenchimento deste cadastro você será redirecionado à pagina do parceiro para aplicação da prova Online.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  </>
  )
}


export default SantissimoAcontece;