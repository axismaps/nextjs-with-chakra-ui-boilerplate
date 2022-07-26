import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../src/theme'
import 'mapbox-gl/dist/mapbox-gl.css'

export const withChakraUi = (Story) => (
  <ChakraProvider resetCSS theme={theme}>
    <Story />
  </ChakraProvider>
)
