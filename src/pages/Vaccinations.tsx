
import { AppLayout } from "@/components/layout/AppLayout";
import { WeeklyVaccinationChart } from "@/components/vaccinations/WeeklyVaccinationChart";
import { VaccinationProgressByCenter } from "@/components/vaccinations/VaccinationProgressByCenter";
import { VaccinationByAgeGroup } from "@/components/vaccinations/VaccinationByAgeGroup";
import { VaccinationMap } from "@/components/vaccinations/VaccinationMap";
import { VaccinationProgress } from "@/components/statistics/VaccinationProgress";
import { LatestActivities } from "@/components/vaccinations/LatestActivities";
import { LeadsMonitoring } from "@/components/vaccinations/LeadsMonitoring";
import { Card, CardContent } from "@/components/ui/card";

export default function Vaccinations() {
  const statCards = [
    {
      title: "Total Vaccination Centers",
      value: "89,935",
      change: "+0.1%",
      trend: "up",
      period: "this week"
    },
    {
      title: "Total Doses Administered",
      value: "23,283.5",
      change: "+6.25%",
      trend: "up",
      period: "this week"
    },
    {
      title: "Total Second Administered",
      value: "46,827",
      change: "-0.51%",
      trend: "down",
      period: "this week"
    },
    {
      title: "Pending Second Dose",
      value: "124,854",
      change: "+11.5%",
      trend: "up",
      period: "this week"
    }
  ];

  return (
    <AppLayout pageTitle="Vaccination">
      <div className="space-y-6">
        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">{card.title}</span>
                  <span className="text-2xl font-semibold mt-1">{card.value}</span>
                  <div className="flex items-center gap-1 mt-2">
                    <span className={`text-xs ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {card.change} {card.trend === 'up' ? '↑' : '↓'}
                    </span>
                    <span className="text-xs text-gray-500">{card.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="text-base font-medium">Vaccination Coverage By Region</h3>
                </div>
                <VaccinationMap />
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="text-base font-medium">Vaccination Progress by Center</h3>
                </div>
                <VaccinationProgressByCenter />
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="text-base font-medium">Weekly Vaccination Trends</h3>
                </div>
                <WeeklyVaccinationChart />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="text-base font-medium">Vaccination by Age Group</h3>
                </div>
                <VaccinationByAgeGroup />
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="text-base font-medium">Latest Activities</h3>
                </div>
                <LatestActivities />
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <div className="mb-4">
                  <h3 className="text-base font-medium">Leads Monitoring</h3>
                </div>
                <LeadsMonitoring />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
