'use client'
import { useState } from 'react';
import styles from "../ContactUS/Contact.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactUs() {
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


    const handleSubmitForm = async(e) => {


        e.preventDefault();
        
        setLoading(true);
        const validateError = validateForm();
        if(validateError){
            setError("Invalid");
            return;
        }
        try {
            const res = await fetch("/api/contact",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(formData)
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
    return (
        <>
            <section className={styles.contactPage}>
                <div className={styles.contactBox}>
                    <div className={styles.left_part}>
                        <div className={styles.leftContent}>
                            <h1>Get In Touch With Us </h1>
                            <p>You can contact Fatimiyah Hospital by calling us on our number and by email on address or you can visit below given location.</p>
                        </div>
                        <div className={styles.contactWays}>
                            <div className={styles.location}>
                                <span className={styles.iconCircle}>
                                    <MapPin size={30} className={styles.icon} />
                                </span>
                                <p>Soldier Bazar, Garden East, Karachi</p>
                            </div>
                            <div className={styles.contact}>
                                <span className={styles.iconCircle}>
                                    <Phone size={30} className={styles.icon} />
                                </span>
                                <p>contact@fh.org.pk</p>
                            </div>
                            <div className={styles.telephone}>
                                <span className={styles.iconCircle}>
                                    <Mail size={30} className={styles.icon} />
                                </span>
                                <p>021 111 012 014</p>
                            </div>
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
                            <form>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    className={styles.form}
                                    value={formData.firstName}
                                    name="firstName"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    className={styles.form}
                                    value={formData.lastName}
                                    name="lastName"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className={styles.form}
                                    value={formData.email}
                                    name="email"
                                    onChange={handleChange}
                                // required
                                />
                                <input
                                    type='text'
                                    placeholder='Subject'
                                    className={styles.form}
                                    value={formData.subject}
                                    name="subject"
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    placeholder='Message...'
                                    value={formData.message}
                                    onChange={handleChange}
                                    name='message'
                                >
                                </textarea>

                                <button
                                    className={styles.submitBtn}
                                    onClick={handleSubmitForm}
                                    type='submit'
                                >
                                    {loading ? "Sending..." : "Submit"}
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
