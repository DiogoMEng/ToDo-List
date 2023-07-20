// css
import './tasks.css';


// icons
import { FaEdit, FaWindowClose } from 'react-icons/fa'


// validador de props
import PropTypes from 'prop-types';


// <<<COMPONENTE TASKS>>>
export default function Tasks({handleEdit, handleDelete, children}) {
  return (
    <ul className="tasks">
       {/* filtrando tarefas */}
        {children.map((child, index) => (
          <li key={child}>
            {child}
            {/* botão edit e delete */}
            <span>
              <FaEdit
                onClick={(e) => handleEdit(e, index)}
                className='edit'
              />
              <FaWindowClose
                onClick={(e) => handleDelete(e, index)}
                className='delete'
              />
            </span>
          </li>
          ))}
    </ul>
  );
}


Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
