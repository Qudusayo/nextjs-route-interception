// app/ThemeRegistry.tsx
"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import React from "react";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902

const themed = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff0000",
          dark: "rgba(0, 117, 255, 0.8)",
          light: "rgba(0, 117, 255, 0.7)",
        },
        secondary: {
          main: "#F2B705",
          dark: "rgba(242, 183, 5, 0.8)",
          light: "rgba(242, 183, 5, 0.7)",
        },
        error: {
          main: "rgba(218, 16, 11, 1)",
        },
        warning: {
          main: "#F4B740",
        },
        success: {
          main: "#1F8B24",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
};

const theme = extendTheme({});

export default function ThemeRegistry(
  props: React.PropsWithChildren<{
    options: Parameters<typeof createCache>[0];
  }>
) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}
