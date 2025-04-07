import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { SvgIcon } from '@mui/material';

export default function Progress_chart() {
  return (
    <div
      style={{
        width: 'fit-content',
        padding: '16px',
        borderRadius: '16px',
        // background: 'linear-gradient(180deg, #D6B588 0%, #FFFAF3 100%)',
      }}
    >
      {/* Hidden SVG defs for area gradient */}
      <svg width="0" height="0">
        <defs>
          {/* First Gradient */}
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D6B588" />
            <stop offset="100%" stopColor="#FFFAF3" />
          </linearGradient>



          {/* Second Gradient */}
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(76, 44, 75, 0.54)" />
            <stop offset="100%" stopColor="rgba(76, 44, 75, 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Line chart with area gradient */}
      <LineChart
        sx={{
          "& .MuiAreaElement-root:nth-of-type(1)": {
            fill: "url(#gradient1)",
          },
          "& .MuiAreaElement-root:nth-of-type(2)": {
            fill: "url(#gradient2)",
          },
          "& .MuiLineElement-root": { stroke: "#C49F6D", strokeWidth: 2 },
          "& .MuiMarkElement-root": { stroke: "white", strokeWidth: 2, scale: 1.5, fill: "#EACFAB", display: "block" },

        }}
        xAxis={[{ data: [1, 2, 3, 5, 8] }]}
        series={[
          {
            data: [2, 3.5, 3, 6.5, 7],
            area: true,
            areaColor: 'url(#myGradient)',
            color: '#caa675',
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}






