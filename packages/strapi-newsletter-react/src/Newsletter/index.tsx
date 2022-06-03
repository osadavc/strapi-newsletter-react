import subscribeUser from "../subscribeUser";
import React from "react";

interface NewsletterProps {
  strapiEndpoint?: string;
  buttonText?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  strapiEndpoint = "http://localhost:1337",
  buttonText = "Subscribe",
}) => {
  const styles: {
    [key: string]: React.CSSProperties;
  } = {
    container: {
      display: "flex",
      width: "100%",
      backgroundColor: "#fafafa",
      padding: "20px",
      borderRadius: "7px",
      fontFamily: "sans-serif",
      boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)",
    },
    inputField: {
      flexGrow: 1,
      outline: "none",
      borderRadius: "7px",
      padding: "10px",
      marginRight: "10px",
    },
    button: {
      fontWeight: "bold",
    },
    successMessage: {
      color: "#15803d",
      marginLeft: "10px",
      marginTop: "5px",
    },
    errorMessage: {
      color: "#b91c1c",
      marginLeft: "10px",
      marginTop: "5px",
    },
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubscribeUser = async () => {
    console.log("subscribeUser");
    if (!inputRef.current?.value) {
      return;
    }

    try {
      await subscribeUser(inputRef.current?.value, strapiEndpoint);
      setSuccessMessage("Subscribed successfully!");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error Occurred !");
      setSuccessMessage(null);
    }
  };

  return (
    <div>
      <div style={styles["container"]}>
        <input
          type="text"
          style={styles["inputField"]}
          placeholder="Email Address"
          ref={inputRef}
        />
        <button style={styles["button"]} onClick={handleSubscribeUser}>
          {buttonText}
        </button>
      </div>

      {successMessage && (
        <p style={styles["successMessage"]}>{successMessage}</p>
      )}

      {errorMessage && <p style={styles["errorMessage"]}>{errorMessage}</p>}
    </div>
  );
};

export default Newsletter;
