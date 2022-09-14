import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
    //   main: '#CAD2C5',
      main: '#84A98C',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#CAD2C5',
      main: '#354F52',
    //   #52796F Hookers Green
    //   #2F3E46 Charcoal
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
     // Provide every color token (light, main, dark, and contrastText) when using
     // custom colors for props in Material UI's components.
     // Then you will be able to use it like this: `<Button color="custom">`
     // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#2F3E46',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    }
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.

    // contrastThreshold: 3,

    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.

    // tonalOffset: 0.2,
  },
//   typography: {
//     // fontFamily: 'UntitledSans',
    
//     body1: {
//       fontSize: 12,
//     },
//     body2: {
//       fontSize: 16,
//     },
//     subtitle1: {
//       fontSize: 15,
//       color: '#686868',
//     },
//     subtitle2: {
//       fontSize: 15,
//       fontWeight: 'bold',
//     },
//     h1: {
//       fontWeight: 'bold',
//     },
//     h2: {
//       fontWeight: 'bold',
//     },
//     h3: {
//       fontWeight: 'bold',
//     },
//     h4: {
//       fontWeight: 'bold',
//     },
//     h5: {
//       fontWeight: 'bold',
//     },
//     h6: {
//       fontWeight: 'bold',
//     },
//     fontWeightMedium: 'bold',
//   },
});

export default theme;
