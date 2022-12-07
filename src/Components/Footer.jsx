import React from 'react'
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className="footer" id={theme.theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
