'use client';
import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/components/ui/toaster';
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
/*
attribute="class": This attribute specifies that the theme will be applied to the class attribute of the elements. This allows for more flexibility in styling and customization.
defaultTheme="system": This sets the default theme to the system theme. This means that the theme will automatically adjust based on the user's operating system preferences (light or dark mode).
enableSystem: This enables system-level theme detection. This allows the component to automatically detect and apply the appropriate theme based on the user's system settings.
disableTransitionOnChange: This disables the transition effect when the theme changes. This can be useful for preventing visual glitches or interruptions during theme switching.

#f97215
 */
