"use client";
import updateUserName from "./updateUsername";

export default function ClientPage({ children, id }) {
  return (
    <div>
      {children}
      <form action={updateUserName}>
        <h2>Enter new username</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="hidden" name="id" value={id} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
