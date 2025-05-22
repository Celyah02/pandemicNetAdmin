import { AppLayout } from "@/components/layout/AppLayout";
import { StatisticsOverview } from "@/components/statistics/StatisticsOverview";
import { RegionalBreakdown } from "@/components/statistics/RegionalBreakdown";
import { TrendAnalysis } from "@/components/statistics/TrendAnalysis";
import { DemographicData } from "@/components/statistics/DemographicData";
import { TestingData } from "@/components/statistics/TestingData";
import { VaccinationProgress } from "@/components/statistics/VaccinationProgress";

export default function Statistics() {
  return (
    <AppLayout pageTitle="Statistics">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area - spans 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <StatisticsOverview />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrendAnalysis />
            <DemographicData />
          </div>
          
          <TestingData />
        </div>
        
        {/* Right sidebar with additional statistics */}
        <div className="space-y-6">
          <RegionalBreakdown />
          <VaccinationProgress />
        </div>
      </div>
    </AppLayout>
  );
}
