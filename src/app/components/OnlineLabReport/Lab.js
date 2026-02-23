'use client'
// Original code commented out to resolve build errors
/*
import { useState } from "react";
import styles from "../OnlineLabReport/lab.module.css";


const Lab = () => {

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
                <div className={styles.labPageBox}>
                    <div className={styles.content}>
                        <h1>Online Lab Reports</h1>
                        <p>Please enter login details as mentioned on your Lab Slip.</p>
                    </div>
                    <div className={styles.labForm}>
                        <form className={styles.labFormfields} onSubmit={handleSubmitBtn}>
                            <label>
                                <input
                                    type="email"
                                    placeholder='User ID'
                                    name="userID"
                                    onChange={handleChange}
                                    value={labForm.userID}

                                />
                            </label>
                            <label>
                                <input
                                    type="password"
                                    placeholder='PIN Code'
                                    name="pin"
                                    onChange={handleChange}
                                    value={labForm.pin}
                                />
                            </label>
                            <button
                                className={styles.submitBtn}
                                type="submit"
                            >
                                Sign In
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
*/

export default function Lab() {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>Lab Reports</h1>
            <p>This page is temporarily disabled to resolve build errors.</p>
            <a href="/" style={{ color: '#2ecc71', textDecoration: 'underline' }}>Back to Home</a>
        </div>
    );
}