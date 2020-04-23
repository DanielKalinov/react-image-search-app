import React from 'react';
import './ImageList.css';

import Image from './Image';

function ImageList(props) {
    const renderedImageList = props.images.map(image => {
        return <Image key={image.id} image={image}/>
    });

    return (
        <div className='image-list'>{renderedImageList}</div>
    )
}

export default ImageList;
