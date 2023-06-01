import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts ">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
