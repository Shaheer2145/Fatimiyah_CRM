'use client'
// Original code commented out to resolve build errors
import { useState } from "react";
import styles from "../OnlineLabReport/lab.module.css";


const Lab = ({ labData }) => {

    const block = labData?.layout?.find(b => b.blockType === 'formBlock');
    const formConfig = block?.form;
    const heroTitle = labData?.hero?.richText?.root?.children[0]?.children[0]?.text || "Online Lab Reports";
    const introText = block?.introContent?.root?.children[0]?.children[0]?.text || "Please enter details.";
    const PAYLOAD_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const bgImage = labData?.hero?.media?.url ? `${PAYLOAD_URL}${labData.hero.media.url}` : null;


    const initialState = {
        userID: "",
        pin: "",
    }
    const [labForm, setLabForm] = useState(initialState);
    const [error, setError] = useState("");
    console.log(labForm);

    const handleChange = (e) => {
        console.log("change");
        const { name, value } = e.target;
        setLabForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const validateForm = () => {
        if (!labForm.userID.includes('@')) {
            return "Invalid userID Format";
        }
        if (!labForm.userID || !labForm.pin) {
            return "Please fill the credentials";
        }
        return null;
    };

    const handleSubmitBtn = async (e) => {
        e.preventDefault();

        const validateError = validateForm();
        if (validateError) {
            setError(validateError);
            return;
        }
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(labForm)

            })

            if (!res.ok) throw new Error("Invalid Credentials");

            const data = await res.json();
            console.log("Reports", data);


        } catch (error) {
            setError(error.message);
        }


    }
    return (
        <>
            <section className={styles.labPage}>
                <div className={styles.labPageOverlay} style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                <div className={styles.mainTitle}>
                    <h1 className={styles.labmainTitleText}>{heroTitle}</h1>
                </div>
                <div className={styles.labPageBox} >
                    <div className={styles.content}>
                        <h1>{heroTitle}</h1>
                        <p>{introText}</p>
                    </div>
                    <div className={styles.labForm}>
                        <form className={styles.labFormfields} onSubmit={handleSubmitBtn}>

                            {formConfig?.fields?.map((field) => (
                                <div key={field.id} className={styles.inputWrapper}> {/* Use a div instead of label */}
                                    {/* <label htmlFor={field.blockName}>{field.label}</label> */}
                                    <input
                                        id={field.blockName}
                                        type={field.blockName === 'pinCode' ? 'password' : 'email'}
                                        placeholder={field.label}
                                        name={field.blockName}
                                        onChange={handleChange}
                                        value={labForm[field.blockName] || ""}
                                        className={styles.inputField} // Ensure this matches your CSS
                                    />
                                </div>
                            ))}

                            <button
                                className={styles.submitBtn}
                                type="submit"
                            >
                                {formConfig?.submitButtonLabel || "Sign In"}
                            </button>
                            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
                        </form>
                    </div>
                    <div className={styles.labBtn}>
                        <p>Copy Right 2024 | <a href="">Terms of Use</a>   </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Lab;


