import React from 'react'

// CONTEXTS
import { PageMainContextProvider } from 'contexts/PageMainContext'

// PAGES
import Main from 'pages/Main/Main'

function App() {
  return (
    <div>
      <PageMainContextProvider>
        <Main/>
      </PageMainContextProvider>
    </div>
  )
}

export default App
