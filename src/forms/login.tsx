import React, { useState } from 'react';
import styles from '../forms/login.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    // State to store user input
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [disable, setDisable] = useState(false);
	const {clearErrors, register, handleSubmit, formState: { errors }  } = useForm();

    // Function to handle input changes and update the state
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    const myfun = async (data:any) =>{ 
        const successMsg:any = document.getElementById("thankYou");
        setDisable(true);
        let response = await  fetch('', { method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(formData)})
        const res = await response.json();
        if (res && res.is_error == 0) {
            setDisable(true);
            let successHtml = "<p class='form-thankyou-msg'>We've received your request. Our team will get back to you within 24 to 48 working hours.</p>";
            successMsg.insertAdjacentHTML("afterbegin", successHtml);
            setTimeout(() => {
                setDisable(false);
                successMsg.innerHTML = "";
                const form:any = document.getElementById("Zendesk_api_form");
                form.reset();
            }, 5000);
        } else {
            setDisable(true);
            const successMsg:any = document.getElementById("thankYou");
            let errMsg:any = '<p class="form_error_msg">' + res.msg + '</p>';
            successMsg.insertAdjacentHTML("afterbegin", errMsg);
        }
    }

  // Function to handle form submission
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Here you can implement your authentication logic (e.g., API calls, etc.)
  //   // For this example, we're just printing the form data
  //   console.log(formData);
  // };

  return (
    <div>
        <form onSubmit={handleSubmit(myfun)} className={styles.login_form} id='userLoginForm'>
            <div className={styles.field_group}>
                <label htmlFor="username" className={styles.field_label}><FontAwesomeIcon icon={faUser} /></label>
                <input
                    className={styles.form_input}
                    type="text"
                    id="username"
                    placeholder='Enter Your Email or Username'
                    value={formData.username}
                    {...register('name', {required:true})}
                />
                {errors.name && errors.name.type ==='required' &&<p className={styles.error_msg}>Please Enter your name.</p>}
            </div>
            <div className={styles.field_group}>
                <label htmlFor="password" className={styles.field_label}><FontAwesomeIcon icon={faLock} /></label>
                <input
                    className={styles.form_input}
                    type="password"
                    id="password"
                    placeholder='Enter Your Password'
                    value={formData.password}
                    {...register('password', {required:true})}
                />
                {errors.name && errors.name.type ==='required' &&<p className={styles.error_msg}>Please Enter your Password.</p>}
            </div>
            <input type="submit" value="Log In" className={styles.submit_btn}/>
        </form>
    </div>
  );
};

export default LoginForm;
