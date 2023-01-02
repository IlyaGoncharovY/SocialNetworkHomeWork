import React from 'react';
import s from "./Contact.module.css"

export type ContactType = {
    contactTitle: string,
    contactValue: string
}

export const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

