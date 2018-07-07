import React from 'react'
import Link from 'gatsby-link'
import { Segment, Header, Input, Form } from 'semantic-ui-react'
import DuotoneRender from '../components/duotone-render'
import { connect } from 'react-redux';
import { SET_BLUR_VALUE, SET_TEXT_VALUE } from '../reducers';

const SecondPage = ({ blurValue, updateBlurValue, textOverlay, updateTextValue }) => (
  <Segment basic style={{
    flex: '1',
    flexDirection: 'column',
    display: 'flex'
  }}>
    <Segment>
      <Header>Settings</Header>
      <Form>
        <Form.Field>
          <label>Blur level:</label>
          <Input type='range' value={blurValue} min={0} max={25} onChange={updateBlurValue} />
        </Form.Field>
        <Form.Field>
          <label>Text overlay:</label>
          <Input type='text' value={textOverlay} onChange={updateTextValue} />
        </Form.Field>
      </Form>
    </Segment>
    <Segment style={{
      flex: '1',
      margin: 0
    }}>
      <DuotoneRender />
    </Segment>
  </Segment>
)

const mapStateToProps = ({ blurValue, textOverlay }) => {
  return {
    blurValue,
    textOverlay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBlurValue(event, { value }) {
      // console.log(value);
      dispatch({
        type: SET_BLUR_VALUE,
        payload: {
          blurValue: value
        }
      })
    },
    updateTextValue(event, { value }) {
      // console.log(value);
      dispatch({
        type: SET_TEXT_VALUE,
        payload: {
          textOverlay: value
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)
