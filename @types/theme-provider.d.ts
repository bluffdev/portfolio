import { ThemeProviderProps } from 'next-themes';

declare module 'next-themes' {
  interface ThemeProviderProps {
    children?: any;
  }
}
