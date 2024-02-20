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

   ```js
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

  ```js
  export default function About() {
    return (
      <div>
        <h1>About</h1>
        <p>Learn more about us!</p>
      </div>
    )
  }
  ```

<p>Contact.jsx</p>

  ```js
  export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Get in touch with us!</p>
    </div>
  )
}
  ```
3. Langkah Yang Terakhir Atur Bagian App
<p>App.jsx</p>

```js
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
```
