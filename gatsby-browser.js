/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/styles/tailwind.css"
import "./src/styles/global.css"
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/quicksand/400.css"
import "@fontsource/quicksand/500.css"
import "@fontsource/merriweather/400.css"
import "@fontsource/merriweather/700.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import React from 'react'
import { MoodProvider } from './src/context/MoodContext'

// You can delete this file if you're not using it

export const onClientEntry = () => {
  // Set default font family
  document.body.style.fontFamily = "'Space Grotesk', sans-serif"
}

export const wrapRootElement = ({ element }) => {
  return <MoodProvider>{element}</MoodProvider>
}
