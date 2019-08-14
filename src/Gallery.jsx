import React, { Component } from 'react'
import './gallery.scss'
import image1 from './assets/4k-wallpaper-blur-botanical-1534172.jpg'
import image2 from './assets/aerial-shot-coral-deep-1556796.jpg'
import image3 from './assets/animal-beautiful-bright-1123767.jpg'
import image4 from './assets/asia-cascade-clean-788200.jpg'
import image5 from './assets/biology-bright-close-up-796656.jpg'
import image6 from './assets/coconut-trees-dawn-daylight-1033729.jpg'
import image7 from './assets/4k-wallpaper-blur-botanical-1534172.jpg'
import image8 from './assets/aerial-shot-coral-deep-1556796.jpg'

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
];

const MIN_SIZE = 400;

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minHeight: 0,
        }
    }

    componentDidMount() {
        console.log(this.state.minHeight)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.minHeight)
    }

    handleSize = ({target}) => {
        let width = taget.naturalHeight;
        let height = target.naturalHeight;

        console.log(target.naturalWidth);
        console.log(target.naturalHeight);
    };

    getRatio = (width, height) => width/height;

    handleSmallHeightImage = ({target}) => {
        let { naturalHeight } = target;
        let minHeight = this.state.minHeight;

        if (minHeight === 0) {
            minHeight = naturalHeight;
        } else if (naturalHeight < minHeight) {
            minHeight = naturalHeight
        }

        this.setState({ minHeight })
    }

    render() {
        return (
            <div className="gallery">
                <div className="gallery--content">
                    {
                        images.map( (image, index) => (
                            <div className="gallery--card" key={index} >
                                <img src={image} alt="" onLoad={this.handleSmallHeightImage} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
