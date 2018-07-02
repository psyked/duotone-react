import React from 'react'
import Link from 'gatsby-link'
import { connect } from "react-redux"
import { Segment, Header, Button } from 'semantic-ui-react'
import DuotoneRender from '../components/duotone-render'
import { SET_SOURCE, SET_FILTER } from '../reducers/index'

const ImageInput = ({ selectFile }) => (
  <Segment basic style={{
    flex: '1',
    flexDirection: 'column',
    display: 'flex'
  }}>
    <Segment>
      <Header>Image Input</Header>
      <input type="file"
        accept="image/*"
        onChange={selectFile} />
    </Segment>
    <Segment style={{
      flex: '1',
      margin: 0
    }}>
      <DuotoneRender />
    </Segment>
  </Segment>
)

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    selectFile: (event) => {
      const { target: input } = event;

      if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = e => {
          const imageData = e.target.result;
          var image = new Image();
          image.src = imageData;
          image.onload = () => {
            const imageWidth = image.width;
            const imageHeight = image.height;

            dispatch({
              type: SET_SOURCE,
              payload: {
                data: imageData,
                width: imageWidth,
                height: imageHeight
              }
            })
          };
        };

        reader.readAsDataURL(input.files[0]);
      } else {
        console.log('no image?')
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageInput)
