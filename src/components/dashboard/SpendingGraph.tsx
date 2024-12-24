import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { Subscription } from '@/types/subscription';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface SpendingGraphProps {
  subscriptions: Subscription[];
}

export function SpendingGraph({ subscriptions }: SpendingGraphProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          boxWidth: 20,
          padding: 15,
          color: 'rgb(156, 163, 175)',
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        padding: window.innerWidth < 768 ? 8 : 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toFixed(2)}`;
          }
        }
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
            family: "'Inter', sans-serif",
          },
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
            family: "'Inter', sans-serif",
          },
          callback: function(value: any) {
            return '$' + value.toFixed(2);
          }
        },
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Calculate monthly spending based on subscriptions
  const monthlySpending = labels.map((_, index) => {
    return subscriptions.reduce((total, sub) => {
      if (sub.active) {
        const monthlyAmount = sub.frequency === 'Monthly' 
          ? sub.amount 
          : sub.frequency === 'Quarterly'
          ? sub.amount / 3
          : sub.amount / 12;
        return total + monthlyAmount;
      }
      return total;
    }, 0);
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Monthly Spending',
        data: monthlySpending,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: window.innerWidth < 768 ? 3 : 4,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 2,
        pointHoverRadius: window.innerWidth < 768 ? 4 : 6,
      },
      {
        fill: true,
        label: 'Projected Spending',
        data: monthlySpending.map((value, index) => 
          index > 8 ? value * 1.1 : null
        ),
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        tension: 0.4,
        pointRadius: window.innerWidth < 768 ? 3 : 4,
        pointBackgroundColor: 'rgb(168, 85, 247)',
        pointBorderColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 2,
        pointHoverRadius: window.innerWidth < 768 ? 4 : 6,
        borderDash: [5, 5],
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Line options={options} data={data} />
    </div>
  );
}