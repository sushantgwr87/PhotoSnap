import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function Page() {
//   const [session, loading] = useSession();
// const { data: session } = useSession()
const { data: session, status } = useSession()
const loading = status === "loading"
const authenticated = status === "authenticated";

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {authenticated ? (
        <p>Super secret page!</p>
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  );
}