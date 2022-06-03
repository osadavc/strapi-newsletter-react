const subscribeUser = async (
  email: string,
  strapiEndpoint: string = "http://localhost:1337"
) => {
  if (!validateEmail(email)) {
    throw new Error("Invalid email");
  }

  const data = await fetch(
    `${strapiEndpoint}/strapi-newsletter/newsletter/subscribe`,
    {
      method: "POST",
      body: JSON.stringify({ email }),
    }
  );

  if (!data.ok) {
    throw new Error("Error subscribing user");
  }

  const json = await data.json();

  return json;
};

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default subscribeUser;
