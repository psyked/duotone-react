import React from 'react'
import Link from 'gatsby-link'
import { Segment, Header, Input } from 'semantic-ui-react'
import DuotoneRender from '../components/duotone-render'
import { connect } from 'react-redux';
import { SET_BLUR_VALUE } from '../reducers';

const SecondPage = ({ blurValue, updateBlurValue }) => (
  <Segment basic style={{
    flex: '1',
    flexDirection: 'column',
    display: 'flex'
  }}>
    <Segment>
      <Header>Settings</Header>
      <Input type='range' value={blurValue} min={0} max={25} onChange={updateBlurValue} />
      Blur level: {blurValue}
    </Segment>
    <Segment style={{
      flex: '1',
      margin: 0
    }}>
      <DuotoneRender />
    </Segment>
  </Segment>
)

const mapStateToProps = ({ blurValue }) => {
  return {
    blurValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBlurValue(event, { value }) {
      console.log(value);
      dispatch({
        type: SET_BLUR_VALUE,
        payload: {
          blurValue: value
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)
