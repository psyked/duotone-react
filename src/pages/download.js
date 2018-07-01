import React from 'react'
import Link from 'gatsby-link'
import { Segment } from 'semantic-ui-react'
import DuotoneRender from '../components/duotone-render'

const SecondPage = () => (
  <Segment basic>
    <Segment>
      <p>Download</p>
    </Segment>
    <Segment>
      <DuotoneRender />
    </Segment>
  </Segment>
)

export default SecondPage
