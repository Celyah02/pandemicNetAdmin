
import { AppLayout } from "@/components/layout/AppLayout";
import { PredictionsOverview } from "@/components/predictions/PredictionsOverview";
import { RegionsRiskLevel } from "@/components/predictions/RegionsRiskLevel";
import { SmallChartCard } from "@/components/predictions/SmallChartCard";
import { InfectionGrowthRate } from "@/components/predictions/InfectionGrowthRate";
import { MutationProbability } from "@/components/predictions/MutationProbability";
import { QuarantineRestrictions } from "@/components/predictions/QuarantineRestrictions";

export default function Predictions() {
  return (
    <AppLayout pageTitle="Predictions">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main chart area - spans 2 columns on large screens */}
        <div className="lg:col-span-2 space-y-6">
          <PredictionsOverview />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SmallChartCard 
              title="Growth Rate" 
              value="2.35%" 
              change="+0.8%" 
              type="up" 
              chartColor="#FF6B6B"
            />
            <SmallChartCard 
              title="Recovery" 
              value="158.5K" 
              change="+23.5%" 
              type="up" 
              chartColor="#51CF66"
            />
            <SmallChartCard 
              title="Fatality" 
              value="963,421" 
              change="+0.5%" 
              type="up" 
              chartColor="#FF922B"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfectionGrowthRate />
            <MutationProbability />
          </div>
        </div>
        
        {/* Right sidebar with additional charts */}
        <div className="space-y-6">
          <RegionsRiskLevel />
          <QuarantineRestrictions />
        </div>
      </div>
    </AppLayout>
  );
}
