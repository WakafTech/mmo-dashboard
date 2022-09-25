import { AppShell } from "../ui/AppShell";

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });
function withPageAuth(arg0: { redirectTo: string }) {
  throw new Error("Function not implemented.");
}

const Dashboard = () => {
  return <AppShell>Dashboard</AppShell>;
};

export default Dashboard;