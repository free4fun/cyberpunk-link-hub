import { ReactNode } from 'react';

export interface Link {
  id: string;
  url: string;
  text: string;
  icon: ReactNode;
}