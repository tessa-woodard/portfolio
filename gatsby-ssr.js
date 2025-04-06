/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
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

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}

export const wrapRootElement = ({ element }) => {
  return <MoodProvider>{element}</MoodProvider>
}
