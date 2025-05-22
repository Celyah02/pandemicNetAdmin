
import { Grid } from "@/components/ui/grid";
import { HospitalsStatsCards } from "./HospitalsStatsCards";
import { HospitalAdmissionRateChart } from "./HospitalAdmissionRateChart";
import { HospitalOccupancyChart } from "./HospitalOccupancyChart";
import { TopHospitalsTable } from "./TopHospitalsTable";
import { TopProblemsTable } from "./TopProblemsTable";
import { HospitalsDataTable } from "./HospitalsDataTable";
import { AdminActivity } from "./AdminActivity";

export function HospitalsDashboard() {
  return (
    <div className="space-y-6">
      <HospitalsStatsCards />
      
      <Grid className="gap-6">
        <div className="col-span-12 md:col-span-6">
          <HospitalAdmissionRateChart />
        </div>
        <div className="col-span-12 md:col-span-6">
          <HospitalOccupancyChart />
        </div>
      </Grid>
      
      <Grid className="gap-6">
        <div className="col-span-12 md:col-span-4">
          <TopHospitalsTable />
        </div>
        <div className="col-span-12 md:col-span-4">
          <TopProblemsTable />
        </div>
        <div className="col-span-12 md:col-span-4">
          <AdminActivity />
        </div>
      </Grid>
      
      <HospitalsDataTable />
    </div>
  );
}
