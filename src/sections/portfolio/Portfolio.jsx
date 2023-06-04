import './portfolio.css' 
import Projects from './Projects' 
import ProjectsCategories from './ProjectsCategories' 
import data from './data' 
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data); // Define el estado projects y su función usando el hook useState, empezando con los datos iniciales de los proyectos

  const categories = data.map(item => item.category); // Crea un array con todas las categorías de los proyectos
  const uniqueCategories = ["all", ...new Set(categories)]; // Crea un array único de categorías, incluyendo "all" como opción para mostrar todos los proyectos
  
  const filterProjectsHandler = (category) => {
    if(category === "all") {
      setProjects(data); // Si la categoría seleccionada es "all", muestra todos los proyectos sin filtrar
      return;
    }

    const filterProjects = data.filter(project => project.category === category); // Filtra los proyectos por la categoría seleccionada
    setProjects(filterProjects); // Establece los proyectos filtrados como el nuevo estado
  }
  

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/> {/* Renderiza el componente ProjectsCategories pasando las categorías únicas y la función filterProjectsHandler como props */}
        <Projects projects={projects}/> {/* Renderiza el componente Projects pasando los proyectos actuales como prop */}
      </div>
    </section>
  )
}

export default Portfolio 
