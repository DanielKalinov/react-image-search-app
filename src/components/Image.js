import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            spanCount: 0
        }

        this.imageRef = React.createRef();
    }
    
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.adjustImageHeight);
    }

    adjustImageHeight = () => {
        const height = this.imageRef.current.clientHeight;
        const spanCount = Math.ceil(height / 10 + 1);

        this.setState({ spanCount });
    }

    render() {
        const { urls, description } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spanCount}` }}>
                <img 
                    src={urls.regular}
                    alt={description}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default Image;

