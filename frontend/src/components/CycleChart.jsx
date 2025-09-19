import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CycleChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No data for chart</p>;

  const lastThree = data.slice(-3).map((d, index) => ({
    name: `Cycle ${index + 1}`,
    cycleLength: Number(d.cycleLength),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={lastThree}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cycleLength" fill="#be185d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CycleChart;