// src/components/Body.jsx

import React, { useCallback, useState, useEffect } from "react";
import "../css/body.css";
import Footer from "./Footer";

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
import manejo_tiempo from "../images/Botones D. Acádemica/autogestion_academica.svg";

// Botones dimensión económica
import apoyo_economico_familiar from "../images/Botones D. Económica/apoyo_economico_familiar.svg";
import apoyo_economico_institucional from "../images/Botones D. Económica/apoyo_economico_institucional.svg";
import manejo_finanzas from "../images/Botones D. Económica/manejo_finanzas.svg";
import situacion_laboral from "../images/Botones D. Económica/situacion_laboral.svg";

// Botones dimensión familiar
//import dinamica_familiar from "../images/Botones D. Familiar/dinamica_familiar.svg";
import relaciones_familiares from "../images/Botones D. Familiar/relaciones_familiares.svg";
import red_apoyo_familiar from "../images/Botones D. Familiar/red_apoyo_familiar.svg";
import rol_estudiante_familia from "../images/Botones D. Familiar/rol_estudiante_familia.svg";

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
import autonomia from "../images/Botones D. Individual/Autonomia.svg";

// Botones dimensión vida universitaria
import adaptacion from "../images/Botones D. Vida universitaria/adaptacion.svg";
import oferta_servicio from "../images/Botones D. Vida universitaria/oferta_servicio.svg";
import motivaciones from "../images/Botones D. Vida universitaria/motivaciones.svg";
import referencia from "../images/Botones D. Vida universitaria/referencia.svg";
import vinculacion from "../images/Botones D. Vida universitaria/vinculacion_extracurricular.svg";
import vivienda from "../images/Botones D. Vida universitaria/vivienda.svg";
import movilidadTransporte from "../images/Botones D. Vida universitaria/Movilidad_transporte.svg";
import integracionCultura from "../images/Botones D. Vida universitaria/Integracion_cultura.svg";

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
      autonomia,
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
      "Autonomía",
      
    ],
    textosSubdimensiones: [
      "El proceso psicológico básico de la motivación contiene dos componentes principales: “los direccionales (que dan cuenta de la elección) y los energizadores (que dan cuenta de la iniciación, la persistencia y el vigor) de la conducta dirigida a meta”",
      "Tipo de saber que tiene cada sujeto de sí mismo, ya sea de sus representaciones, estados mentales, percepciones, acciones, de su cuerpo, entre otros. En esta temática se incluyen todos los aspectos de conocimiento de sí mismos que los estudiantes expresan sobre cómo se sienten, lo que desean, lo que piensan, lo que los impulsa a actuar, sus valores, todo aquello que constituye su ser desde tres pilares: identidad, autoestima y autoconstrucción.",
      "Conjunto de valoraciones, prácticas y relaciones establecidas por el estudiante; frente a su género, identidad sexual y preferencia sexual.",
      "Esta temática hace referencia a todas las narraciones de vida en tiempo pasado que realizan los estudiantes desde los diferentes contextos socioculturales que vivieron; da cuenta de las prácticas, creencias y valores familiares y culturales que influyen en sus decisiones y en sus formas de ver el mundo.",
      "Documento oficial emitido por la Administración que sirve para identificar a las personas por su nombre, nacimiento, nacionalidad y domicilio",
      "Esta temática engloba todos los proyectos y metas a mediano y largo plazo que los estudiantes manifestan en los acompañamientos entre pares. El proyecto de vida articula la identidad con las perspectivas y posibilidades de desarrollo futuro.",
      "todos aquellos vínculos que tiene el estudiante con otros individuos y/o grupos que sirven para mejorar la adaptación cuando este se enfrenta a situaciones de estrés, reto o privación y que sirven como instancia mediadora en la que se brinda apoyo social de tipo emocional, afectivo e informativo.",
      "Esta temática contiene todo lo referido por los estudiantes narrativamente en relación con sus relaciones eróticas, afectivas y sentimentales.",
      "Esta temática hace referencia a aquellas acciones que permitan identificar y conocer el estado de salud del estudiante, así como su evolución en caso de enfermedad o  accidente. También se refiere a los reportes que se tengan acerca de la salud mental del estudiante. \n- Informe de cómo se encuentra el estudiante de salud.\n- Informe sobre el seguimiento a sus citas médicas y psicológicas.\n- Informe sobre trámites de la EPS, del Servicio médico y psicológico.",
      "Se refiere a la capacidad de autogestión, resolución y toma de decisiones del estudiante. Reconociendo su momento vital, recursos de gestión de las emociones y de situaciones retadoras.",
    ],
    textosRojo: [
      "Las elecciones que el/la estudiante hace y los motivos de dichas elecciones -con respecto a su forma de actuar, relacionarse, pensar, creer, sentir, etc.-, no provienen de sus intereses, sino de otros actores (padres, familia, amigos, vecinos, sociedad o religión); y son motivadores a los que se obedece o responde; aún cuando no estén de acuerdo con el interés personal. O los motivadores, aunque son ajenos, no se perciben como tales y se ha sumido como propios.",
      "El reporte que el/la estudiante hace de sí mismo/a (forma de ser, habilidades, fortalezas, debilidades, etc.), responde a las expectativas del otro (familiares, monitor, practicante o profesional, etc.) o a estereotipos y no a la realidad; de manera que se dificulta el reconocimiento de sus condiciones, de sus posibilidades y de las limitaciones reales que estas  implican para su vida. ",
      "El género, la identidad sexual o las preferencias sexuales de el/la estudiante son fuente de angustia, o las niega. Las relaciones que establece con su familia, círculo cercano o entorno cotidiano son fuente de inseguridad o violencias (física, psicológica, social, económica, afectiva), sufrimiento y malestar. El/La estudiante se ve fuertemente afectado/a; no cuenta con apoyo, reconocimiento ni estabilidad.",
      "Las narrativas autobiográficas dan cuenta de situaciones y condiciones de precariedad e incertidumbre (económica, afectiva, de seguridad física, etc.) que dificultan las formas de relación actuales del estudiante, el afrontamiento de su vida y su proyecto educativo.",
      "El/La estudiante no cuenta con los documentos que le identifican o que acreditan su registro ante los servicios del Estado (cedula, libreta militar, sisben, etc). Desconoce su existencia, no tiene acceso a ellos y no sabe dar cuenta de su contenido o ubicación.",
      "El/La estudiante manifiesta no tener propósito alguno o tener propósitos poco realistas para su desarrollo personal y formativo; sin acciones efectivas o con acciones contrarias al logro de la meta.",
      "El/La estudiante no cuenta con una red de apoyo; se mantiene aislado/a del los grupos sociales que lo/la rodean y por lo tanto, no cuenta con amigos en quienes confiar. O cuenta con relaciones sociales que no velan o no están en condiciones de velar por su bienestar o, con quienes se involucra en situaciones que lo ponen en peligro.",
      "Reporte objetivo y honesto de relaciones poco sanas, pero en las que se permanece (por dependencia económica, afectiva; temor, inseguridad, incapacidad para estar solos, etc.). Reporte “engañoso” de relaciones sanas, aunque se detecten situaciones de agresión o vulneración, que no son percibidas como tales o que se encubren. Prácticas inseguras en las relaciones sexuales.",
      "El/La estudiante reporta o es evidente un estado de salud (física o mental) deteriorado que afecta sus actividades y que está siendo pasado por alto, soportado sin apoyo profesional, automedicado, sin tratamiento o con tratamiento intermitente. El/La estudiante niega un estado de salud deteriorado, aunque este es evidente y afecta sus actividades.",
      "Las acciones, decisiones y gestión emocional del estudiante, no corresponden a su momento vital. El estudiante depende de otras personas signficativas (Padres, pareja, amigos, otros) para gestionar retos de la vida cotidiana. El estudiante tiene dificultades para reconocer y aceptar la responsabilidad sobre sus acciones y decisiones; descargandola sobre otras personas de sus contexto social y familiar.",
    ],

    textosAmarillo: [
      "El/La estudiante  reconoce que los motivadores de algunas de sus acciones, elecciones, formas de relacionarse, etc.  están influenciados por las expectativas de otros (padres, familiares, vecinos, amigos,sociedad, religión), pero tiene con una posición clara frente a ellos.  Sin embargo, no descarta las motivaciones propias.",
      "El reporte que el/la estudiante realiza de sí mismo/a incluye el reconocimiento de sus fortalezas y debilidades, sin embargo no identifica claramente las posibilidades o limitaciones que estas implican.",
      "El/La estudiante expresa sentimientos de confusión y angustia frente a temas relacionados con el género, identidad sexual, preferencias sexuales, etc. Pero busca ayuda para aclarar sus dudas y cuenta con una red de apoyo confiable.",
      "Las narrativas autobiográficas dan cuenta de una historia personal en la que se reportan situaciones de vida que han sido difíciles. Sin embargo, estas situaciones han sido asumidas y no implican condiciones de precariedad o privación mayores. Aunque a veces la historia puede afectar las relaciones y el proyecto formativo; el estudiante se percibe fuerte frente a ella.",
      "El/La estudiante tiene la mayoría de sus documentos de identificación. Los documentos faltantes han sido tramitados, pero no se cuenta con una copia y pueden ser obtenidos por medios oficiales. El/La estudiante conoce su contenido y los medios de obtención.",
      "El /La estudiante manifiesta tener propósitos para su desarrollo personal y formativo realistas, acompañados de acciones dirigidas a alcanzarlos; pero que necesitan ser claramente definidas. O manifesta tener propósitos claros, sin acciones dirigidas a lograrlos a corto plazo (5 años o menos), pero con un plan claro a mediano o largo plazo.",
      "El/La estudiante cuenta con una red de apoyo que le genera bienestar, pero que en situaciones difíciles puede no ofrecer soporte. ",
      "Reporte objetivo de relaciones que no implican agresiones o vulneraciones a la/el estudiante, pero que le generan inseguridad o angustia. También relaciones que pueden implicar riesgo en el cambio de las condiciones y el proyecto de vida, y que no son un soporte para el/la estudiante. Prácticas predominantemente seguras en relaciones sexuales.",
      "El/La estudiante reporta o es evidente un estado de salud (física o mental) deteriorado que puede afectar o no sus actividades, pero que está siendo acompañado por un profesional y para el cual se sigue juiciosamente un tratamiento.  También, se observa el cumplimieto de la recomendaciones médicas pertinentes a su caso.",
      "En algunas ocasiones, las acciones, decisiones y gestión emocional del estudiante, no corresponden a su momento vital.  Sin embargo, el estudiante gestiona la mayoría de los retos de la vida cotidiana. El estudiante esta empenzando a reconocer y aceptar la responsabilidad sobre sus acciones y decisiones, pero todavia descarga parte de la responsabilidad en otras personas de contexto social y familiar.",
    ],

    textosVerde: [
      "El/La estudiante tiene motivadores que se originan en su propio interés y actua en consecuencia. Estos motivadores son independientemente de las expectativas ajenas y se les puede obedecer o no. Motivadores propios para sus acciones y elecciones.",
      "El reporte que el/la estudiante hace de sí mismo/a, le permite el reconocimiento honesto y reflexionado de sus fortalezas y debilidades (personales, académicas, mentales, afectivas, relacionales, corporales,etc); así como, identificar claramente las posibilidades y limitaciones que éstas implican.",
      "El/La estudiante ha establecido relaciones sanas, de respeto, y reconocimiento frente a su género, identidad sexual y preferencia sexual; así como, frente a los demás. La familia, el círculo social cercano y el contexto cotidiano del estudiante son fuente de seguridad y bienestar ante sus relaciones, preferencias e identidad sexual; ofrecen apoyo y estabilidad.",
      "En términos generales, los relatos de la historia de vida son positivos: entorno de crecimiento saludable; con experiencias de crianza que dan cuenta de buenas relaciones familiares, sociales, con el saber y que han favorecido la autonomía y la seguridad (económica, afectiva, física, etc.) del estudiante para enfrentar la vida adulta y su proyecto educativo.",
      "El/La estudiante cuenta con todos sus documentos al día y a su disposición (documento de identificación, libreta militar, certificados académicos, certificados de pertenencia a grupos poblacionales específicos, documentos de su crédito educativo, documentación legal y bancaria, etc.). El/La estudiante ha hecho los trámites de portabilidad ante su servicio de salud, por lo tanto cuenta con atención a nivel local.",
      "El /La estudiante manifiesta tener propósitos para su desarrollo personal y formativo claros y realistas; acompañados de acciones efectivas dirigidas al logro de los mismos en la actualidad.",
      "El/La estudiante cuenta con una red de apoyo fuerte y amplia; tiene amigos cercanos en los que puede confiar y que propenden por su bienestar; con los que puede contar en situaciones difíciles.",
      "Reporte objetivo y honesto de relaciones sanas (Que son un soporte para el estudiante y en la que el/la estudiante se siente, confiado, correspondido; es bien tratado, respetado, valorado y apoyado). Prácticas seguras en relaciones sexuales.",
      "El/La estudiante reporta y es evidente un buen estado de salud. Sus actividades cotidinas no se ven afectadas por malestar físico o mental.",
      "Las acciones, decisiones y gestión emocional del estudiante, corresponden a su momento vital y gestiona los retos de la vida cotidiana. El estudiante reconoce y acepta la responsabilidad sobre sus acciones y decisiones; aun cuando otras personas hayan participado en la situación.",
    ],
  },

  {
    name: "Familiar",
    img: familiar,
    icon: icon_familiar,
    buttons: [relaciones_familiares, red_apoyo_familiar, rol_estudiante_familia],
    message:
      "Corresponde a la descripción de la dinámica familiar y cómo esta dinámica es una barrera o un facilitador en la elección y la permanencia en el programa académico.",
    titulosSubdimensiones: ["Relaciones Familiares", "Red de Apoyo Familiar", "Rol del estudiante en la familia"],
    textosSubdimensiones: [
      "Narraciones del estudiante que den cuenta del tipo de conexiones y vínculos entre los miembros de su círculo familia. También, de los relatos con respecto al efecto de estos vínculos en su desarrollo, en su proceso formativo y en su vida afectiva.",
      "Narraciones del estudiante acerca de la respuesta de su familia y de su círculo de mayor confianza ante situaciones en las que él requiere apoyo.",
      "Naraciones de estudiante que den cuenta de las responsabilidades, actividades, expectativas frente a la vida familiar que se le encargan al estudiante  y, el efecto de estas en su vida cotidiana."
    ],
    textosRojo: [
      "El/la estudiante tiene relaciones conflictivas con los miembros de su familia. \n- El/la estudiante refiere que entre los miembros de su familia hay múltiples problemas, crisis recurrentes y situaciones crónicas de adversidad y/o violencia intrafamiliar.",
      "El/la estudiante tiene una red de apoyo familiar ausente o inexistente, puesto que cuando se le presenta una dificultad personal, éste no recibe ningún tipo de ayuda por parte de su familia o los que considera su grupo familiar. El/la estudiante carece de cualquier tipo de red de apoyo familiar que le puede brindar soporte.",
      "El rol (hijo/a, hermano/a, cuidador/a, aportante económico) que ejerce el/la estudiante en su familia interfiere en sus compromisos académicos tales como: faltar a clases, no presentarse a los parciales, cancelar asignaturas, cancelar el semestre."
    ],
    textosAmarillo: [
      "El/la estudiante tiene relaciones conflictivas con algunos miembros de su familia, pero son superables y momentáneas.",
      "El/la estudiante tiene un mediano apoyo emocional, económico, de alimentación y vivienda por parte de su familia o familiares. El/la estudiante tiene una red de apoyo familiar débil, puesto que cuando se le presenta una dificultad personal éste no recibe la ayuda de manera completa u oportuna.",
      "El rol (hijo/a, hermano/a, cuidador/a, aportante económico) que ejerce el/la estudiante en su familia interfiere el algunas ocasiones con sus compromisos académicos. "
    ],
    textosVerde: [
      "El/la estudiante manifiesta que se mantiene una dinamica relacional óptima y sana entre los miembros de la familia.",
      "El/la estudiante recibe apoyo emocional de su familia, así como económico, de alimentación y vivienda, entre otros.                                                                                          El/la estudiante cuando se le presenta una dificultad personal inicialmente acude a su familia como su principal red de apoyo.",
      "El rol (hijo/a, hermano/a, cuidador/a, aportante económico) que ejerce el/la estudiante en su familia no interfiere con sus compromisos académicos."
    ],
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
      "Autogestión Académica",
    ],
    textosSubdimensiones: [
      "Esta temática incluye las narraciones realizadas por los estudiantes en torno a las metodologias utilizadas en las clases, información de las diversas asignaturas y seguimientos académicos; ejemplo: reporte del rendimiento académico (notas), reporte de la carga académica, informe de las necesidades académicas identificadas con el estudiante (bases conceptules para las diversas asignaturas) y refuerzo académico (asesorías académicas). Además, se incluye la revisión de las habilidades académicas y recursos con los que el estudiante cuenta para superar la exigencia en sus asignaturas.",
      "Esta temática  hace referencia a las preferencias de áreas disciplinares y carreras de los/las estudiantes, la búsqueda de información y conocimiento de sus carreras de elección y las estrategias implementadas por los monitores para contribuir en sus procesos de orientación vocacional, concebida ésta como un vínculo conversacional en el que el estudiante recibe apoyo dirigido a  encontrar alternativas y tomar decisiones, de manera consciente, informada, voluntaria y comprometida (De Mori & Santiviago, s.f.).",
      "La autogestión académica hace referencia a la capacidad del estudiante para organizar, regular y orientar de forma autónoma su proceso de aprendizaje. Implica planificar su tiempo, establecer metas, identificar y aplicar estrategias de estudio, mantener la motivación, manejar el estrés académico y la procrastinación con el fin de tomar decisiones conscientes que favorezcan su desempeño y bienestar académico. Britton, B., & Tesser, A. (1991). Effects of time management practices of college grades. Journal of Educational Psychology, 83 (3), pp. 405-410",
    ],
    textosRojo: [
      "El/la estudiante tiene un bajo rendimiento academico durante los primeros semestres, asignaturas en repitencia y un promedio menor a 3.5. El/la estudiante manifiesta que presenta dificultades para avanzar en su proceso academico, no logra identificar sus fortalezas y debilidades ante el reto. El/la estudiante presenta dificultades académicas en sus cursos y en los encuentros se evidencia que estas persisten en su historia académica  y se remontan a dominios conceptuales y procedimentales que debieron consolidarse en las etapas formativas previas  (Primaria, secundaria, semestres anteriores). Estas dificultades no han sido trabajadas conciezudamente o se han trabajado sin presentar avances. Cuando se le recomiendan los espacios dinamizados por la Estrategia ASES (monitoria socio-educativa, moitorias academicas, talleres, etc), no asiste y/o no estudia previamente para las clases, monitorias y parciales, afirma que solo con lo visto en clase es suficiente para su proceso academico. El/la estudiante no tiene establecido en su horario espacios para repaso constante de las asignaturas, manifesta que solo realiza los talleres y actividades cuando se programan en clase, no realiza estudio independiente y/o intenta memorizar la mayor parte de sus clases, no comprende el uso y la conexión de los temas y las asignaturas; atribuyendo sus malos resultados académicos a factores externos (el profesor, el grupo, la familia, etc)  El/la estudiante manifiesta que regularmente falta a las clases que tiene programadas en su horario o que teme fracasar en su proyecto formativo, por lo cual decide tomar opciones rapidas y faciles para tener buenas notas. Manifiesta que ha pensado en abandonar la carrera.",
      "El/la estudiante  refiere que no se siente satisfecho con la carrera que cursa, manifiesta que no fue su elección, pero no busca acciones de cambios. El/la estudiante manifiesta que su familia o red de apoyo impuso la elección vocacional y/o el ingreso a la universidad.",
      "El/la estudiante no reconoce que tiene dificultades para: \n-Planear, priorizar y distribuir las actividades académicas en función de metas y plazos.\n-Establecer hábitos y rutinas de estudio.\n-Identificar y aplicar estrategias de estudio.\n-Manejo del estrés y procrastinación académica. \n-Dar seguimiento a su propio desempeño académico (Autorregulación). \nEl estudiante no utiliza estrategias para mejorar estos aspectos.",
    ],
    textosAmarillo: [
      "El/la estudiante en ocasiones reconoce que los malos resultados académicos que obtienen son su responsabilidad, sin embargo no emprende transformaciones en sus prácticas y/o se limita a obtener calificaciones aprobatorias, su interes está centrando en descubrir cómo ser buen estudiante y sobresalir según las exigencias del profesor. Es un/una estudiante que busca el reconocimiento externo. El/la estudiante manifiesta que presenta dificultades para avanzar en su proceso academico, identifica las fortalezas y  debilidades y busca alternativas de apoyo dirigidas al cambio. Asiste a los espacios dinamizados por la Estrategia ASES; sin embargo, refiere que no obtiene buenos resultados académicos (notas) y/o logra aprender todo los procedimientos, pero no comprende nuevas formas de resolver problemas, presentando dificultades en manejar situaciones nuevas. El/la estudiante refiere constantemente que el nivel academico de su educación previa no es bueno, afirma que no conoce temas que los/las profesores/ras dicen que ya deben conocer. El/la estudiante presenta dificultades académicas en sus cursos y en los encuentros se evidencia que estas persisten en su historia académica  y se remontan a dominos conceptuales y procedimentales que debieron consolidarse en las etapas formativas previas  (Primaria, secundaria, semestres anteriores). Estas dificultades están siendo trabajadas  y empieza a presentar avances en ellas. Cuando a el/la estudiante se le presenta una dificultad acádemica acude a sus amigos, monitores/ras socio-educativos, academicos o docentes; sin embargo estos apoyos no son suficientes para responder a la exigencia académica.",
      "El/la estudiante fue influenciado/a en la elección de la carrera universitaria que actualmente cursa, manifiesta no sentirse satisfecho, pero busca mecanismos y acciones de cambio. El/la estudiante refiere que no tiene claridad sobre el programa academico que cursará, sin embargo esta dispuesto a conocer y revisar su elección vocacional.",
      "El/la estudiante reconoce que presenta algunas dificultades para: \n-Planear, priorizar y distribuir las actividades académicas en función de metas y plazos.\n-Establecer hábitos y rutinas de estudio.\n-Identificar y aplicar estrategias de estudio.\n-Manejo del estrés y procrastinación académica. \n-Dar seguimiento a su propio desempeño académico (Autorregulación). \nSin embargo, no utiliza estrategias para mejorar estos aspectos, o las utilizadas no resultan efectivas",
    ],
    textosVerde: [
      "El/la estudiante manifiesta que  actualmente tiene un buen desempeño académico, es muy conciente de que sus resultados académicos (aún cuando no son los deseados) son su responsalibilidad, identifica claramente dónde están las dificultades y define e implementa acciones claras de mejoramiento de sus prácticas. El/la estudiante refiere constantemente que el nivel academico de su educación secundaría fue bueno, afirma que conoce y maneja los  temas que los/las profesores/ras dicen que ya deben conocer. Cuando a el/la estudiante se le presenta una dificultad acádemica acude a sus amigos, monitores/ras socio-educativos, academicos o docentes. Se observa que el estudiante realiza estudio previo y tiene dudas puntuales en las asesorias solicitadas.  El/la estudiante se empeña en comprender el significado, pensar sus implicaciones y aplicaciones. Es un/una estudiante que  busca la motivación en si mismo/misma, por lo cual enfrenta sus retos academicos realizando analisis, sintesis, evaluación e hipotesis para construir teorias respecto a lo que se le presenta. El/la estudiante esta dispuesto a fallar y reconoce su fracaso para aprender del error. Se observa que esto no le afecta en su autoestima, pues comprende que es un proceso normal dentro del aprendizaje.",
      "El/la estudiante manifiesta que eligió su carrera universitaria sin presión de su red de apoyo y refiere que ha investigado y conoce aspectos generales sobre el programa academico que ha elegido. Manifiesta que se siente conforme con la elección realizada. ",
      "El/la estudiante reconoce dificultades para: \n-Planear, priorizar y distribuir las actividades académicas en función de metas y plazos.\n-Establecer hábitos y rutinas de estudio.\n-Identificar y aplicar estrategias de estudio.\n-Manejo del estrés y procrastinación académica. \n-Dar seguimiento a su propio desempeño académico (Autorregulación). \nPor lo cual utiliza estrategias para mejorar en estos aspectos.\n Se observa el/la estudiante no presenta dificultades en la autogestión académica y se identifica que, cuando hay alguna dificultad, las estrategias utilizadas son efectivas. ",
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
    textosSubdimensiones: [
      "Esta temática involucra aspectos económicos y sociológicos como la preparación laboral, ubicación social y familiar en la sociedad. Lo socioeconómico es entendido como un “enfoque teórico y metodológico necesariamente transdisciplinar, que pretende entender integralmente la complejidad social a partir de la observación, descripción y análisis orientada a la acción en y desde la realidad” (Coraggio & Arancibia, 2006).",
      "Apoyos económicos institucionales: Incluye el reporte de la necesidad del estudiante de acceder a los apoyos institucionales o gubernamentales; así como todos las gestiones que los estudiantes realizan para recibir apoyos económicos. (ICETEX, Jóvenes en Acción / renta jóven  Bienestar Universitario,  monitorias, etc.)",
      "Principios y herramientas que ayudan a optimizar los recursos financieros conque cuenta una persona. Esta temática contiene todos los aspectos de manejo de dinero, inversión de recursos, ingresos y egresos financieros, mecanismos de ahorro, entre otros.",
      "Se refiere a las diversas actividades que realiza el estudiante para cubrir sus gastos personales y académicos; y la relación de estas ocupaciones con su actividad académica en la Universidad.",
    ],
    textosRojo: [
      " La familia y/o principal red de apoyo, no brinda apoyo socioeconómico al estudiante y el/la estudiante manifiesta que el dinero para su manutención no es suficiente. En ocasiones el/la estudiante apoya económicamente a su familia y/o principal red de apoyo. La familia y/o principal red de apoyo del estudiante no cuenta con recursos suficientes para apoyar el sostenimiento. El estudiante no permite el apoyo de su red familiar y/o red de apoyo por situaciones de dinamicas internas que han generado una inestabilidad en las relaciones familiares. ",
      " Los recursos con los que cuenta son insuficientes y no tiene ningún tipo de apoyo económico institucional. El/la desconoce los diferentes apoyos instituccionales y las rutas de activación de estos apoyos o, los conoce pero ha realizado pocas gestiones para acceder a los apoyos económicos disponibles, tanto a nivel institucional como gubernamental ",
      " Los recursos económicos con los que cuenta resultan insuficientes y  presenta dificultades en la priorización de los mismos para sus gastos académicos y de manutención. ",
      " El/La estudiante debe trabajar para cubrir sus gastos, y esta situación generalmente compite con su actividad académica o su disposición al acompañamiento socioeducativo. Sus condiciones laborales tiene efectos negativos a nivel físico y mental. El/la estudiante no cuenta con las condiciones fisicas y/o cognitivas que le permitan trabajar para cubrir sus gastos.  Estas condiciones no son reconocidas por las personas de su entorno laboral, lo que genera inestabilidad en este aspecto. ",
    ],
    textosAmarillo: [
      " La familia y/o principal red de apoyo brinda apoyo económico, pero el/la estudiante manifiesta que el dinero recibido no le alcanza para cubrir sus gastos.  El/la estudiante manifiesta que el apoyo económico de su familia o principal red de apoyo es intermintente y depende de situaciones que escapan a su control.",
      " Los recursos con los que cuenta en ocasiones resultan insuficientes, aunque tiene algún apoyo económico institucional.                                                                                                                                                                                                                                                                                                                                                                El/la estudiante tiene poco conocimiento sobre los pasos a seguir para acceder a los apoyos económicos disponibles, tanto a nivel institucional como gubernamental, pero acude a las instancias que le pueden brindar la información requerida. El/la estudiante ha iniciado algunos trámites para solicitar apoyos, sin embargo debe esperar el tiempo establecido por la institución para recibirlo y ha empezado a generar opciones o planes para solvertar su necesidad durante la espera.",
      " Los recursos económicos con los que cuenta son suficientes, pero no realiza una priorización de los mismos para su manutención y gastos académicos.",
      " El/La estudiante debe trabajar para cubrir sus gastos, y esto en algunas ocasiones compite con sus actividades académicas o disposición al acompañamiento socioeducativo.  El/la estudiante tiene periodos en los que no cuenta con las condiciones físicas y/o cognitivas que le permitan trabajar para cubrir sus gastos; sin embargo, algunas personas en su entorno laboral reconocen estas condiciones y ofrecen mecanismos o recursos que facilitan las labores.   Esta situación genera incertidumbre sobre su permanencia en el entorno laboral y su estabilidad económica.",
    ],
    textosVerde: [
      " La familia y/o principal red de apoyo brinda apoyo económico constante a el/la estudiante, y éste resulta suficiente para cubrir sus gastos. ",
      " El/la estudiante requiere apoyo ecónomico, pero conoce las acciones para gestionar apoyos economicos y los ha gestionado correctamente ante las dependencias institucionales y/o gubernamentales, lo que le permite contar con este ingreso.  El estudiante es conciente de los requisitos que dede sostener a nivel académico, para mantener el apoyo económico.  ",
      " Los recursos económicos con los que cuenta son suficientes y realiza una priorización para su manutención y gastos académicos. ",
      " El/La estudiante debe trabajar para complementar sus gastos, y esta actividad no compite con sus actividades académicas ni su disposición al acompañamiento socioeducativo.  El/la estudiante cuenta con condiciones físicas y cognitivas que le permiten trabajar para cubrir sus gastos, o cuenta con un empleo en el que sus condiciones son reconocidas, comprendidas y se le ofrecen habitualmente los recursos y mecanismos para que pueda desempeñarse en su labor.  Su estabilidad laboral y económica no está en riesgo.",
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
      movilidadTransporte,
      integracionCultura,
    ],
    message:
      "Corresponde a la información que refiere el/la estudiante respecto a la percepción que éste tiene de su vida en la Universidad y el territorio. Además de la participación en los diferentes espacios de la Universidad (espacios extracurriculares, monitorías, , servicios de la Universidad, grupos universitarios, etc.)  y del territorio (vivienda, barrio, transporte, sitios representativos, espacios culturales, etc.)",
    titulosSubdimensiones: [
      "Adaptación a la Ciudad y la Universidad",
      "Oferta de Servicios",
      "Motivaciones Para el Acompañamiento",
      "Referenciación Geográfica",
      "Vinculación a grupos estudiantiles o externos",
      "Vivienda",
      "Movilidad y Transporte",
      "Integración a la cultura universitaria",
    ],
    textosSubdimensiones: [
      "Esta temática involucra todo lo expresado por los estudiantes en relación con la adaptación que se encuentran realizando al nuevo contexto de ciudad en el que se encuentra, para el caso de estudiantes que proceden de otros municipios y regiones del país. Además de las diferentes experiencias que expresan los estudiantes con relación a su adaptación a la Universidad.",
      "En este apartado se identifica el reconocimiento y la participación de los y las estudiantes en los espacios y servicios institucionales (servicio de psicología, bienestar universitario, acompañamiento socioeducativo, talleres, actividades, etc.)",
      "Esta temática aborda los momentos de presentación entre el monitor y el estudiante, incluyendo además la explicación de la estrategia ASES y expectativas de ingreso a la universidad de parte de los estudiantes y del acompañamiento que van a tener.",
      "En este apartado nos encontramos con el conocimiento por parte de los estudiantes, de las caracteristicas y lugares de los territorios cotidianos (tanto en la universidad como en la ciudad, minicipio o distrito que habitan)",
      "Este apartado contiene lo relacionado con el interés, exploración y vinculación de los estudiantes a grupos estudiantiles, académicos, investigativos, culturales, y deportivos de la Universidad del Valle o externos.",
      "Esta temática contiene todas las particularidades de vivienda de los estudiantes, incluyendo organización del espacio, problemas con los inquilinos, entre otros y la utilización del programa GeoCalízate.",
      "En esta temática se identifica todo lo relacionado con el deplazamiento que realizan los y las estudiantes para llegar desde su vivienda al campus; teniendo en cuenta que algunos son foráneos, otros residen fuera del municipio y no todos cuentan con transporte particular para desplazarse.",
      "En este apartado se hace referencia a cómo el/la estudiante se identifica y se siente acogido/a en la comunidad universitaria; donde se identifica su nivel de conexión con el entorno, el grado de integración a las dinámicas institucionales, la calidad de sus relaciones con compañeros/as, docentes y equipos de apoyo, así como su disposición a participar en actividades, espacios y servicios ofrecidos por la universidad.",
    ],
    textosRojo: [
      "El/la estudiante manifiesta que la adaptación al territorio ha sido muy difícil, se siente inseguro/a por las situaciones de violencia en el contexto, no soporta el clima, evita salir de la vivienda, o expresa que ha considerado abandonar la universidad por motivos de ubicación.",
      "El/la estudiante no reconoce los servicios institucionales; o reconoce los servicios de la Universidad, pero no acude ni participa en las actividades propuestas desde las dependencias; se aísla o expresa desinterés en participar. ",
      "El/la estudiante no tiene interés por encontrarse con el monitor y por acceder al acompañamiento, sus expectativas sobre su ingreso a la Universidad y su proyecto académico son limitadas. Por lo tanto, no acude a los encuentros, ni establece comunicaciones efectivas con el monitor",
      "Manifiesta amplio desconocimiento de las caracteristicas y lugares de la Universidad, Ciudad, municipio o distrito, lo cual genera en el/la estudiante incertidumbre, inseguridad y riesgos a la hora de habitar los espacios y realizar sus actividades personales y académicas.",
      "El/la estudiante no conoce los grupos estudiantiles universitarios, ni expresa algún interés por participar en los mismos; o por el contrario se dedica mucho tiempo a esas actividades y desatiende sus responsabilidades académicas.",
      "Las condiciones de la vivienda (ubicación, físicas, convivencia, etc) impiden la realización de sus actividades personales y académicas. No busca alternativas frente a esta situación o no cuenta con las condiciones para resolverla.",
      "El/la estudiante presenta problemas frecuentes para llegar a clases (largos trayectos, transporte costoso o inseguro); ha faltado o llegado tarde reiteradamente.",
      "El/la estudiante expresa que no se identifica con el entorno de la universidad ni con las dinámicas institucionales; se ha sentido excluido/a por parte de compañeros y/o docentes; expresa que no se ha interesado por participar en actividades más allá de las clases; presenta dificultades en sus habilidades de relaciones interpersonales y se le dificulta establecer vínculos con compañeros/as o docentes; expresa que ha considerado abandonar la universidad. Dinámicas como los paros, asambleas, espacios de participación estudiantil, le son ajenos y pueden llevarlo/la a abandonar la Universidad.",
    ],
    textosAmarillo: [
      "El/la estudiante expresa que ha tenido algunas dificultades en su adaptación al territorio; hay incomodidades sobre la seguridad, el clima o las dinámicas del territorio; sin embargo, plantea alternativas que debe materializar para lograr una mejor adaptación.",
      "El/la estudiante reconoce los servicios institucionales, participa ocasionalmente pero no se compromete con los procesos propuestos.  El/la estudiante manifieta que se encuentra interesado/da en participar, pero no encuentra la manera de integrarse.",
      "Manifiesta algún interes por el proceso de acompañamiento, sin embargo no tiene mucha claridad sobre los aportes del mismo en su proceso universitario o comprende en qué consiste el acompañamiento, pero tiene poca asistencia con el monitor.",
      "Manifiesta parcial desconocimiento de las caracateristicas y lugares de la Universidad, cuidad, municipio o distrito,  sin embargo esto no le impide a el/la estudiante realizar sus actividades cotidianas (personales y académicas).",
      "El/la estudiante no conoce los grupos estudiantiles universitarios; sin embargo, expresa intención en participar de estos espacios. El/la estudiante se vincula y participa de las actividades de los grupos, pero no encuentra un equilibrio entre estas y sus responsabilidades académicas.",
      "Las condiciones de la vivienda (ubicación, físicas, convivencia, etc) dificultan la realización de sus actividades personales y académicas. El/la estudiante está buscando alternativas para trasladarse a una vivienda con mejores condiciones",
      "El/la estudiante expresa que el transporte representa un esfuerzo o gasto alto, pero cuenta con un soporte el cual le permite cumplir sus horarios y asisitir de manera puntual a las clases, con dificultades ocasionales.",
      "El/la estudiante presenta una actitud ambivalente frente a la percepción de pertenencia universitaria; reconoce aspectos positivos del campus y compañeros, pero no logra sentirse completamente integrado/a; participa de manera esporádica o intermitente de los espacios institucionales; presenta dificultades para relacionarse con grupos o actividades aunque le llamen la atención. Dinámicas como los paros, asambleas y espacios de participación estudiantil, aunque pueden resultarle ajenos, no son un motivo determinante para considerar el abandono de la Universidad."
    ],
    textosVerde: [
      "El/la estudiante manifiesta que ha logrado adaptarse adecuadamente al territorio, se siente cómodo/a y seguro/a,  lo cual favorece la realización de sus actividades tanto personales como académicas.",
      "El/la estudiante reconoce los servicios institucionales y participa de manera frecuente y comprometida de los procesos, actividades y espacios dispuestos.",
      "Manifiesta interés genuino por todos los componentes del proceso de acompañamiento. Considera que este puede aportar significativamente en su proceso como univesitario y se mantiene constante en los encuentros con el monitor.",
      "Manifiesta un amplio conocimiento geográfico de la Universidad, Ciudad, municipio o distrito lo cual facilita la realización de sus actividades cotidianas, personales y académicas.",
      "El/la estudiante conoce los grupos estudiantiles universitarios, y participa en las actividades propuestas en el grupo. Logra alternar estas actividades responsablemente con sus actividades académicas.                                                                                       El/la estudiante conoce los grupos de la universidad, y no está interesado en participar específicamente de estos espacios pues cuenta con otro intereses y otros lugares de relación.",
      "Las condiciones de la vivienda (ubicación, físicas, convivencia, etc) son óptimas y facilitan la realización de sus actividades personales y académicas",
      "El/la estudiante tiene rutas estables, tiempos razonables de desplazamiento y se siente cómodo/a usando el transporte disponible. O cuenta con transporte particular sin ninguna dificultad extra.",
      "El/la estudiante expresa que se siente parte de la comunidad universitaria; se identifica con el entorno y valora su experiencia; manifiesta que siente que puede crecer y desarrollarse en este entorno; participa activamente de espacios extracurriculares; mantiene relaciones positivas con sus pares y muestra disposición para integrarse y contribuir a la comunidad . Entiende que la dinámicas como paros, asambleas y espacios de participación estudiantil, son parte de la vida universitaria y estas situaciones no lo impulsan a abandonar la Universidad."
    ],
  },
];

