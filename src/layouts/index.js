import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import GatsbyLink from 'gatsby-link';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

    <Sidebar.Pushable style={{ minHeight: '100vh' }}>
      <Sidebar
        as={Menu}
        // animation='overlay'
        // direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={true}
        width='thin'
      >
        <GatsbyLink to={'/'}>
          <Menu.Item as='a'>
            <Icon name='info circle' />
            About
        </Menu.Item>
        </GatsbyLink>
        <GatsbyLink to={'/image-input'}>
          <Menu.Item as='a'>
            <Icon name='image outline' />
            Image Input
        </Menu.Item>
        </GatsbyLink>
        <GatsbyLink to={'/configure'}>
          <Menu.Item as='a'>
            <Icon name='eye dropper' />
            Configure
        </Menu.Item>
        </GatsbyLink>
        <GatsbyLink to={'/settings'}>
          <Menu.Item as='a'>
            <Icon name='cog' />
            Settings
        </Menu.Item>
        </GatsbyLink>
        <GatsbyLink to={'/download'}>
          <Menu.Item as='a'>
            <Icon name='download' />
            Download
        </Menu.Item>
        </GatsbyLink>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic style={{
          paddingRight: 'calc(150px + 1em)',
          background: 'hsl(60,20%,93.3%)',
          minHeight: '100vh'
        }}>
          {children()}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
