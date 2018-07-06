import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Segment, Button } from 'semantic-ui-react'
import FileSaver from "file-saver";
import DuotoneRender from '../components/duotone-render'
import { connect } from 'react-redux';

class SecondPage extends Component {
  downloadImage() {
    const { width, height } = this.props;
    var svgString = new XMLSerializer().serializeToString(
      document.querySelector("#svg")
    );
    var canvas = document.createElement('canvas')
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    var ctx = canvas.getContext("2d");
    var DOMURL = self.URL || self.webkitURL || self;
    var img = new Image();
    var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svg);
    img.onload = function () {
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(function (blob) {
        FileSaver.saveAs(blob, "download.png");
      });
    };
    img.src = url;
  }

  render() {
    return (
      <Segment basic style={{
        flex: '1',
        flexDirection: 'column',
        display: 'flex'
      }}>
        <Segment>
          <p>Download</p>
          <Button onClick={this.downloadImage.bind(this)}>Save</Button>
        </Segment>
        <Segment style={{
          flex: '1',
          margin: 0
        }}>
          <DuotoneRender />
        </Segment>
      </Segment >
    )
  }
}

const mapStateToProps = ({ imageData, width, height }) => {
  return {
    imageData,
    width,
    height
  }
}

export default connect(mapStateToProps)(SecondPage)
