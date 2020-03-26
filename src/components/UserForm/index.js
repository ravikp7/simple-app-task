import React, { useState } from 'react';
import InputBox from '../InputBox';
import Button from '../Button';
import style from './userForm.module.css';
import Modal from '../Modal';
import { validateFormFields } from '../../utils/form-validator';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  return (
    <div className={style.container}>
      <Modal text={msg} isVisible={msg.length !== 0} onOk={() => {
        setMsg('');
      }} />
      <form>
        <InputBox label="First Name" value={firstName} setter={setFirstName} />
        <InputBox label="Last Name" value={lastName} setter={setLastName} />
        <InputBox label="Password" type="password" value={password} setter={setPassword} />
        <InputBox label="Email" type="email" value={email} setter={setEmail} />
        <InputBox label="Phone number" type="number" value={phone} setter={setPhone} />
        <span style={{ marginTop: '2rem', width: '100%' }}>
          <Button
            text="Submit"
            onClick={event => {
              event.preventDefault();
              const validationMsg = validateFormFields({
                firstName,
                lastName,
                phone,
                email,
                password,
              });
              if (validationMsg.length === 0) {
                setMsg("Thanks for joining!");
              } else {
                setMsg(validationMsg);
              }
            }}
          />
        </span>
      </form>
    </div>
  );
};

export default UserForm;
