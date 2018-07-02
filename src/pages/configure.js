import React, { Component } from 'react'
import { connect } from 'react-redux';
import Link from 'gatsby-link'
import { Segment, Header, Menu } from 'semantic-ui-react'
import { CompactPicker } from 'react-color';
import DuotoneRender from '../components/duotone-render'
import { SET_FILTER } from '../reducers';

class SecondPage extends Component {
  render() {
    const { filter, updateColour } = this.props
    return (
      <Segment basic style={{
        flex: '1',
        flexDirection: 'column',
        display: 'flex'
      }}>
        <Segment>
          <Header>Configure</Header>
          {/* <Menu>
            <Menu.Item style={{ background: filter.colours[0] }}>
              {filter.colours[0]}
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item style={{ background: filter.colours[1] }}>
                {filter.colours[1]}
              </Menu.Item>
            </Menu.Menu>
          </Menu> */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '2.5em',
            marginBottom: '1em',
            border: '1px solid #666',
            borderRadius: '6px',
            background: `linear-gradient(90deg, ${filter.colours[0]} 0%, ${filter.colours[1]} 100%)`
          }}>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <CompactPicker
              style={{ position: 'absolute' }}
              color={filter.colours[0]}
              // onSwatchHover={(color) => updateColour(0, color.hex, filter)}
              onChange={(color) => updateColour(0, color.hex, filter)}
            />
            <CompactPicker
              style={{ position: 'absolute' }}
              color={filter.colours[1]}
              // onSwatchHover={(color) => updateColour(1, color.hex, filter)}
              onChange={(color) => updateColour(1, color.hex, filter)}
            />
          </div>
        </Segment>
        <Segment style={{
          flex: '1',
          margin: 0
        }}>
          <DuotoneRender />
        </Segment>
      </Segment>
    )
  }
}

const mapStateToProps = ({ filter }) => {
  return {
    filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateColour(index, colour, filter) {
      const { colours: newColors } = filter
      newColors[index] = colour
      dispatch({
        type: SET_FILTER,
        payload: {
          filter: {
            id: "spotify_peachy",
            name: "Spotify Peachy",
            colours: newColors
          }
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)
