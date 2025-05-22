
import { HospitalsDashboard } from "@/components/hospitals/HospitalsDashboard";
import { AppLayout } from "@/components/layout/AppLayout";

export default function Hospitals() {
  return (
    <AppLayout pageTitle="Hospitals">
      <HospitalsDashboard />
    </AppLayout>
  );
}
