/** @jsx jsx */

import nightOwl from "@theme-ui/prism/presets/night-owl.json"
import prism from "@theme-ui/prism/presets/theme-ui"
import { tailwind } from "@theme-ui/presets"

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [5, 6, 7],
    mt: 2,
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [4, 5, 6],
    mt: 2,
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [3, 4, 5],
    mt: 3,
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [2, 3, 4],
    mt: 3,
  },
  h5: {
    ...tailwind.styles.h5,
    color: `heading`,
    fontSize: [1, 2, 3],
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 1,
    mb: 2,
  },
}

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  sizes: {
    container: 640,
  },
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.red[5],
    secondary: tailwind.colors.gray[5],
    toggleIcon: tailwind.colors.blue[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    linkUnderline: tailwind.colors.gray[2],
    inlineCode: tailwind.colors.blue[1],
    modes: {
      dark: {
        primary: tailwind.colors.red[5],
        text: tailwind.colors.gray[2],
        secondary: tailwind.colors.gray[4],
        toggleIcon: tailwind.colors.yellow[4],
        background: tailwind.colors.gray[9],
        heading: tailwind.colors.white,
        divide: tailwind.colors.red[9],
        muted: tailwind.colors.red[8],
        linkUnderline: tailwind.colors.gray[8],
        inlineCode: tailwind.colors.blue[9],
      },
    },
  },
  fonts: {
    ...tailwind.fonts,
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    code: {
      ...prism,
      ...nightOwl,
    },
    a: {
      color: `primary`,
      textDecoration: `underline`,
      textDecorationColor: tailwind.colors.gray[2],
      ":hover": {
        textDecorationColor: tailwind.colors.red[5],
      },
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ...headingStyles,
    Container: {
      padding: [3, 4],
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `underline`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
  badges: {
    primary: {
      bg: tailwind.colors.gray[3],
    },
    "tag-css": {
      bg: tailwind.colors.blue[5],
    },
  },
}
