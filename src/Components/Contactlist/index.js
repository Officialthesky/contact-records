import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction } from "../../Redux/actions/contactAction";
import { updateContactAction } from "../../Redux/actions/contactAction";
export default function Contactlist() {
  const dispatch = useDispatch();

  // number reducer se lete hain ... matlab yha kuch bhi ho reducer se lete hain
  const { contact } = useSelector((state) => state.contactReducer);

  const deleteContact = (item) => {
    const result = contact.filter(function (i) {
      return i.number !== item.number;
    });

    dispatch(addContactAction(result));
  };

  const updateContact = (item) => {
    dispatch(updateContactAction(item));
    console.log(item);
  };
  return (
    <div className="contactList">
      {contact.map((item, index) => {
        return (
          <div key={index} className="contactInfo">
            <h1>{item.firstname}</h1>
            <h1>{item.number}</h1>
            <h1>{item.email}</h1>
            <button onClick={() => deleteContact(item)}>Delete</button>
            <button onClick={() => updateContact(item)}>Update</button>
          </div>
        );
      })}
    </div>
  );
}
