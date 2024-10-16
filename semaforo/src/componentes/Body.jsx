// src/components/Body.jsx

import React, { useCallback, useState } from "react";
import "../css/body.css";

// Importaciones de imágenes mantenidas igual
import academico from "../images/Botones dimensiones principales/Academico.svg";
import economico from "../images/Botones dimensiones principales/Economico.svg";
import familiar from "../images/Botones dimensiones principales/Familiar.svg";
import individual from "../images/Botones dimensiones principales/Individual.svg";
import vida_universitaria from "../images/Botones dimensiones principales/Vida_universitaria.svg";
import icon_academico from "../images/iconos_dimensiones/icono_academica.svg";
import icon_economico from "../images/iconos_dimensiones/icono_economico.svg";
import icon_familiar from "../images/iconos_dimensiones/icono_familiar.svg";
import icon_individual from "../images/iconos_dimensiones/icono_individual.svg";
import icon_vida_universitaria from "../images/iconos_dimensiones/icono_vida.svg";

// Botones dimensión académica
import desempeno_academico from "../images/Botones D. Acádemica/desempeno_academico.svg";
import eleccion_vocaciona from "../images/Botones D. Acádemica/eleccion_vocacional.svg";
import manejo_tiempo from "../images/Botones D. Acádemica/manejo_tiempo.svg";

// Botones dimensión económica
import apoyo_economico_familiar from "../images/Botones D. Económica/apoyo_economico_familiar.svg";
import apoyo_economico_institucional from "../images/Botones D. Económica/apoyo_economico_institucional.svg";
import manejo_finanzas from "../images/Botones D. Económica/manejo_finanzas.svg";
import situacion_laboral from "../images/Botones D. Económica/situacion_laboral.svg";

// Botones dimensión familiar
import dinamica_familiar from "../images/Botones D. Familiar/dinamica_familiar.svg";

// Botones dimensión individual
import aspectos_motivacionales from "../images/Botones D. Individual/aspectos_motivacionales.svg";
import autoconocimiento from "../images/Botones D. Individual/autoconocimiento1.svg";
import diversidad_sexual from "../images/Botones D. Individual/diversidad_sexual.svg";
import historia_vida from "../images/Botones D. Individual/historia_vida.svg";
import identificacion from "../images/Botones D. Individual/identificacion.svg";
import proyecto_vida from "../images/Botones D. Individual/proyecto_vida.svg";
import red_apoyo from "../images/Botones D. Individual/red_apoyo.svg";
import relacion from "../images/Botones D. Individual/relacion.svg";
import salud from "../images/Botones D. Individual/salud.svg";

// Botones dimensión vida universitaria
import adaptacion from "../images/Botones D. Vida universitaria/adaptacion.svg";
import oferta_servicio from "../images/Botones D. Vida universitaria/oferta_servicio.svg";
import motivaciones from "../images/Botones D. Vida universitaria/motivaciones.svg";
import referencia from "../images/Botones D. Vida universitaria/referencia.svg";
import vinculacion from "../images/Botones D. Vida universitaria/vinculacion.svg";
import vivienda from "../images/Botones D. Vida universitaria/vivienda.svg";

// Semáforo
import semaforo from "../images/semaforo.svg";

// Componente para los botones de dimensión
const DimensionButton = ({
  img,
  nombre,
  onClick,
  animating,
  animationClass,
}) => (
  <div onClick={onClick}>
    <img
      src={img}
      alt={`Imagen ${nombre}`}
      className={animating ? animationClass : ""}
    />
  </div>
);

// Componente para el mensaje de dimensión
const Message = ({ img, texto }) => (
  <div className="mensaje-dimension">
    {img && (
      <img src={img} alt="Icono de la dimensión" className="imagen-mensaje" />
    )}
    <p>{texto}</p>
  </div>
);

