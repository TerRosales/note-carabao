"use client";

import { useState } from "react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    setError("");
    console.log("Sign-in attempt:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-4xl font-semibold">Sign In</h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border p-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="mb-1 block text-base font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border p-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full text-xl rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-base">Or continue with</p>
          <button className="mt-2 w-full flex-row text-xl hover:bg-white hover:text-black hover:border-[1px] hover:border-black rounded bg-gray-900 p-2 text-white ">
            <GrGoogle className="mx-auto my-1" />
          </button>
        </div>
        <p className="mt-4 text-center text-base text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/sections/onboarding/sign-up"
            className="text-blue-600 hover:underline"
          >
            Sign Up7
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
