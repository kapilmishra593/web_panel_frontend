import React, { useState } from 'react';
import styles from '../forms/login.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can implement your authentication logic (e.g., API calls, etc.)
    // For this example, we're just printing the form data
    console.log(formData);
  };

  // Function to handle input changes and update the state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.login_form} id='userSignupForm'>
        <div className={styles.field_group}>
          <label htmlFor="username" className={styles.field_label}><FontAwesomeIcon icon={faUser} /></label>
          <input
            className={styles.form_input}
            type="text"
            id="username"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field_group}>
          <label htmlFor="email" className={styles.field_label}><FontAwesomeIcon icon={faUser} /></label>
          <input
            className={styles.form_input}
            type="text"
            id="email"
            name="email"
            placeholder='email'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field_group}>
          <label htmlFor="password" className={styles.field_label}><FontAwesomeIcon icon={faLock} /></label>
          <input
            className={styles.form_input}
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field_group}>
          <label htmlFor="password" className={styles.field_label}><FontAwesomeIcon icon={faLock} /></label>
          <input
            className={styles.form_input}
            type="password"
            id="password"
            name="password"
            placeholder='Confirm Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="Sign Up" className={styles.submit_btn}/>
      </form>
    </div>
  );
};

export default SignupForm;
