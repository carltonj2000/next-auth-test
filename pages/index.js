import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  const user = session ? session.user : null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      <h1>Hi</h1>
      {session ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img src={user.image} alt="user" width="200px" />
          <button style={{ marginTop: "2px" }} onClick={signOut}>
            GitHub Sign Out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn("github")}>GitHub Sign In</button>
      )}
      <button onClick={() => router.push("/dashboard")}>Go To Dashboard</button>
      <button onClick={() => router.push("/api/hello")}>Go To API</button>
    </div>
  );
}
