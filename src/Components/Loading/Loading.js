import React from 'react'
import {css} from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';
import './Loading.css'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
    let Load = true;
    let color = "#A2A7A7";
    return (
        <div className="sweet-loading" >
            <PulseLoader color={color} loading={Load} css={override} size={20} speedMultiplier={0.5} />            
        </div>
    )
}

export default Loading
