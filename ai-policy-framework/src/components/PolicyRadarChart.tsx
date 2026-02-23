import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PolicyData } from '@/types/policy';

interface PolicyRadarChartProps {
  data: PolicyData[];
  color?: string;
}

export const PolicyRadarChart = ({ data, color = 'hsl(var(--primary))' }: PolicyRadarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="hsl(var(--border))" strokeWidth={1.5} />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 600 }}
          tickLine={false}
          dy={-10}
        />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 100]} 
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          axisLine={false}
        />
        <Radar 
          name="Policy Attributes" 
          dataKey="value" 
          stroke={color}
          fill={color}
          fillOpacity={0.3}
          strokeWidth={3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
