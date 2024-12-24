import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import type { Subscription } from '../types/subscription';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsChartProps {
  subscriptions: Subscription[];
}

export function AnalyticsChart({ subscriptions }: AnalyticsChartProps) {
  const categoryTotals = subscriptions.reduce((acc, sub) => {
    if (sub.active) {
      const monthlyAmount = sub.frequency === 'Monthly' 
        ? sub.amount 
        : sub.frequency === 'Quarterly'
        ? sub.amount / 3
        : sub.amount / 12;
      
      acc[sub.category] = (acc[sub.category] || 0) + monthlyAmount;
    }
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Monthly Spending by Category',
        data: Object.values(categoryTotals),
        backgroundColor: [
          'rgba(59, 130, 246, 0.6)', // Blue
          'rgba(239, 68, 68, 0.6)',  // Red
          'rgba(16, 185, 129, 0.6)', // Green
          'rgba(245, 158, 11, 0.6)', // Yellow
          'rgba(139, 92, 246, 0.6)', // Purple
          'rgba(236, 72, 153, 0.6)', // Pink
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(239, 68, 68)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)',
          'rgb(236, 72, 153)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: 'Monthly Spending by Category',
        font: {
          size: 16,
          family: "'Inter', sans-serif",
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1F2937',
        bodyColor: '#4B5563',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            return ` $${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(243, 244, 246, 1)',
        },
        ticks: {
          callback: (value: number) => `$${value.toFixed(0)}`,
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-sm"
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
}