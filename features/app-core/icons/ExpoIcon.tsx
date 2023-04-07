import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'

/* --- Schema ---------------------------------------------------------------------------------- */

const PropSchema = aetherSchema('ExpoIconProps', {
  width: z.number().default(24).describe('Icon width'),
  height: z.number().default(24).describe('Icon height'),
  fill: z.string().color().default('#000000').describe('Icon fill color'),
})

/* --- <ExpoIcon/> ----------------------------------------------------------------------------- */

const ExpoIcon = (props: AetherProps<typeof PropSchema>) => {
  // Props
  const svgProps = PropSchema.parse(props)
  // Render
  return (
    <Svg viewBox="0 0 24 26" {...svgProps}>
      <Path d="M22.069 10.075a2.273 2.273 0 0 0-.887-.74 2.296 2.296 0 0 0-2.237.16 2.265 2.265 0 0 0-.77.859 2.016 2.016 0 0 0 .392 2.274 3.342 3.342 0 0 0 2.23-.63 3.289 3.289 0 0 0 1.271-1.923zM15.3 1.3 13.85.512 7.54 3.993l.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 0 1 .16.15l2.114 6.182a.205.205 0 0 1-.1.269 4.063 4.063 0 0 0-1.798 1.974 4.017 4.017 0 0 0-.175 2.655 4.283 4.283 0 0 0 1.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 0 1 .262.16l2.184 6.345a.256.256 0 0 1-.101.278l-6.712 3.89a.253.253 0 0 1-.101.02.27.27 0 0 1-.181-.03L13.69 24.5a.234.234 0 0 1-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 0 1-.272.01l-1.592-.898a.23.23 0 0 1-.1-.299l6.805-12.8a.243.243 0 0 1 .11-.099L13.721.03a.259.259 0 0 1 .241 0l1.923 1.03zM7.47 4.499l-.33-.169L.58 16.71l1.197.668 5.657-7.335a.275.275 0 0 1 .231-.1.282.282 0 0 1 .201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 0 1 .12-1.663 2.54 2.54 0 0 1 1.138-1.23 2.798 2.798 0 0 1 3.261.4 2.513 2.513 0 0 1 .073 3.568l-.073.073a2.77 2.77 0 0 1-3.788.01 2.719 2.719 0 0 1-.731-1.158z" />
    </Svg>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default ExpoIcon
