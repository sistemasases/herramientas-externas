// src/components/Body.jsx

import React, { useCallback, useState, useEffect } from "react";
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
    textosRojo: [
      "Las elecciones que el/la estudiante hace y los motivos de dichas elecciones -con respecto a su forma de actuar, relacionarse, pensar, creer, sentir, etc.-, no provienen de sus intereses, sino de otros actores (padres, familia, amigos, vecinos, sociedad o religión); y son motivadores a los que se obedece o responde; aún cuando no estén de acuerdo con el interés personal. O los motivadores, aunque son ajenos, no se perciben como tales y se ha sumido como propios",
      "El reporte que el/la estudiante hace de sí mismo/a (forma de ser, habilidades, fortalezas, debilidades, etc.), responde a las expectativas del otro (familiares, monitor, practicante o profesional, etc.) o a estereotipos y no a la realidad; de manera que se dificulta el reconocimiento de sus condiciones, de sus posibilidades y de las limitaciones reales que estas implican para su vida.",
      "Las narrativas autobiográficas dan cuenta de situaciones y condiciones de precariedad e incertidumbre (económica, afectiva, de seguridad física, etc.) que dificultan las formas de relación actuales del estudiante, el afronta.",
      "Las narrativas autobiográficas dan cuenta de situaciones y condiciones de precariedad e incertidumbre (económica, afectiva, de seguridad física, etc.) que dificultan las formas de relación actuales del estudiante, el afrontamiento de su vida y su proyecto educativo",
      "El estudiante no cuenta con los documentos que lo identifican o que acreditan su registro ante los servicios del Estado (cedula, libreta militar, SISBEN, etc.). Desconoce su existencia, no tiene acceso a ellos y no sabe dar cuenta de su contenido o ubicación.",
      " El/La estudiante manifiesta no tener propósito alguno o tener propósitos poco realistas para su desarrollo personal y formativo; sin acciones efectivas o con acciones contrarias al logro de la meta. ",
      " El/La estudiante no cuenta con una red de apoyo; se mantiene aislado/a del los grupos sociales que lo/la rodean y por lo tanto, no cuenta con amigos en quienes confiar. O cuenta con relaciones sociales que no velan o no están en condiciones de velar por su bienestar o, con quienes se involucra en situaciones que lo ponen en peligro. ",
      " Reporte objetivo y honesto de relaciones de pareja poco sanas, pero en las que se permanece (por dependencia económica, afectiva; temor, inseguridad, incapacidad para estar solos, etc.). Reporte “engañoso” de relaciones de pareja sanas, aunque se detecten situaciones de agresión o vulneración, que no son percibidas como tales o que se encubren. Prácticas inseguras en las relaciones sexuales. ",
      " El/La estudiante reporta o es evidente un estado de salud (física o mental) deteriorado que afecta sus actividades y que está siendo pasado por alto, soportado sin apoyo profesional, automedicado, sin tratamiento o con tratamiento intermitente. El estudiante niega un estado de salud deteriorado, aunque este es evidente y afecta sus actividades ",
    ],

    textosAmarillo: [
      "El/La estudiante reconoce que los motivadores de algunas de sus acciones, elecciones, formas de relacionarse, etc. están influenciados por las expectativas de otros (Padres, familiares, vecinos, amigos, sociedad, religión), pero tiene con una posición clara frente a ellos. Sin embargo, no descarta las motivaciones propias.",
      "El reporte que el/la estudiante realiza de sí mismo/a incluye el reconocimiento sus fortalezas y debilidades, sin embargo, no identifica claramente las posibilidades o limitaciones que estas implican.",
      "El/La estudiante expresa sentimientos de confusión y angustia frente a temas relacionados con el género, identidad sexual, preferencias sexuales, etc. Pero busca ayuda para aclarar sus dudas y cuenta con una red de apoyo confiable.",
      "Las narrativas autobiográficas dan cuenta de una historia personal en la que se reportan situaciones de vida que han sido difíciles. Sin embargo, estas situaciones han sido asumidas y no implican condiciones de precariedad o privación mayores. Aunque a veces la historia puede afectar las relaciones y el proyecto formativo; el estudiante se percibe fuerte frente a ella.",
      "El estudiante tiene la mayoría de sus documentos de identificación. Los documentos faltantes han sido tramitados, pero no se cuenta con una copia y pueden ser obtenidos por medios oficiales. el estudiante conoce su contenido y los medios de obtención.",
      " El/La estudiante manifiesta tener propósitos para su desarrollo personal y formativo realistas, acompañados de acciones dirigidas a alcanzarlos; pero que necesitan ser claramente definidos. O manifesta tener propósitos claros, sin acciones dirigidas a lograrlos a corto plazo (5 años o menos), pero con un plan claro a mediano o largo plazo. ",
      " El/La estudiante cuenta con una red de apoyo que le genera bienestar, pero que en situaciones difíciles puede no ofrecer soporte. ",
      " Reporte objetivo de relaciones que no implican agresiones o vulneraciones al estudiante, pero que le generan inseguridad o angustia. También relaciones que pueden implicar riesgo en el cambio de las condiciones y el proyecto de vida, y que no son un soporte para el estudiante. Prácticas predominantemente seguras en relaciones sexuales. ",
      " El/La estudiante reporta o es evidente un estado de salud (física o mental) deteriorado que puede afectar o no sus actividades, pero que está siendo acompañado por un profesional y para el cual se sigue juiciosamente un tratamiento. También, se observa el cumplimiento de la recomendaciones médicas pertinentes a su caso. ",
    ],

    textosVerde: [
      "El/La estudiante tiene motivadores que se originan en su propio interés y actúa en consecuencia. Estos motivadores son independientemente de las expectativas ajenas y se les puede obedecer o no. Motivadores propios para sus acciones y elecciones.",
      "El reporte que el/la estudiante hace de sí mismo/a, le permite el reconocimiento honesto y reflexionado de sus fortalezas y debilidades (personales, académicas, mentales, afectivas, relacionales, corporales, etc.); así como, identificar claramente las posibilidades y limitaciones que éstas implican.",
      "El/La estudiante ha establecido relaciones sanas, de respeto, y reconocimiento frente a su género, identidad sexual y preferencia sexual; así como, frente a los demás. La familia, el círculo social cercano y el contexto cotidiano del estudiante son fuente de seguridad y bienestar ante sus relaciones, preferencias e identidad sexual; ofrecen apoyo y estabilidad.",
      "En términos generales, los relatos de la historia de vida son positivos: entorno de crecimiento saludable; con experiencias de crianza que dan cuenta de buenas relaciones familiares, sociales, con el saber y que han favorecido la autonomía y la seguridad (económica, afectiva, física, etc.) del estudiante para enfrentar la vida adulta y su proyecto educativo.",
      "El estudiante cuenta con todos sus documentos al día y a su disposición (documento de identificación, libreta militar, certificados académicos, certificados de pertenencia a grupos poblacionales específicos, documentos de su crédito educativo, documentación legal y bancaria, etc.). El estudiante ha hecho los trámites de portabilidad ante su servicio de salud, por lo tanto, cuenta con atención a nivel local.",
      " El/La estudiante manifiesta tener propósitos para su desarrollo personal y formativo claros y realistas; acompañados de acciones efectivas dirigidas al logro de los mismos en la actualidad. ",
      " El/La estudiante cuenta con una red de apoyo fuerte y amplia; tiene amigos cercanos en los que puede confiar y que propenden por su bienestar; con los que puede contar en situaciones difíciles.",
      " Reporte objetivo y honesto de relaciones de pareja sanas (Que son un soporte para el estudiante y en la que el estudiante se siente, confiado, correspondido; es bien tratado, respetado, valorado y apoyado). Prácticas seguras en relaciones sexuales. ",
      " El estudiante reporta y es evidente un buen estado de salud. Las actividades del estudiante no se ven afectadas por malestar físico o mental. ",
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
    textosSubdimensiones: [
      "Se define como los encuentros entre las subjetividades, encuentros mediados por una serie de normas, reglas, límites, jerarquías y roles, entre otros, que regulan la convivencia y permite que el funcionamiento de la vida familiar se desarrolle armónicamente. El seguimiento familiar implica reconocer la existencia de lazos de parentesco, afecto, comunicación, límites, jerarquías, roles, toma de decisiones, los cuales se van construyendo entre sus miembros de la familia y definen la realización del ser y la búsqueda del bienestar colectivo.",
    ],
    textosRojo: [
      " - El/la estudiante no cuenta con un apoyo emocional, económico, de alimentación y vivienda por parte de los miembros de su familia.\n- El/la estudiante tiene una red de apoyo familiar ausente, puesto que cuando se le presenta una dificultad personal, éste no recibe ningún tipo de ayuda por parte de su familia o los que considera su grupo familiar.- El/la estudiante tiene relaciones conflictivas con los miembros de su familia.\n- El/la estudiante refiere que en su familia hay múltiples problemas, crisis recurrentes y situaciones crónicas de adversidad.\n- El rol (hijo/a, hermano/a, cuidador/a, aportante económico) que ejerce el/la estudiante en su familia interfiere sus compromisos académicos tales como: faltar a clases, no presentarse a los parciales, cancelar asignaturas, cancelar el semestre ",
    ],
    textosAmarillo: [
      "- El/la estudiante tiene un mediano apoyo emocional, económico, de alimentación y vivienda por parte de su familia o familiares.\n- El/la estudiante tiene una red de apoyo familiar débil, puesto que cuando se le presenta una dificultad personal éste no recibe la ayuda de manera efectiva.\n- El/la estudiante tiene algunas relaciones conflictivas con los miembros de su familia, pero son superables y momentáneas.\n- El rol (hijo/a, hermano/a, cuidador/a, aportante económico) que ejerce el/la estudiante en su familia interfiere el algunas ocasiones con sus compromisos académicos. ",
    ],
    textosVerde: [
      "- El/la estudiante busca principalmente un apoyo emocional de su familia, así como un apoyo económico, de alimentación y vivienda.\n- El/la estudiante cuando se le presenta una dificultad personal inicialmente acude a su familia como su principal red de apoyo.\n- El/la estudiante manifiesta tener buenas relaciones con los miembros de su grupo familiar.\n- El rol (hijo/a, hermano/a, cuidador/a, aportante económico) que ejerce el/la estudiante en su familia no interfiere con sus compromisos académicos. ",
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
      "Manejo del Tiempo",
    ],
    textosSubdimensiones: [
      "Esta temática incluye las narraciones realizadas por los estudiantes en torno a las metodologías utilizadas en las clases, información de las diversas asignaturas y seguimientos académicos; ejemplo: reporte del rendimiento académico (notas), reporte de la carga académica, informe de las necesidades académicas identificadas con el estudiante (bases conceptuales para las diversas asignaturas) y refuerzo académico (asesorías académicas). Estos seguimientos tienen como como finalidad identificar y fortalecer las habilidades y destrezas de los estudiantes.",
      "Esta temática hace referencia a las preferencias de áreas disciplinares y carreras de los estudiantes, la búsqueda de información y conocimiento de sus carreras de elección y las estrategias implementadas por los monitores para contribuir en sus procesos de orientación vocacional concebida ésta como un vínculo conversacional en el que el estudiante recibe apoyo en el marco de encontrar alternativas y tomar decisiones, de manera consciente voluntaria y comprometida (De Mori & Santiviago, s.f.).",
      "Esta temática contiene lo referente a la forma como los estudiantes manejaban el tiempo de acuerdo con el establecimiento de sus rutinas diarias, comprendiendo tres aspectos claves: 1) el establecimiento de metas, 2) las herramientas para la gerencia del tiempo y 3) la percepción de control o verificación del uso del tiempo personal (Durán-Aponte & Pujol, 2012).",
    ],
    textosRojo: [
      "El/la estudiante tiene un bajo rendimiento académico durante los primeros semestres, asignaturas en repitencia y un promedio menor a 3.5. El/la estudiante manifiesta que presenta dificultades para avanzar en su proceso académico, no logra identificar sus habilidades y dificultades atribuyendo sus malos resultados académicos a factores externos (el profesor, el grupo, la familia, etc.). Cuando se le recomiendan los espacios dinamizados por la Estrategia ASES (monitoria socioeducativa, monitorias académicas, talleres, etc.), no asiste y/o no estudia previamente para las clases, monitorias y parciales, afirma que solo con lo visto en clase es suficiente para su proceso académico. El/la estudiante manifiesta que regularmente no asiste a las clases que tiene programadas en su horario y/o teme fracasar, por lo cual decide tomar opciones rápidas y fáciles para tener buenas notas. A largo plazo se evidencian señales de abandono de su programa académico. El/la estudiante no tiene establecido en su horario espacios para repaso constante de las asignaturas, manifiesta que solo realiza los talleres y actividades cuando se programan en clase, no realiza estudio independiente y/o intenta memorizar la mayor parte de sus clases, no comprende el uso y la conexión de los temas y las asignaturas.",
      " El/la estudiante refiere que no se siente satisfecho con la carrera que cursa, manifiesta que no fue su elección, pero no busca acciones de cambios. El/la estudiante manifiesta que su familia o red de apoyo impuso la elección vocacional y/o el ingreso a la universidad. ",
      "El/la estudiante niega que tiene dificultades para organizar su tiempo, sin embargo, incumple sus obligaciones académicas (entregas, preparación de exámenes, etc.) de forma reiterada.",
    ],
    textosAmarillo: [
      "El/la estudiante en ocasiones reconoce que los malos resultados académicos que obtienen son su responsabilidad, sin embargo, no emprende transformaciones en sus prácticas y/o se limita a obtener buenas calificaciones, su interés está centrando en descubrir como ser buena estudiante y sobresalir según las exigencias del profesor. Es un/una estudiante que busca el reconocimiento externo. El/la estudiante manifiesta que presenta dificultades para avanzar en su proceso académico, identifica las dificultades y busca alternativas de apoyo y cambio; asiste a los espacios dinamizados por la Estrategia ASES, sin embargo refiere que no obtiene buenos resultados académicos (notas) y/o logra aprender todo los procedimientos, pero no comprende nuevas formas de resolver problemas, presentando dificultades en manejar situaciones nuevas El/la estudiante refiere constantemente que el nivel académico de su educación secundaria no es bueno, afirma que no conoce temas que los/las profesores/ras dicen que ya deben conocer. Cuando a él/la estudiante se le presenta una dificultad académica acude a sus amigos, monitores/ras socioeducativos, académicos o docentes; sin embargo, estos apoyos no son suficientes para responder a la exigencia académica.",
      "El/la estudiante fue influenciado/a en la elección de la carrera universitaria que actualmente cursa, manifiesta no sentirse satisfecho, pero busca mecanismos y acciones de cambio. El/la estudiante refiere que no tiene claridad sobre el programa académico que cursará, sin embargo, esta dispuesto a conocer y revisar su elección vocacional.",
      "El/la estudiante reconoce dificultades en la organización del tiempo para sus actividades académicas, sin embargo, no utiliza estrategias para mejorar este aspecto, o las utilizadas no resultan efectivas.",
    ],
    textosVerde: [
      "El/la estudiante manifiesta que actualmente tiene un buen desempeño académico, es muy consciente de que sus resultados académicos (buenos o malos) son su responsabilidad, identifica claramente donde están las dificultades y define e implementa acciones claras de mejoramiento de sus prácticas. El/la estudiante refiere constantemente que el nivel académico de su educación secundaria es bueno, afirma que conoce y maneja los temas que los/las profesores/ras dicen que ya deben conocer. Cuando a él/la estudiante se le presenta una dificultad académica acude a sus amigos, monitores/ras socioeducativos, académicos o docentes. Se observa que el estudiante realiza estudio previo y tiene dudas puntuales en las asesorías solicitadas. El/la estudiante se empeña en comprender el significado, pensar sus implicaciones y aplicaciones. Es un/una estudiante que busca la motivación en sí mismo/misma, por lo cual enfrenta sus retos académicos realizando análisis, síntesis, evaluación e hipótesis para construir teorías respecto a lo que se le presenta. El/la estudiante está dispuesto a fallar y reconoce su fracaso para aprender del error. Se observa que esto no le afecta en su autoestima, pues comprende que es un proceso normal dentro del aprendizaje.",
      "El/la estudiante manifiesta que eligió su carrera universitaria sin presión de su red de apoyo. El/la estudiante refiere que ha investigado y conoce aspectos generales sobre el programa académico que ha elegido. Manifiesta que se siente conforme con la elección realizada.",
      " El/la estudiante reconoce dificultades en la organización del tiempo para sus actividades académicas, pero utiliza estrategias para mejorar este aspecto. El/la estudiante manifiesta que no presenta dificultades en el manejo del tiempo, se observa que las estrategias utilizadas son efectivas. ",
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
      "Lo socioeconómico, entendido como un enfoque teórico y metodológico necesariamente transdisciplinar, que pretende entender integralmente la complejidad social a partir de la observación, descripción y análisis orientada a la acción en y desde la realidad (Coraggio & Arancibia, 2006). Esta temática involucra aspectos económicos y sociológicos como la preparación laboral, ubicación social y familiar en la sociedad.",
      "Apoyos económicos institucionales: incluye todos los procesos que los estudiantes realizan para recibir apoyos económicos. (ICETEX, Jóvenes en Acción, Bienestar Universitario, monitorias, etc.)",
      "Principios y herramientas que ayudan a optimizar los recursos financieros con que cuenta una persona. Esta temática contiene todos los aspectos de manejo de dinero, inversión de recursos, ingresos y egresos financieros, mecanismos de ahorro, entre otros.",
      "Se refiere a las diversas actividades que realiza el estudiante para cubrir sus gastos personales y académicos; y la relación de estas ocupaciones con su actividad académica en la Universidad.",
    ],
    textosRojo: [
      " La familia no brinda apoyo socioeconómico al estudiante; el/la estudiante manifiesta que el dinero para su manutención no es suficiente. En ocasiones el/la estudiante apoya económicamente a su familia. ",
      " Los recursos con los que cuenta son insuficientes y no tiene ningún tipo de apoyo económico institucional ",
      " Los recursos económicos con los que cuenta resultan insuficientes y presenta dificultades en la priorización de los mismos para sus gastos académicos y de manutención. ",
      " El/La estudiante debe trabajar para cubrir sus gastos, y esta situación generalmente compite con su actividad académica o su disposición al acompañamiento socioeducativo. Sus condiciones laborales tiene efectos negativos a nivel físico y mental. ",
    ],
    textosAmarillo: [
      " La familia brinda apoyo económico, pero el/la estudiante manifiesta que el dinero recibido no le alcanza para cubrir sus gastos. ",
      " Los recursos con los que cuenta en ocasiones resultan insuficientes, aunque tiene algún apoyo económico institucional. ",
      " Los recursos económicos con los que cuenta son suficientes, pero no realiza una priorización de los mismos para su manutención y gastos académicos. ",
      " El/La estudiante debe trabajar para cubrir sus gastos, y esto en algunas ocasiones compite con sus actividades académicas o disposición al acompañamiento socioeducativo. ",
    ],
    textosVerde: [
      " La familia brinda apoyo económico a el/la estudiante, y éste resulta suficiente para cubrir sus gastos. ",
      " Los recursos con los que cuenta son suficientes debido a que tiene un apoyo económico institucional; o no lo necesita, dadas sus condiciones socioeconómicas. ",
      " Los recursos económicos con los que cuenta son suficientes y realiza una priorización para su manutención y gastos académicos. ",
      " El/La estudiante debe trabajar para complementar sus gastos, y esta actividad no compite con sus actividades académicas ni su disposición al acompañamiento socioeducativo. ",
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
    textosSubdimensiones: [
      "Esta temática involucra todo lo expresado por los estudiantes en relación con la adaptación que se encuentran realizando al nuevo contexto de ciudad en el que se encuentra, para el caso de estudiantes que proceden de otros municipios y regiones del país. Además de las diferentes experiencias que expresan los estudiantes con relación a su adaptación a la Universidad.",
      "Este apartado contiene la oferta de servicios institucionales y no formales que los monitores realizaban a sus estudiantes en relación con el ámbito universitario, de ciudad y nacional.",
      "Esta temática aborda los momentos de presentación entre el monitor y el estudiante, incluyendo además la explicación de la estrategia ASES y expectativas de ingreso a la universidad de parte de los estudiantes y del acompañamiento que van a tener.",
      "En este apartado nos encontramos con el conocimiento de nuevos lugares en sus territorios cotidianos de parte de los estudiantes (tanto en la universidad como en la ciudad), muchos de ellos guiados por sus monitores. Informe sobre el recorrido por el campus universitario y/ o ciudad.",
      "Este apartado contiene lo relacionado con el interés, exploración y vinculación de los estudiantes a grupos estudiantiles, académicos, investigativos, culturales, y deportivos de la Universidad del Valle o externos",
      "Esta temática contiene todas las particularidades de vivienda de los estudiantes, incluyen Manifiesta un amplio conocimiento geográfico de la Universidad y la Ciudad, lo cual facilita la realización de sus actividades cotidianas do organización del espacio, problemas con los inquilinos, entre otros y la utilización del programa Geocalízate.",
    ],
    textosRojo: [
      "Manifiesta que la adaptación a la Universidad y ciudad ha sido muy difícil para el/ella (transporte, conocimiento, cultura, clima, comida, etc.), sin embargo, no busca ni plantea propuestas para la solución de estas problemáticas (ejemplos).",
      " El/la estudiante no reconoce los servicios y ofertas de la Universidad y la ciudad ",
      " Manifiesta poco interés por encontrarse con el monitor y por acceder al acompañamiento, sus expectativas sobre su ingreso a la Universidad y su proyecto académico son pobres. ",
      " Manifiesta amplio desconocimiento geográfico de la Universidad y la Ciudad, lo cual genera en el/la estudiante inseguridad para realizar actividades cotidianas (personales y académicas). ",
      "El estudiante, aunque dice sentirse solo, se muestra apático frente a vincularse a grupos en la Universidad o por fuera de ella. Manifiesta no encontrar disfrute o interés en prácticas culturales, deportivas, sociales, artísticas, recreativas, etc.; o por el contrario se dedica mucho tiempo a esas actividades y no atienden sus responsabilidades académicas.",
      " Las condiciones de la vivienda (ubicación, físicas, convivencia, etc) impiden la realización de sus actividades personales y académicas. No busca alternativas frente a esta situación o no cuenta con las condiciones para resolver esta situación ",
    ],
    textosAmarillo: [
      "Manifiesta que ha tenido algunas dificultades en su adaptación a la Universidad y a la ciudad, sin embargo, plantea alternativas que debe materializar lograr una mejor adaptación.",
      "El/la estudiante reconoce los servicios y ofertas de la Universidad y la ciudad, sin embargo, manifiesta que no asiste a ellos porque no son de su interés o porque no sabe cómo acceder a ellos.",
      "Manifiesta algún interés por el proceso de acompañamiento, sin embargo, no tiene mucha claridad sobre los aportes de este en su proceso como universitario.",
      " Manifiesta parcial desconocimiento geográfico de la Universidad y la Ciudad, sin embargo esto no le impide a el/la estudiante realizar sus actividades cotidianas (personales y académicas). ",
      "El estudiante manifiesta hacer parte de uno o varios grupos que realizan diversas actividades en la Universidad o por fuera de ella, sin embargo, no ha logrado un equilibrio entre ellas y sus responsabilidades académicas, o no se siente conforme con su pertenencia a estos grupos.",
      " Las condiciones de la vivienda (ubicación, físicas, convivencia, etc) impiden la realización de sus actividades personales y académicas. No busca alternativas frente a esta situación o no cuenta con las condiciones para resolver esta situación ",
    ],
    textosVerde: [
      " Manifiesta que ha logrado adaptarse adecuadamente a la Universidad y a la ciudad, lo cual favorece la realización de sus actividades tanto personales como académicas. ",
      "El/la estudiante reconoce los servicios y ofertas de la universidad y la ciudad y hace uso de ellas",
      "Manifiesta interés genuino por el proceso de acompañamiento. Considera que puede aportar significativamente en su proceso como universitario.",
      " Manifiesta un amplio conocimiento geográfico de la Universidad y la Ciudad, lo cual facilita la realización de sus actividades cotidianas ",
      " El estudiante manifiesta tener interés en actividades diversas, hace parte de uno o varios grupos, y considera que le proporcionan bienestar. Logra alternar estas actividades responsablemente con sus actividades académicas. ",
      " Las condiciones de la vivienda (ubicación, físicas, convivencia, etc) son óptimas y facilitan la realización de sus actividades personales y académicas ",
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
          state.dimensionActual.textosRojo[
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
          state.dimensionActual.textosAmarillo[
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
          state.dimensionActual.textosVerde[
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
            <p
              style={
                subDimensionClicked
                  ? {}
                  : { color: "#384a60" }
              }
            >
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
    </>
  );
}

export default Body;
