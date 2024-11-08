import React from "react";
import "../css/header.css";
import logoVicerrectoria from "../images/logoVicerrectoria.svg";
import { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title="ACCIONES">
        <h3>Acciones directas del monitor</h3>
        <ul>
          <li>
            <h4>Apoyo académico entre pares</h4>
            <p>
              Apoyo por parte del monitor socioeducativo en la resolución de
              talleres o preparación de trabajos en el marco de los mismos
              acompañamientos entre pares.
            </p>
          </li>
          <li>
            <h4>Taller par-par</h4>
            <p>
              Talleres individuales y específicos desarrollados por el monitor
              en el marco del acompañamiento entre pares que busca profundizar
              en temas específicos.
              <strong> Ejemplo:</strong> historia de vida, manejo del tiempo,
              estrategias de estudio, etc.
            </p>
          </li>
          <li>
            <h4>
              Acompañamiento en el reconocimiento de la ciudad y la Universidad
            </h4>
            <p>
              Apoyo por parte del monitor en el establecimiento en la ciudad y
              reconocimiento de espacios en la Universidad.
            </p>
          </li>
        </ul>

        <h3>Estrategia de remisión</h3>
        <h4>Interna a la estrategia</h4>
        <ul>
          <li>
            <h5>Remisión al profesional socioeducativo</h5>
            <p>
              El monitor discute con el estudiante la posibilidad de que este
              asista con el profesional encargado a una sesión de acompañamiento
              o en su defecto habla directamente con el profesional para que
              este contacte al estudiante debido a dificultades en alguna de las
              dimensiones.
            </p>
          </li>
          <li>
            <h5>Remisión a Practicante socioeducativo</h5>
            <p>
              El monitor discute con el estudiante la posibilidad de que este
              asista con el practicante encargado a una sesión de acompañamiento
              o en su defecto habla directamente con el profesional para que
              este contacte al estudiante debido a dificultades en alguna de las
              dimensiones.
            </p>
          </li>
          <li>
            <h5>
              Remisión a actividades grupales (talleres, sesiones de
              capacitación)
            </h5>
            <p>
              El monitor invita al estudiante a participar en uno de los
              talleres grupales que el practicante o alguno de los profesionales
              de la estrategia ha creado para suplir algunos temas de interés.
            </p>
          </li>
          <li>
            <h5>Remisión a monitorias académicas (grupales)</h5>
            <p>
              El monitor invita al estudiante a participar de las sesiones de
              trabajo grupales que se ofertan en la estrategia para suplir temas
              de orden académico (Ej. Monitoria de Cálculo).
            </p>
          </li>
          <li>
            <h5>Remisión a proyectos de la universidad</h5>
            <p>
              El monitor invita al estudiante a asistir a alguno de los
              proyectos pedagógicos de la Universidad (Ej. Graca).
            </p>
          </li>
        </ul>

        <h4>Interna a la universidad</h4>
        <ul>
          <li>
            <h5>Remisión a servicio de Salud</h5>
            <p>
              El estudiante acompaña o solicita al estudiante pedir cita a
              servicio médico, psicológico u odontológico.
            </p>
          </li>
          <li>
            <h5>Remisión a Registro y/o Matrícula Académica</h5>
            <p>
              Apoyo al estudiante en la información para procesos de matrícula,
              pago, cancelación de semestre o materias, horarios y estímulos
              académicos, entre otros.
            </p>
          </li>
          <li>
            <h5>Remisión a grupos de la Universidad</h5>
            <p>
              Invitación a la participación en los grupos Culturales,
              Académicos, Recreativos, Políticos, Espirituales y Deportivos que
              existen en la Universidad.
            </p>
          </li>
          <li>
            <h5>Programas de apoyo económico</h5>
            <p>
              Remisión a programas de apoyo económico externos a la Universidad
              como (ICETEX, préstamos financieros, entre otros).
            </p>
          </li>
          <li>
            <h5>Programas de atención</h5>
            <p>
              Remisión a programas de atención externos a la Universidad como
              (Portabilidad EPS, Jóvenes en Acción, etc.).
            </p>
          </li>
        </ul>
      </Modal>
      <header className="header">
        <nav>
          <h1>SEMÁFORO DE ALERTAS</h1>
          <p onClick={toggleModal} className="acciones">
            Acciones
          </p>
          <img id="logo" src={logoVicerrectoria} alt="Logo" />
        </nav>
      </header>
    </>
  );
}

export default Header;
