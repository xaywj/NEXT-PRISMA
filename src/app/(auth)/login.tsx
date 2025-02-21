import React from "react";

export default function login() {
  return (
    <form className="flex flex-col space-y-4 w-96 p-10 rounded-md shadow-md bg-white">
      <h1 className="text-2xl font-bold">Login</h1>
      <label className="flex flex-col">
        <span className="text-sm">Email</span>
        <input className="border px-2 py-1 rounded-md" type="email" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm">Password</span>
        <input className="border px-2 py-1 rounded-md" type="password" />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
