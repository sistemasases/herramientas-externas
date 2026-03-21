import "./Body.css";
import uvArdilla from "../../assets/uvArdilla.png";
import bgArbol from "../../assets/bgArbol.svg";
import bgLadrillo from "../../assets/brick-bg.png";
import chica from "../../assets/chica.svg";
import textBubble from "../../assets/dialogue-bubble.svg";
import Modal from "../Modal/Modal";
import Cartel from "../Cartel/Cartel";
import backButton from "../../assets/back.png";
import homeButton from "../../assets/home.png";
import { useState } from "react";
import data from "../../data/data.json";

const defaultTooltip = "Rutas de Atención";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalTitle, setModalTitle] = useState("¿De dónde vienen las rutas?");
  const [dataHistory, setDataHistory] = useState([data[0].children]);
  const currentData = dataHistory[dataHistory.length - 1];
  const [tooltip, setTooltip] = useState(defaultTooltip);
  const [tooltipHistory, setTooltipHistory] = useState([defaultTooltip]);
  const [modalContent, setModalContent] = useState(
    <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
  );

  const handleCartelClick = (element) => {
    if (element.content) {
      setModalTitle(element.title);

      setModalContent(
        <div dangerouslySetInnerHTML={{ __html: element.content }} />
      );
      setIsModalOpen(true);
    } else if (element.children && element.children.length > 0) {
      setDataHistory([...dataHistory, element.children]);
      setModalContent(null);
      setTooltip(element.title);
      setTooltipHistory([...tooltipHistory, element.title]);
    } else {
      console.warn(`Element "${element.title}" has no content or children.`);
    }
  };

  // Function to go back to the previous level
  const handleGoBack = () => {
    if (dataHistory.length > 1) {
      setDataHistory(dataHistory.slice(0, -1));
      setTooltip(tooltipHistory[tooltipHistory.length - 2] || defaultTooltip);
      setTooltipHistory(tooltipHistory.slice(0, -1));
    }
  };

  const handleGoHome = () => {
    setDataHistory([data[0].children]);
    setTooltip(defaultTooltip);
    setTooltipHistory([defaultTooltip]);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {modalContent}
      </Modal>

      <div className="page-container">
        {/* Background container */}
        <div className="background-container">
          <img
            src={bgLadrillo}
            alt="Background Tree"
            className="background-brick-image"
          />
          <img
            src={bgArbol}
            alt="Background Tree"
            className="background-image"
          />
        </div>

        <main className="main-content">
          {dataHistory.length > 1 && (
            <>
              <button onClick={handleGoBack} className="back-button">
                <img src={backButton} className="back-icon" />
              </button>
              <button onClick={handleGoHome} className="home-button">
                <img src={homeButton} className="home-icon" />
              </button>
            </>
          )}

          <div className="columns-container">
            <div className="tooltip-column">
              <div className="tooltip-img">
                <img id="chica" src={chica} alt="Chica" />
                <div className="textBubble">
                  <img id="textBubble" src={textBubble} alt="Text Bubble" />

                  <p className="tooltip-text">
                    <strong>Estamos en {tooltip}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="dimensions-column">
              <div className="cartels-container">
                {currentData.map((element, index) => (
                  <Cartel
                    key={index}
                    title={element.title}
                    onClick={() => handleCartelClick(element)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <img id="uvArdilla" src={uvArdilla} alt="UvArdilla" />
      </div>
    </>
  );
}

export default Body;
