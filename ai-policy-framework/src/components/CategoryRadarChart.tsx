import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface CategoryRadarData {
  subject: string;
  value: number;
  fullMark: number;
}

interface CategoryRadarChartProps {
  data: CategoryRadarData[];
  color?: string;
  height?: number;
}

export const CategoryRadarChart = ({ data, color = 'hsl(var(--primary))', height = 350 }: CategoryRadarChartProps) => {
  // Truncate labels for display
  const truncatedData = data.map(item => ({
    ...item,
    displaySubject: item.subject.length > 20 ? item.subject.substring(0, 18) + '...' : item.subject,
    fullSubject: item.subject,
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={truncatedData}>
        <PolarGrid stroke="hsl(var(--border))" strokeWidth={1} />
        <PolarAngleAxis 
          dataKey="displaySubject" 
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 10, fontWeight: 500 }}
          tickLine={false}
        />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 100]} 
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
          axisLine={false}
          tickCount={5}
        />
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-popover border rounded-lg p-3 shadow-lg">
                  <p className="font-medium text-sm text-foreground">{data.fullSubject}</p>
                  <p className="text-sm text-muted-foreground">Score: {data.value}/100</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Radar 
          name="Score" 
          dataKey="value" 
          stroke={color}
          fill={color}
          fillOpacity={0.3}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
