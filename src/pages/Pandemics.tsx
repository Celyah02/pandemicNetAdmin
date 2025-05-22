
import { AppLayout } from "@/components/layout/AppLayout";
import { PandemicMap } from "@/components/pandemics/PandemicMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransmissionChart } from "@/components/pandemics/TransmissionChart";
import { ControlMeasuresTable } from "@/components/pandemics/ControlMeasuresTable";
import { PandemicStatCard } from "@/components/pandemics/PandemicStatCard";
import { EmergencyContactCard } from "@/components/pandemics/EmergencyContactCard";
import { Phone, AlertCircle, Map, Activity } from "lucide-react";
import { VaccinationTable } from "@/components/pandemics/VaccinationTable";
import { HealthCenterTable } from "@/components/pandemics/HealthCenterTable";

export default function Pandemics() {
  return (
    <AppLayout pageTitle="Pandemics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full">
          <h2 className="text-2xl font-bold mb-4">Pandemic Information</h2>
          <p className="text-muted-foreground">
            This page contains information about current and past pandemics.
          </p>
        </div>
        
        {/* Map section - spans 2 columns on large screens */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pandemic Spread Map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <PandemicMap />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Monthly Transmission</CardTitle>
            </CardHeader>
            <CardContent>
              <TransmissionChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Current Control Measures</CardTitle>
            </CardHeader>
            <CardContent>
              <ControlMeasuresTable />
            </CardContent>
          </Card>
        </div>
        
        {/* Stats and quick info - takes 1 column */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <PandemicStatCard 
              value="84,821" 
              label="Total Cases" 
              color="text-blue-600"
              icon={<Activity className="h-5 w-5" />}
            />
            <PandemicStatCard 
              value="3,284" 
              label="Active Cases" 
              color="text-yellow-600" 
              icon={<AlertCircle className="h-5 w-5" />}
            />
            <PandemicStatCard 
              value="80,124" 
              label="Recovered" 
              color="text-green-600" 
              icon={<Activity className="h-5 w-5" />}
            />
            <PandemicStatCard 
              value="1,413" 
              label="Deaths" 
              color="text-red-600" 
              icon={<AlertCircle className="h-5 w-5" />}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <EmergencyContactCard 
              icon={<Phone className="h-5 w-5" />}
              title="Emergency Hotline"
              contact="114"
              status="active"
            />
            <EmergencyContactCard 
              icon={<Map className="h-5 w-5" />}
              title="Testing Centers"
              contact="28 Locations"
              status="All open 24/7"
            />
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Vaccination Status</CardTitle>
            </CardHeader>
            <CardContent>
              <VaccinationTable />
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Health Centers Capacity</CardTitle>
            </CardHeader>
            <CardContent>
              <HealthCenterTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
