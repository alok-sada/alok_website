// Layout.tsx

import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      
      {children}
      
      <footer>Footer</footer>
    </div>
  )
}