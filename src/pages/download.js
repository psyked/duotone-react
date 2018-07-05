import React from 'react'
import Link from 'gatsby-link'
import { Segment, Button } from 'semantic-ui-react'
import FileSaver from "file-saver";
import DuotoneRender from '../components/duotone-render'

const downloadImage = () => {
  var svgString = new XMLSerializer().serializeToString(
    document.querySelector("#svg")
  );

  // var canvas = document.getElementById("canvas");
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext("2d");
  var DOMURL = self.URL || self.webkitURL || self;
  var img = new Image();
  var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  var url = DOMURL.createObjectURL(svg);
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    canvas.toBlob(function (blob) {
      FileSaver.saveAs(blob, "download.png");
    });
  };
  img.src = url;
}

const SecondPage = () => (
  <Segment basic style={{
    flex: '1',
    flexDirection: 'column',
    display: 'flex'
  }}>
    <Segment>
      <p>Download</p>
      <Button onClick={downloadImage}>Save</Button>
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
