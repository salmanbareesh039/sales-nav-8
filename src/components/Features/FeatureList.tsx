import React from 'react';
import { Search, Users, MessageCircle, Briefcase, LineChart, Shield } from 'lucide-react';
import { Feature } from './types';

export const features: Feature[] = [
  {
    icon: Search,
    title: "Advanced Search & Filters",
    description: "Find decision-makers and prospects with precision using powerful search capabilities and industry-specific filters"
  },
  {
    icon: Users,
    title: "Network Expansion",
    description: "Connect with key professionals beyond your network and build meaningful business relationships"
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Reach decision-makers directly with InMail credits and track engagement metrics"
  },
  {
    icon: Briefcase,
    title: "Sales Intelligence",
    description: "Access real-time company insights, buying signals, and decision-maker changes to identify opportunities early"
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Track engagement metrics, connection rates, and campaign performance with detailed analytics dashboard"
  },
  {
    icon: Shield,
    title: "Premium Support",
    description: "Get priority 24/7 customer support and dedicated account management for seamless service experience"
  }
];