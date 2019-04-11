import React from 'react'
import PageWrapper from 'common/PageWrapper'

const HomePage = () => (
  <PageWrapper>
    <span>Landing page</span>
    <button type="button" onClick={() => console.log('click')}>
      Login
    </button>
  </PageWrapper>
)

export default HomePage
