import { useState } from 'react';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

const Project = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (project.category === 'art') {
    return (
      <>
        <Card className="portfolio__project">
          <div className="portfolio__project-image">
            <div href={project.image}  onClick={openModal}>
              <img src={project.image} alt="Portfolio Project Image" />
            </div>
          </div>
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
        </Card>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <img src={project.image} alt="Portfolio Project Image" />
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <Card className="portfolio__project">
        <div className="portfolio__project-image">
          <div href={project.image}  onClick={openModal}>
            <img src={project.image} alt="Portfolio Project Image" />
          </div>
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
          <a href={project.github} className="btn sm primary" target="_blank">
            Github
          </a>
        </div>
      </Card>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <img src={project.image} alt="Portfolio Project Image" />
        </Modal>
      )}
    </>
  );
};

export default Project;
