import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/contact">Contact</Link>
      <p>Welcome to our home page!</p>
    </div>
  );
}
