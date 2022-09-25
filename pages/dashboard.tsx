import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { AppShell } from "../ui/AppShell";

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });

const Dashboard = () => {
  return <AppShell>Dashboard</AppShell>;
};

export default Dashboard;