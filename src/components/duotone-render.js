import React, { Component } from 'react'
import { connect } from 'react-redux';

const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

class DuotoneRender extends Component {
    render() {
        const {imageData, filter, blurValue} = this.props
        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
                width:'100%',
                height:'100%'
            }} id="svg">
            {filter && <filter id={filter.id}> 
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" >
                </feColorMatrix>
                {filter.colours && <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues={filter.colours.map((colour)=>hexToRgb(colour).r/255).join(' ')}></feFuncR>
                    <feFuncG type="table" tableValues={filter.colours.map((colour)=>hexToRgb(colour).g/255).join(' ')}></feFuncG>
                    <feFuncB type="table" tableValues={filter.colours.map((colour)=>hexToRgb(colour).b/255).join(' ')}></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>}
                <feGaussianBlur stdDeviation={blurValue} />
            </filter>}
            <image x="0" y="0" width="100%" height="100%" xlinkHref={imageData} filter={filter?`url(#${filter.id})`:''} />
          </svg>
        )
    }
}


const mapStateToProps = ({imageData, filter, blurValue}) => {
    return {
        imageData,
        filter,
        blurValue
    }
}

export default connect(mapStateToProps)(DuotoneRender)