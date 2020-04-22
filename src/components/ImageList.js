import React from 'react';
import './ImageList.css';

function ImageList(props) {
    return props.images.map(image => {
        return (
            <div className='myGrid'>
                <img key={image.id} src={image.urls.regular}/>
            </div>
        )
    });
}

export default ImageList;
