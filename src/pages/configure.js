import React from 'react'
import Link from 'gatsby-link'
import { Segment } from 'semantic-ui-react'
import DuotoneRender from '../components/duotone-render'

const SecondPage = () => (
  <Segment basic style={{
    flex: '1',
    flexDirection: 'column',
    display: 'flex'
  }}>
    <Segment>
      <p>Configure</p>
    </Segment>
    <Segment style={{
      flex: '1',
      margin: 0
    }}>
      <DuotoneRender />
    </Segment>
  </Segment>
)

export default SecondPage
