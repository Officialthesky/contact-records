import React, { useEffect, useState } from "react";
import findingLengthOfString, { validateName } from "../../utils/helper";
import { validateEmail } from "../../utils/helper";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactAction,
  updateContactAction,
} from "../../Redux/actions/contactAction";
export default function Header() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [contacts, setContacts] = useState([]);
  const { updateContact, contact } = useSelector(
    (state) => state.contactReducer
  );

  const saveName = (e) => {
    setFirstname(e.target.value);
  };
  const saveNumber = (e) => {
    setNumber(e.target.value);
  };
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

  const numberAlreadyExist = contact.filter(
    (i) => parseInt(i.number) === parseInt(number)
  );
  const emailAlreadyExist = contact.filter((i) => i.email === email);

  const addContactList = () => {
    // firstname's length
    let firstnameLength = findingLengthOfString(firstname);
    if (firstnameLength === 0) {
      alert("first name can't be empty");
      return;
    }
    // checking if fullname is a number or string
    const firstnameCheck = isNaN(firstname);
    if (firstnameCheck === true) {
    } else {
      alert("Please enter a valid fullname");
      return;
    }
    const firstnameCharacterCheck = validateName(firstname);
    if (firstnameCharacterCheck === true) {
    } else {
      alert("Please enter valid fullname");
      return;
    }

    let emailIdLength = findingLengthOfString(email);
    if (emailIdLength === 0) {
      alert("Email field can't be empty");
      return;
    }

    const emailIdCheck = validateEmail(email);
    if (emailIdCheck === true) {
    } else {
      alert("Please enter valid email id");
      return;
    }
    if (emailAlreadyExist.length > 0) {
      alert("Email already exist ");
      return;
    }
    let mobileNumberLength = findingLengthOfString(number);
    if (mobileNumberLength === 0) {
      alert("Mobile number can't be empty");
      return;
    }
    if (mobileNumberLength < 10) {
      alert("Mobile number can't be less than 10 digit");
      return;
    }

    if (mobileNumberLength > 10) {
      alert("Mobile number can't be more than 10 digit.");
      return;
    }

    const mobileNumberCheck = isNaN(number);
    if (mobileNumberCheck === true) {
      alert("Please enter valid mobile number");
      return;
    }
    if (numberAlreadyExist.length > 0) {
      alert("Mobile number already exist ");
      return;
    }

    let tempContacts = contacts;
    let contact = {
      firstname,
      number,
      email,
    };
    tempContacts.push(contact);
    setContacts(tempContacts);
    dispatch(addContactAction(tempContacts));
    setFirstname("");
    setNumber("");
    setEmail("");
  };

  useEffect(() => {
    setNumber(updateContact.number);
    setFirstname(updateContact.firstname);
    setEmail(updateContact.email);
  }, [updateContact.number]);

  //how to update objects in the array
  const editContact = () => {
    let foundIndex = contact.findIndex(
      (i) =>
        parseInt(i.number || i.firstname || i.email) ==
        parseInt(
          updateContact.number || updateContact.firstname || updateContact.email
        )
    );
    contact[foundIndex].number = number;
    contact[foundIndex].firstname = firstname;
    contact[foundIndex].email = email;

    dispatch(addContactAction(contact));
    dispatch(updateContactAction({}));
  };

  return (
    <div className="inputHeader">
      <input
        type="text"
        value={firstname}
        onChange={saveName}
        placeholder="Enter your name"
      />
      <input
        type="number"
        value={number}
        onChange={saveNumber}
        placeholder="Enter your number"
      />
      <input
        type="email"
        value={email}
        onChange={saveEmail}
        placeholder="Enter your email"
      />

      <button onClick={updateContact.number ? editContact : addContactList}>
        {updateContact.number ? "Edit" : "Add"}
      </button>
    </div>
  );
}