// Definición de las dimensiones y sus propiedades
const DIMENSIONS = [
  {
    name: "Individual",
    img: individual,
    icon: icon_individual,
    buttons: [
      aspectos_motivacionales,
      autoconocimiento,
      diversidad_sexual,
      historia_vida,
      identificacion,
      proyecto_vida,
      red_apoyo,
      relacion,
      salud,
    ],
    message:
      "Corresponde a la información que refiere el/la estudiante respecto a los aspectos personales.",
    titulosSubdimensiones: [
      "Aspectos Motivacionales",
      "Autoconocimiento",
      "Diversidad Sexual",
      "Historia de Vida",
      "Identificación",
      "Proyecto de Vida",
      "Red de Apoyo",
      "Relación Erótico-Afectivo",
      "Salud",
    ],
    textosSubdimensiones: [
      "El proceso psicológico básico de la motivación contiene dos componentes principales: los direccionales (que dan cuenta de la elección) y los energizadores (que dan cuenta de la iniciación, la persistencia y el vigor) de la conducta dirigida a meta.",
      "Tipo de saber que tiene cada sujeto de sí mismo, ya sea de sus representaciones, estados mentales, percepciones, acciones, de su cuerpo, entre otros. En esta temática se incluyen todos los aspectos de conocimiento de sí mismos que los estudiantes expresan sobre cómo se sienten, lo que desean, lo que piensan, lo que los impulsa a actuar, sus valores, todo aquello que constituye su ser desde tres pilares: identidad, autoestima y autoconstrucción.",
      "Todos aquellos reconocimientos, prácticas y relaciones establecidas por el estudiante; frente a su género, identidad sexual, preferencia sexual y, ante la diversidad sexual de las personas en su contexto cotidiano.",
      "Esta temática hace referencia a todas las narraciones de vida en tiempo pasado que realizan los estudiantes desde los diferentes contextos socioculturales que vivieron; da cuenta de las prácticas, creencias y valores familiares y culturales que influyen en sus decisiones y en sus formas de ver el mundo.",
      "Esta temática comprende todo lo referente a la obtención, cambio o pérdida de documentos esenciales que se encuentran inscritos en registros oficiales y que le permiten al estudiante el acceso a los servicios sociales del Estado.",
      "Esta temática engloba todos los proyectos y metas a mediano y largo plazo que los estudiantes manifestan en los acompañamientos entre pares. El proyecto de vida articula la identidad personal-social en las perspectivas de su dinámica temporal y posibilidades de desarrollo futuro",
      "Todos aquellos vínculos que tiene el estudiante con otros individuos y/o grupos que sirven para mejorar la adaptación cuando este se enfrenta a situaciones de estrés, reto o privación y que sirven como instancia mediadora en la que se brinda apoyo social de tipo emocional, afectivo e informacional",
      "Esta temática contiene todo lo referido por los estudiantes narrativamente en relación con sus parejas afectivas y sentimentales.",
      "Esta temática hace referencia aquellas acciones que permitan identificar y conocer el estado de salud del estudiante, así como su evolución en caso de enfermar o sufrir algún accidente. También se refiere a los reportes que se tengan acerca de la salud mental del estudiante. \n- Informe de cómo se encuentra el estudiante de salud.\n- Informe sobre el seguimiento a sus citas médicas y psicológicas.\n- Informe sobre trámites de la EPS, del Servicio médico y psicológico.",
    ],
  },

  {
    name: "Familiar",
    img: familiar,
    icon: icon_familiar,
    buttons: [dinamica_familiar],
    message:
      "Corresponde a la descripción de la dinámica familiar y cómo esta dinámica es una barrera o un facilitador en la elección y la permanencia en el programa académico.",
    titulosSubdimensiones: ["Dinámica Familiar"],
  },
  {
    name: "Académico",
    img: academico,
    icon: icon_academico,
    buttons: [desempeno_academico, eleccion_vocaciona, manejo_tiempo],
    message:
      "Corresponde a la información que el/la estudiante le manifiesta al monitor en relación a su desempeño académico y el nivel de desarrollo de habilidades que se han identificado en las actividades académicas que desarrolla cada uno de los estudiantes.",
    titulosSubdimensiones: [
      "Desempeño Académico",
      "Elección Vocacional",
      "Manejo del Tiempo",
    ],
  },
  {
    name: "Económico",
    img: economico,
    icon: icon_economico,
    buttons: [
      apoyo_economico_familiar,
      apoyo_economico_institucional,
      manejo_finanzas,
      situacion_laboral,
    ],
    message:
      "Información relacionada con la situación económica de los estudiantes y el manejo del dinero.",
    titulosSubdimensiones: [
      "Apoyo Económico Familiar",
      "Apoyo Económico Institucional",
      "Manejo de Finanzas",
      "Situación Laboral",
    ],
  },
  {
    name: "Vida Universitaria",
    img: vida_universitaria,
    icon: icon_vida_universitaria,
    buttons: [
      adaptacion,
      oferta_servicio,
      motivaciones,
      referencia,
      vinculacion,
      vivienda,
    ],
    message:
      "Corresponde a la información que refiere el/la estudiante respecto a la percepción que este tiene de su vida en la Universidad y la ciudad.",
    titulosSubdimensiones: [
      "Adaptación a la Ciudad y la Universidad",
      "Oferta de Servicios",
      "Motivaciones Para el Acompañamiento",
      "Referenciación Geográfica",
      "Vinculación a Grupos y Extracurriculares",
      "Vivienda",
    ],
  },
];