const queEsSemaforo =
  "El Semáforo de Alertas es un desarrollo metodológico de la Estrategia ASES que integra el conocimiento de diferentes disciplinas, alrededor de los fenómenos de la deserción y fracaso académico, permitiéndonos realizar una aproximación a la comprensión de las diferentes situaciones que experimentan nuestros estudiantes; y los riesgos que pueden estar asociados a las mismas.";
const queEsSemaforo2 =
  "La herramienta del Semáforo de Alertas considera un amplio abanico de situaciones que se encuentran categorizadas en 5 dimensiones: individual, familiar, académica, económica y de vida universitaria y ciudad. A su vez, cada dimensión incluye una serie de temáticas que con frecuencia son abordadas durante los acompañamientos. Finalmente, estas temáticas se desarrollan mediante una serie de descriptores que sirven de guía al monitor socioeducativo para categorizar los niveles de riesgo en cada caso. ";

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
    dimensionActual: null,
  });

  const manejarSeleccionDimension = (dimension) => {
    const { icon, message, buttons } = dimension;

    setSubDimensionClicked(false);
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
  const [subDimensionClicked, setSubDimensionClicked] = useState(false);

  const [mensajeSemaforo, setMensajeSemaforo] = useState("");
  const [tituloSemaforo, setTituloSemaforo] = useState("");
  const [estiloTituloSemaforo, setEstiloTituloSemaforo] = useState({});
  const [estiloSemaforo, setEstiloSemaforo] = useState({});

  const mostrarMensajeSemaforo = useCallback(
    (color) => {
      if (color === "rojo") {
        setMensajeSemaforo(
          state.dimensionActual?.textosRojo[
            state.indiceSubDimensionActual
          ]?.trim()
        );
        setTituloSemaforo("RIESGO ALTO");
        setEstiloSemaforo({
          backgroundColor: "#ff8983",
        });
        setEstiloTituloSemaforo({
          color: "#9f1915",
        });
      } else if (color === "amarillo") {
        setMensajeSemaforo(
          state.dimensionActual?.textosAmarillo[
            state.indiceSubDimensionActual
          ]?.trim()
        );
        setTituloSemaforo("RIESGO MODERADO");
        setEstiloSemaforo({
          backgroundColor: "#d1ca4a",
        });
        setEstiloTituloSemaforo({
          color: "#726d04",
        });
      } else if (color === "verde") {
        setMensajeSemaforo(
          state.dimensionActual?.textosVerde[
            state.indiceSubDimensionActual
          ]?.trim()
        );
        setTituloSemaforo("RIESGO BAJO");
        setEstiloSemaforo({
          backgroundColor: "#4ddac3",
        });
        setEstiloTituloSemaforo({
          color: "#0f7d0f",
        });
      }
    },
    [state.indiceSubDimensionActual, state.dimensionActual]
  );

  const manejarSubDimension = useCallback(
    (index) => {
      setSubDimensionClicked(true);
      setTituloSubDimension(state.dimensionActual.titulosSubdimensiones[index]);
      setTextoSubDimension(state.dimensionActual.textosSubdimensiones[index]);
      setState((prev) => ({ ...prev, indiceSubDimensionActual: index }));
    },
    [state]
  );

  useEffect(() => {
    if (state.indiceSubDimensionActual !== -1) {
      mostrarMensajeSemaforo("rojo");
    }
  }, [state.indiceSubDimensionActual, mostrarMensajeSemaforo]);

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
                        onClick={() =>
                          manejarSubDimension(rowIndex * 5 + index, state)
                        }
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
            <div
              className="semaforo-rojo"
              onClick={() => mostrarMensajeSemaforo("rojo", state)}
            ></div>
            <div
              className="semaforo-amarillo"
              onClick={() => mostrarMensajeSemaforo("amarillo", state)}
            ></div>
            <div
              className="semaforo-verde"
              onClick={() => mostrarMensajeSemaforo("verde", state)}
            ></div>
          </div>
          <div
            className="mensaje-subdimension"
            style={
              subDimensionClicked
                ? { backgroundColor: "#384a60", color: "white" }
                : {
                    backgroundColor: "transparent",
                    color: "#384a60",
                    outline: "2px solid #384a60",
                  }
            }
          >
            <p style={subDimensionClicked ? {} : { color: "inherit" }}>
              <b style={subDimensionClicked ? {} : { color: "#384a60" }}>
                {subDimensionClicked
                  ? tituloSubDimension
                  : "¿Qué es la estrategia del semáforo?"}
              </b>
              <br />
              {subDimensionClicked ? textoSubDimension : queEsSemaforo}
            </p>
          </div>
          <div
            className="mensaje-semaforo"
            style={
              subDimensionClicked
                ? estiloSemaforo
                : {
                    backgroundColor: "transparent",
                    border: "2px solid #384a60",
                    color: "#384a60",
                  }
            }
          >
            <p style={subDimensionClicked ? {} : { color: "#384a60" }}>
              {subDimensionClicked ? (
                <b
                  style={
                    subDimensionClicked
                      ? estiloTituloSemaforo
                      : { color: "inherit" }
                  }
                >
                  {tituloSemaforo}
                </b>
              ) : null}
              <br />
              {subDimensionClicked ? mensajeSemaforo : queEsSemaforo2}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Body;
