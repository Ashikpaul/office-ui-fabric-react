import { IPalette, ISemanticColors, ITheme, IPartialTheme, createTheme } from 'office-ui-fabric-react/lib/Styling';

function makeThemeFromPartials(
  originalTheme: IPartialTheme,
  partialPalette: Partial<IPalette>,
  partialSemantic: Partial<ISemanticColors>
): ITheme {
  return createTheme({
    ...originalTheme,
    ...{
      palette: { ...originalTheme.palette, ...partialPalette },
      semanticColors: { ...originalTheme.semanticColors, ...partialSemantic }
    }
  });
}

/**
 * A variant where the background soft shade of the neutral color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme for which to build a variant for
 * @returns {ITheme} the variant theme
 */
export function getNeutralVariant(theme: IPartialTheme): ITheme {
  const fullTheme = createTheme(theme);
  const p = fullTheme.palette;

  // commented lines are unchanged, but left in for tracking purposes
  // in a neutral variant, most colors remain unchanged
  const partialPalette: Partial<IPalette> = {
    // theme
    // themeDarker: '#004578',
    // themeDark: '#005a9e',
    // themeDarkAlt: '#106ebe',
    // themePrimary: '#0078d4',
    // themeSecondary: '#2b88d8',
    // themeTertiary: '#71afe5',
    // themeLight: '#c7e0f4',
    // themeLighter: '#deecf9',
    // themeLighterAlt: '#eff6fc',

    // foregrounds
    // black: '#000000',
    // neutralDark: '#212121',
    // neutralPrimary: '#333333',
    // neutralPrimaryAlt: '#3c3c3c',
    // neutralSecondary: '#666666',
    // neutralTertiary: '#a6a6a6',

    // backgrounds
    // neutralTertiaryAlt: '#c8c8c8',
    // neutralQuaternary: '#d0d0d0',
    // neutralQuaternaryAlt: '#dadada',
    neutralLight: p.neutralQuaternaryAlt,
    neutralLighter: p.neutralLight,
    neutralLighterAlt: p.neutralLight,
    white: p.neutralLighter
    // squish the backgrounds a bit
  };

  const partialSemantic: Partial<ISemanticColors> = {
    bodyBackground: p.neutralLighter,
    bodyFrameBackground: !fullTheme.isInverted ? p.neutralLight : p.neutralLighterAlt
  };

  return makeThemeFromPartials(theme, partialPalette, partialSemantic);
}

/**
 * A variant where the background is a soft version of the primary color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme for which to build a variant for
 * @returns {ITheme} the variant theme
 */
export function getSoftVariant(theme: IPartialTheme): ITheme {
  const fullTheme = createTheme(theme);
  const p = fullTheme.palette;

  // commented lines are unchanged, but left in for tracking purposes
  // in a soft variant, most colors remain unchanged
  const partialPalette: Partial<IPalette> = {
    // theme
    // themeDarker: '#004578',
    // themeDark: '#005a9e',
    // themeDarkAlt: '#106ebe',
    // themePrimary: '#0078d4',
    // themeSecondary: '#2b88d8',
    // themeTertiary: '#71afe5',
    // themeLight: '#c7e0f4',
    // themeLighter: '#deecf9',
    // themeLighterAlt: '#eff6fc',

    // foregrounds
    // black: '#000000',
    // neutralDark: '#212121',
    // neutralPrimary: '#333333',
    // neutralPrimaryAlt: '#3c3c3c',
    // neutralSecondary: '#666666',
    // neutralTertiary: '#a6a6a6',

    // backgrounds
    neutralTertiaryAlt: p.themeDark,
    neutralQuaternary: p.themeDarkAlt,
    neutralQuaternaryAlt: p.themePrimary,
    neutralLight: p.themeSecondary,
    neutralLighter: p.themeTertiary,
    neutralLighterAlt: p.themeLight,
    white: p.themeLighter
  };

  const partialSemantic: Partial<ISemanticColors> = {
    bodyBackground: p.themeLighter,
    bodyFrameBackground: !fullTheme.isInverted ? p.themeLight : p.themeLighterAlt,

    inputBorder: p.themeLighter,
    // inputBorderHovered: p.neutralPrimary,
    inputBackground: p.themeLighter,
    // inputBackgroundChecked: p.themePrimary,
    // inputBackgroundCheckedHovered: p.themeDarkAlt,
    inputForegroundChecked: p.themeLighter
    // inputFocusBorderAlt: p.themePrimary,
  };

  return makeThemeFromPartials(theme, partialPalette, partialSemantic);
}

/**
 * A variant where the background is a strong version of the primary color. All colors change.
 * The background becomes shades of the primary color.
 * The foreground/text becomes shades of the background color.
 * The primary color becomes shades of the background.
 *
 * @export
 * @param {IPartialTheme} theme the theme for which to build a variant for
 * @returns {ITheme} the variant theme
 */
export function getStrongVariant(theme: IPartialTheme): ITheme {
  const fullTheme = createTheme(theme);
  const p = fullTheme.palette;

  // dirty algorithm:
  // in a tricolor theme, foreground doesn't get used?
  // theme colors -> background shades
  // foregrounds -> background shades
  // backgrounds -> theme colors
  const partialPalette: Partial<IPalette> = {
    // theme
    themeDarker: p.white,
    themeDark: p.neutralLighterAlt,
    themeDarkAlt: p.neutralLighterAlt,
    themePrimary: p.white,
    themeSecondary: p.neutralLighter,
    themeTertiary: p.neutralLight,
    themeLight: p.neutralQuaternaryAlt,
    themeLighter: p.neutralQuaternary,
    themeLighterAlt: p.neutralTertiaryAlt,

    // foregrounds
    black: p.neutralLighterAlt,
    neutralDark: p.neutralLighter,
    neutralPrimary: p.white,
    neutralPrimaryAlt: p.neutralLight,
    neutralSecondary: p.neutralQuaternaryAlt,
    neutralTertiary: p.neutralQuaternary,

    // backgrounds
    neutralTertiaryAlt: p.themeLighterAlt,
    neutralQuaternary: p.themeLighterAlt, // something needs to overlap here since we're out of slots
    neutralQuaternaryAlt: p.themeLighter,
    neutralLight: p.themeLight,
    neutralLighter: p.themeTertiary,
    neutralLighterAlt: p.themeSecondary,
    white: p.themePrimary
  };

  const partialSemantic: Partial<ISemanticColors> = {
    bodyBackground: p.themePrimary,
    bodyFrameBackground: !fullTheme.isInverted ? p.themeDarkAlt : p.themeSecondary,

    bodyText: p.white,
    bodySubtext: p.white,

    inputBorder: p.themeDark,
    // inputBorderHovered: p.neutralPrimary,
    inputBackground: p.themeDark,
    inputBackgroundChecked: p.white,
    // inputBackgroundCheckedHovered: p.themePrimary,
    inputForegroundChecked: p.themeDark
    // inputFocusBorderAlt: p.themePrimary,
  };

  // Strong variant is unique here, we've redefined the entire palette and are
  // effectively inverting the theme. Thus, do not mix in the original theme's value
  // for the palette and semanticColors, since they will not work well "inverted",
  // instead, use the new palette and then generate semanticColors from scratch.
  return createTheme({
    ...theme,
    ...{
      palette: partialPalette,
      semanticColors: partialSemantic,
      isInverted: !theme.isInverted
    }
  });
}
