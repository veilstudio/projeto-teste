import React from 'react';

export interface BusinessUnit {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}