import React, { Component } from 'react'
import { connect } from 'react-redux';

class DuotoneRender extends Component {
    render() {
        const {imageData, selectedFilter} = this.props
        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
                width:'100%',
                height:'100%'
            }} id="svg">
            {selectedFilter && <filter id={selectedFilter}> 
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" >
                </feColorMatrix>
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone" v-if="filter.colours">
                    <feFuncR type="table" tableValues="filter.colours.map((colour)=>{return hexToRgb(colour).r/255}).join(' ')"></feFuncR>
                    <feFuncG type="table" tableValues="filter.colours.map((colour)=>{return hexToRgb(colour).g/255}).join(' ')"></feFuncG>
                    <feFuncB type="table" tableValues="filter.colours.map((colour)=>{return hexToRgb(colour).b/255}).join(' ')"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>}
            <image x="0" y="0" width="100%" height="100%" xlinkHref={imageData} filter={selectedFilter?`url(#${selectedFilter})`:''} />
          </svg>
        )
    }
}


const mapStateToProps = ({imageData}) => {
    return {
        imageData
    }
}

export default connect(mapStateToProps)(DuotoneRender)