import { doLogOut } from "@/app/actions";
import React from "react";

export default function Logout() {
  return (
    <form action={doLogOut}>
      <button type="submit">LogOut</button>
    </form>
  );
}
