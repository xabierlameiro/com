import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing:border-box
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`