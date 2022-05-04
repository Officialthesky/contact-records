import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction } from "../../Redux/actions/contactAction";
import { updateContactAction } from "../../Redux/actions/contactAction";
import { AiFillDelete } from "react-icons/ai";
import { RiEditBoxFill } from "react-icons/ri";

export default function ContactList() {
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
            <h1>
              Name:<span>{item.firstname}</span>
            </h1>
            <h1>
              Mob. No.<span>{item.number}</span>
            </h1>
            <h1>
              Email:<span>{item.email}</span>
            </h1>
            <AiFillDelete
              onClick={() => deleteContact(item)}
              className="deleteContact"
            />
            <RiEditBoxFill
              onClick={() => updateContact(item)}
              className="updateContact"
            />
          </div>
        );
      })}
    </div>
  );
}
