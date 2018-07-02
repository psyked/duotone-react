import React from 'react'
import Link from 'gatsby-link'
import { Segment } from 'semantic-ui-react'

const SecondPage = () => (
  <Segment basic style={{
    flex: '1',
    flexDirection: 'column',
    display: 'flex'
  }}>
    <Segment>
      <p>About</p>
    </Segment>
  </Segment>
)

export default SecondPage
