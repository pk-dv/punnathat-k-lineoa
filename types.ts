import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}