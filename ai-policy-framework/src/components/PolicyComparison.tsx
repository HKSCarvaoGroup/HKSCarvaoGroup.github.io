import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Policy } from '@/types/policy';

interface PolicyComparisonProps {
  policies: Policy[];
}

export const PolicyComparison = ({ policies }: PolicyComparisonProps) => {
  // Merge all policy data into a single dataset for comparison
  const mergedData = policies[0].data.map((item, index) => {
    const dataPoint: any = { subject: item.subject, fullMark: item.fullMark };
    
    policies.forEach((policy) => {
      dataPoint[policy.id] = policy.data[index].value;
    });
    
    return dataPoint;
  });

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={mergedData}>
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
          {policies.map((policy) => (
            <Radar
              key={policy.id}
              name={policy.name}
              dataKey={policy.id}
              stroke={policy.color}
              fill={policy.color}
              fillOpacity={0.2}
              strokeWidth={2.5}
            />
          ))}
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
