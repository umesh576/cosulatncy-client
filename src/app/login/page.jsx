"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+ app directory
// import logindasboard from "../";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Initialize the router

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:2000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Full API response:", data);
      if (response.ok) {
        // Store both token and role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role); // Add this line
        console.log(data.role);
        // Redirect based on role
        if (data.role === "ADMIN") {
          router.push("/admin");
        } else {
          router.push("/user"); // Or your regular homepage
        }
      } else {
        // ... existing error handling
      }
    } catch (err) {
      setError("An error occurred while logging in.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 py-5">
      <section className="my-5 d-flex justify-content-center">
        <form className="form my-5" onSubmit={handleLogin}>
          <p className="form-title">Sign in to your account</p>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="input-container">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit" disabled={loading}>
            {loading ? "Logging in..." : "LOGIN"}
          </button>

          <p className="signup-link">
            No account?
            <Link href="/register">Sign up</Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
