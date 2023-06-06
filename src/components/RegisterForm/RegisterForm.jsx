import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import css from './RegisterForm.module.css';
import stylesApp from '../App.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className={css.login}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.field}>
          Username
          <input type="text" name="name" className={css.label_input} />
        </label>
        <label className={css.field}>
          Email
          <input type="email" name="email" className={css.label_input} />
        </label>
        <label className={css.field}>
          Password
          <input type="password" name="password" className={css.label_input} />
        </label>
        <button type="submit" className={stylesApp.btn}>
          Register
        </button>
      </form>
    </div>
  );
};
