import { getSession } from "next-auth/client";

const Dashboard = ({ session }) => {
  const user = session?.user;
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {user.name}</p>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/", permanent: false } };
  return { props: { session } };
}
