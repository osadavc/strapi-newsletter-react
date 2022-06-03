# Strapi Newsletter React ⚛️

## Introduction 📖

Strapi Newsletter React is a ReactJS component and a utility function that will allow a user in your website to subscribe to a newsletter. You have access to a React JS component called `<Newsletter />` that will allow you to display a newsletter subscription form and a helper function called `subscribeUser` if you want to handle the subscription UI yourself.

## Installation ⏳

Run any of the following commands inside your strapi directory to install the package:

```
npm i @strapi-newsletter/react

yarn add @strapi-newsletter/react
```

## Usage 💄

1. React Component ⚛️

```jsx
import Newsletter from "@strapi-newsletter/react";

const App = () => (
  <Newsletter strapiEndpoint="http://localhost:1337" buttonText="Subscribe" />
);
```

2. Helper Function

```js
import { subscribeUser } from "@strapi-newsletter/react";

const handleUserSubscribe = async (email) => {
  await subscribeUser(email, "http://localhost:1337");
};
```
