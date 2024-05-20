import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type MediaQueryType = 'up' | 'down' | 'between' | 'only';

export function useResponsive(query: MediaQueryType, start: Breakpoint | number | string, end?: Breakpoint | number | string) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Breakpoint));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Breakpoint));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Breakpoint, end as Breakpoint));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    case 'only':
      return mediaOnly;
    default:
      return false;
  }
}

// ----------------------------------------------------------------------

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function useWidth(): BreakpointType {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();

  const width = keys.find((key) => {
    return theme.breakpoints.up(key as Breakpoint);
  });

  const isWidth = useMediaQuery(theme.breakpoints.up(width as Breakpoint));

  return (isWidth ? width : 'xs') as BreakpointType;
}

