import { useState } from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleCategory = (category) => {
    // Si la categoría activa es la misma que la seleccionada, establecer 'all' como categoría activa
    // y llama a la función onFilterProjects con 'all' como argumento
    if (activeCategory === category) {
      setActiveCategory('all');
      onFilterProjects('all');
    } else {
      // De lo contrario, establecer la categoría seleccionada como categoría activa
      // y llama a la función onFilterProjects con la categoría seleccionada como argumento
      setActiveCategory(category);
      onFilterProjects(category);
    }
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => toggleCategory(category)}
          className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
