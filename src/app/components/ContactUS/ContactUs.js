'use client'
import { useState } from 'react';
import styles from "../ContactUS/Contact.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactUs({ contactData }) {
    if (contactData) {
        console.log('the contact page has been connected', contactData);

    }

    const contactBlock = contactData?.layout?.find(b => b.blockType === 'content');
    console.log(contactBlock);

    const formBlock = contactData?.layout?.find(b => b.blockType === 'formBlock');
    console.log(formBlock);

    const formFields = formBlock?.form?.fields || [];
    console.log(formFields);

    const contactInfo = contactBlock?.columns?.[0]?.groupSection;
    console.log(contactInfo);
    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const bgImage = contactData?.hero?.media?.url ? `${PAYLOAD_URL}${contactData.hero.media.url}` : null;
    const heroTitle = contactData?.hero?.richText?.root?.children[0]?.children[0]?.text || "Online Lab Reports";

    const initialState = {
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: " "
    };

    const [formData, setFormData] = useState(initialState);
    const [successMsg, setSuccessMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        console.log("change");
    }
    const validateForm = () => {
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setError("Please provide your full name");
            return;
        }

        if (!formData.email.includes('@')) {
            setError("Please your Email format is incorrect");
            return;
        }
        return null;
    }


    const handleSubmitForm = async (e) => {


        e.preventDefault();

        setLoading(true);
        const validateError = validateForm();
        if (validateError) {
            setError("Invalid");
            return;
        }
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(formData)
            })
        } catch (error) {
            setError(error.message);
        }

        setTimeout(() => {
            // setFormData(initialState);
            setLoading(false);
            setError(true);
        }, 3000);

        console.log(formData)

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
        });
    }
    const getIcon = (text) => {
        if (text.includes('@')) return <Mail />;
        if (text.includes('021')) return <Phone />;
        return <MapPin />;
    };
    return (
        <>
            <section className={styles.contactPage} style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className={styles.labPageOverlay}></div>
                <div className={styles.mainTitle}>
                    <h1 className={styles.mainTitleText}>{heroTitle}</h1>
                </div>
                <div className={styles.contactBox}>
                    <div className={styles.left_part}>
                        <div className={styles.leftContent}>
                            <h1>{contactInfo?.mainTitle}</h1>
                            <p>{contactInfo?.description?.root?.children[0]?.children[0]?.text}</p>
                        </div>
                        <div className={styles.contactWays}>

                            {contactInfo?.features?.map((f) => (
                                <div key={f.id} className={styles.contactItem}>
                                    <span className={styles.iconCircle}>
                                        {getIcon(f.FeatureText)}
                                    </span>
                                    <p>{f.FeatureText}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.right_part}>
                        <div className={styles.formHeading}>
                            <h1>Leave Us Your Info</h1>
                        </div>
                        <div className={styles.form}>
                            {error &&
                                <p>{error}</p>
                            }
                            <form onSubmit={handleSubmitForm}>
                                {formFields.map((field) => {
                                    // Check if the field is a textarea
                                    if (field.blockType === 'textarea') {
                                        return (
                                            <textarea
                                                key={field.id}
                                                placeholder={field.label}
                                                name={field.name || "message"} // Ensure name matches your state
                                                value={formData[field.name] || ""}
                                                onChange={handleChange}
                                                required={field.required}
                                                className={styles.formInput}
                                            />
                                        );
                                    }
                                    return (
                                        <input
                                            key={field.id}
                                            type={field.blockType === 'email' ? 'email' : 'text'}
                                            placeholder={field.label}
                                            name={field.name}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                            required={field.required}
                                            className={styles.formInput}
                                        />
                                    );
                                })}
                                <button
                                    className={styles.submitBtn}
                                    onClick={handleSubmitForm}
                                    type='submit'
                                >
                                    {loading ? "Sending..." : formBlock?.form?.submitButtonLabel}
                                </button>

                                {successMsg &&
                                    <p className={styles.successText}>Thanks for your response. Our team will get back to you shortly</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
