# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. Langkah Pertama

  ```bash
  npm install react-router-dom
  ```
2. Buat File Halaman Yang Akan Di Tampilkan
  <p>Home.jsx</p>

   ```php
   export default function Home() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to our home page!</p>
      </div>
    )
    }
  ```
<p>Abut.jsx</p>
  ```php
  export default function About() {
    return (
      <div>
        <h1>About</h1>
        <p>Learn more about us!</p>
      </div>
    )
  }
  ```
