const fontFamily = [
  {
    family: 'lato-web',
    filePrefix: 'Lato-',
    variations: [
      { weight: 400, suffix: 'Regular' },
      { weight: 700, suffix: 'Bold' }
    ]
  }
];

export default (fonts = fontFamily) => fonts
  .map(fontFamily => fontFamily.variations.reduce((acc, font) => `
    ${acc}
    @font-face {
      font-family: '${fontFamily.family}';
      src: url('/fonts/${fontFamily.filePrefix}${font.suffix}.woff') format('woff'),
        url('/fonts/${fontFamily.filePrefix}${font.suffix}.eot') format('eot'),
        url('/fonts/${fontFamily.filePrefix}${font.suffix}.ttf') format('ttf');
      font-weight: ${font.weight};
      ${font.style ? `font-style: ${font.style};` : 'normal'}
    }
  `, '')).join('');
