import React, { useState } from "react";
import styles from "./ForgotPassword.module.css";
import OtpInput from "react-otp-input";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Verification Code</h3>
        <p>we have sent an verification </p>
        <p>code to your email address</p>
        <OtpInput
          value={otp}
          onChange={(number) => setOtp(number)}
          numInputs={4}
          renderSeparator={<span> </span>}
          renderInput={(props) => <input {...props} />}
          shouldAutoFocus
          inputStyle={styles.inputStyles}
        />

        <button className={styles.button}>Verify</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
