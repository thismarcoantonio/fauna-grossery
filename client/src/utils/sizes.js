export const sizes = {
  xs: 375,
  ph: 414,
  sm: 768,
  md: 1024,
  lg: 1366
}

export const vSizes = {
  xs: 748,
  ph: 716,
  sm: 1004,
  md: 671,
  lg: 650
}

export const stripUnit = num => num / (num * 0 + 1)
export const rem = (size) => `${stripUnit(size) / 16}rem`
export const vh = (size, breakpoint = 'xs') => `${stripUnit(size) / (vSizes[breakpoint] * 0.01)}vmax`
export const vw = (size, breakpoint = 'xs') => `${stripUnit(size) / (sizes[breakpoint] * 0.01)}vmin`
