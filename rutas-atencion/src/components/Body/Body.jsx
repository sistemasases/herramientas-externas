import "./Body.css";
import uvArdilla from "../../assets/uvArdilla.png";
import bgArbol from "../../assets/bgArbol.svg";
import chica from "../../assets/chica.svg";
import Modal from "../Modal/Modal";
import Cartel from "../Cartel/Cartel";
import { useState } from "react";
import data from "../../data/data.json";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState(
    <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
  );
  const [modalTitle, setModalTitle] = useState("¿De dónde vienen las rutas?");
  // Store the history of data levels for breadcrumbs/back navigation
  const [dataHistory, setDataHistory] = useState([data[0].children]);
  // currentData is now derived from the last item in dataHistory
  const currentData = dataHistory[dataHistory.length - 1];

  // Function to handle opening the modal or navigating deeper
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
    } else {
      console.warn(`Element "${element.title}" has no content or children.`);
    }
  };

  // Function to go back to the previous level
  const handleGoBack = () => {
    if (dataHistory.length > 1) {
      setDataHistory(dataHistory.slice(0, -1));
    }
  };

  const handleGoHome = () => {
    // Reset to the initial data level
    setDataHistory([data[0].children]);
  };

  return (
    <>
      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {/* Render dynamic content if available, otherwise null (or a default) */}
        {modalContent}
        {/* Remove the fallback to DefaultModalContent if dynamic content handles all cases */}
        {/* {modalContent || <DefaultModalContent />} */}
      </Modal>

      <div className="page-container">
        {/* Background container */}
        <div className="background-container">
          <img
            src={bgArbol}
            alt="Background Tree"
            className="background-image"
          />
        </div>

        {/* Content area */}
        <main className="main-content">
          {/* Optional: Add a Back button */}
          {dataHistory.length > 1 && (
            <>
              <button onClick={handleGoBack} className="back-button">
                <img src="src\assets\back.png" className="back-icon" />
              </button>
              <button onClick={handleGoHome} className="home-button">
                <img src="src\assets\home.png" className="home-icon" />
              </button>
            </>
          )}

          <div className="columns-container">
            <div className="tooltip-column">
              <div className="tooltip-img">
                <img id="chica" src={chica} alt="Chica" />
              </div>
            </div>
            <div className="dimensions-column">
              <div className="cartels-container">
                {currentData.map((element, index) => (
                  <Cartel
                    key={index} // Consider using a unique ID from data if available
                    title={element.title}
                    onClick={() => handleCartelClick(element)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        {/* Squirrel image */}
        <img id="uvArdilla" src={uvArdilla} alt="UvArdilla" />
      </div>
    </>
  );
}

export default Body;