function Body() {
  const [rows, setRows] = useState({
    fila1: DIMENSIONS.slice(0, 3),
    fila2: DIMENSIONS.slice(3),
  });

  const [state, setState] = useState({
    animating: false,
    mostrarMensaje: false,
    primeraVez: true,
    individualSeleccionado: false,
    mensaje: "",
    imagenMensaje: "",
    botonesMostrados: [], // Nuevo estado para botones
    nombreDimensionActual: "",
    indiceSubDimensionActual: -1,
  });

  const manejarSeleccionDimension = (dimension) => {
    const { icon, message, buttons } = dimension;

    const isIndividual = dimension.name === "Individual"; // Verificar si es la dimensión "Individual"

    if (!state.animating && state.primeraVez) {
      setState((prev) => ({ ...prev, animating: true, primeraVez: false }));

      setTimeout(() => {
        const nuevaFila1 = [...rows.fila1, ...rows.fila2];
        setRows({
          fila1: nuevaFila1,
          fila2: [],
        });

        setState((prev) => ({
          ...prev,
          mensaje: message,
          imagenMensaje: icon,
          mostrarMensaje: true,
          animating: false,
          botonesMostrados: buttons,
          individualSeleccionado: isIndividual, // Actualiza si es "Individual"
          dimensionActual: dimension,
        }));
      }, 500);
    } else {
      setState((prev) => ({
        ...prev,
        mensaje: message,
        imagenMensaje: icon,
        botonesMostrados: buttons,
        individualSeleccionado: isIndividual, // Actualiza si es "Individual"
        dimensionActual: dimension,
      }));
    }
  };

  const [tituloSubDimension, setTituloSubDimension] = useState("");
  const [textoSubDimension, setTextoSubDimension] = useState("");
  const [mensajeSubDimension, setMensajeSubDimension] = useState("");

  const manejarSubDimension = useCallback((index, state) => {
    setTituloSubDimension(state.dimensionActual.titulosSubdimensiones[index]);
    setTextoSubDimension(state.dimensionActual.textosSubdimensiones[index]);
    setMensajeSubDimension(state.dimensionActual.message);
  }, []);

  return (
    <>
      <div className="body">
        <div className="dimensiones">
          <div className="fila-dimensiones">
            {rows.fila1.map((dimension) => (
              <DimensionButton
                key={dimension.name}
                img={dimension.img}
                nombre={dimension.name}
                onClick={() => manejarSeleccionDimension(dimension)}
                animating={state.animating}
                animationClass="mostrando"
              />
            ))}
          </div>

          <div className="fila-dimensiones">
            {rows.fila2.map((dimension) => (
              <DimensionButton
                key={dimension.name}
                img={dimension.img}
                nombre={dimension.name}
                onClick={() => manejarSeleccionDimension(dimension)}
                animating={state.animating}
                animationClass="subiendo"
              />
            ))}
            {state.mostrarMensaje && (
              <Message img={state.imagenMensaje} texto={state.mensaje} />
            )}
          </div>

          <div
            className="botones-dimension"
            data-button-count={state.botonesMostrados.length}
            style={{
              display: state.botonesMostrados.length ? "table" : "table",
            }}
          >
            {[...Array(Math.ceil(state.botonesMostrados.length / 5))].map(
              (_, rowIndex) => (
                <div key={rowIndex} className="botones-dimension-row">
                  {state.botonesMostrados
                    .slice(rowIndex * 5, (rowIndex + 1) * 5)
                    .map((buttonImg, index) => (
                      <div
                        key={index}
                        className="boton-dimension"
                        onClick={() => manejarSubDimension(rowIndex*5 + index, state)}
                      >
                        <img
                          src={buttonImg}
                          alt={`Botón ${rowIndex * 5 + index + 1}`}
                        />
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
        <div className="semaforo">
          <div className="contenedor-semaforo">
            <img src={semaforo} alt="Semaforo" className="imagen-semaforo" />
            <div className="semaforo-rojo" onClick={() => null}></div>
            <div className="semaforo-amarillo"></div>
            <div className="semaforo-verde"></div>
          </div>

          <div className="mensaje-subdimension">
            <b>{tituloSubDimension}</b>
            <br />
            {textoSubDimension}
          </div>

          <div className="mensaje-semaforo">
            <p>{mensajeSubDimension}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
