import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import stylesApp from '../App.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.login}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.field}>
          Email
          <input type="email" name="email" className={css.label_input} />
        </label>
        <label className={css.field}>
          Password
          <input type="password" name="password" className={css.label_input} />
        </label>
        <button type="submit" className={stylesApp.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};
