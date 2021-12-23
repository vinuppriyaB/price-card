import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    uv: 0,
  },
  {
    name: 'FEB',
    uv: 10000,
   
  },
  {
    name: 'MAR',
    uv: 5000,
    
  },
  {
    name: 'APR',
    uv: 15000,
    
  },
  {
    name: 'MAY',
    uv: 10000,
    
  },
  {
    name: 'JUN',
    uv: 20000,
    
  },
  {
    name: 'JUL',
    uv: 15000,
  },
  {
    name: 'AUG',
    uv: 25000,
  },
  {
    name: 'SEP',
    uv: 20000,
  },
  {
    name: 'OCT',
    uv: 30000,
  },
  {
    name: 'NOV',
    uv: 25000,
  },
  {
    name: 'DEC',
    uv: 40000,
  },
];

export function AreaChartGraph() {


  
    return (
      <div className="bar-chart">
      
      <ResponsiveContainer width="100%" aspect={3.5}>
        <AreaChart
          width={300}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="uv"/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#4e73df" fill="#cfd6eb" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }

