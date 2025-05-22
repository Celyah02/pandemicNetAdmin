
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecoveredDeathChart } from "@/components/dashboard/RecoveredDeathChart";
import { VaccinationChart } from "@/components/dashboard/VaccinationChart";
import { PredictionsChart } from "@/components/dashboard/PredictionsChart";
import { TotalCasesChart } from "@/components/dashboard/TotalCasesChart";
import { HospitalsTable } from "@/components/dashboard/HospitalsTable";
import { WorldMap } from "@/components/dashboard/WorldMap";
import { SeparationChart } from "@/components/dashboard/SeparationChart";
import { 
  BarChart, 
  Syringe, 
  Activity, 
  FileDown 
} from "lucide-react";

const Dashboard = () => {
  return (
    <AppLayout pageTitle="Dashboard">
      {/* First row: Pandemic Updates (left) and Recovered & Death Graph (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Pandemic Updates Section */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-lg shadow-sm border h-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Pandemic Updates</h2>
                  <p className="text-sm text-gray-500">New Highlights</p>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <FileDown className="h-4 w-4" />
                  Export
                </Button>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <StatCard
                  icon={<BarChart className="h-5 w-5 text-white" />}
                  iconColor="text-white"
                  iconBgColor="bg-primary"
                  title="Total Cases"
                  value="19453"
                  change={{ value: "8%", isPositive: true, text: "from yesterday" }}
                />
                <StatCard
                  icon={<Syringe className="h-5 w-5 text-white" />}
                  iconColor="text-white"
                  iconBgColor="bg-success"
                  title="Are in treatment"
                  value="40000"
                  change={{ value: "5%", isPositive: true, text: "from yesterday" }}
                />
                <StatCard
                  icon={<Activity className="h-5 w-5 text-white" />}
                  iconColor="text-white"
                  iconBgColor="bg-destructive"
                  title="Dead"
                  value="5000"
                  change={{ value: "12%", isPositive: true, text: "from yesterday" }}
                />
                <StatCard
                  icon={<BarChart className="h-5 w-5 text-white" />}
                  iconColor="text-white"
                  iconBgColor="bg-primary"
                  title="Total Quarantized"
                  value="10"
                  change={{ value: "0.5%", isPositive: true, text: "from yesterday" }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Recovered & Death Graph */}
        <div className="lg:col-span-6">
          <RecoveredDeathChart />
        </div>
      </div>

      {/* Second row: Vaccination, Predictions, Total Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <VaccinationChart />
        <PredictionsChart />
        <TotalCasesChart />
      </div>

      {/* Third row: Hospitals Table, World Map, Separation Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HospitalsTable />
        <WorldMap />
        <SeparationChart />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
