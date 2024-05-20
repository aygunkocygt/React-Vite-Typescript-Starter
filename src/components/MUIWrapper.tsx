// MUIWrapper.tsx
import React, { createContext, useMemo, useState, ReactNode } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const MUIWrapperContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

interface MUIWrapperProps {
  children: ReactNode;
}

const MUIWrapper: React.FC<MUIWrapperProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          // Diğer renk ayarları
        },
        typography: {
          fontFamily: "Roboto",
        },
        components: {
          MuiInputBase: {
            styleOverrides: {
              root: {},
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                "& .MuiInputBase-root": {},
              },
            },
          },
          MuiSelect: {
            styleOverrides: {
              select: {},
            },
            defaultProps: {
  
            },
          },
        },
      }),
    [mode]
  );

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const cache = createCache({ key: "mui", prepend: true });

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CacheProvider value={cache}>{children}</CacheProvider>
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  );
};

export default MUIWrapper;
