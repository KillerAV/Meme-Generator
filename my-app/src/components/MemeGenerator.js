import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        //Purpose is to ask this method to use "this" of the surrounding and not itself.
        //If we convert these functions to error functions, then these two lines are no longer required.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const memes = response.data.memes;
                this.setState({
                    allMemeImages: memes
                });
            });

    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const size = this.state.allMemeImages.length;
        const randomSelectedImage = this.state.allMemeImages[Math.floor(Math.random()*size)].url;
        console.log(randomSelectedImage);
        this.setState({
            randomImage: randomSelectedImage
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            name="topText"
                            value={this.topText}
                            placeholder="Top Text of the Meme"
                            onChange={this.handleChange}
                            className="meme-input"
                    />

                    <input  type="text"
                            name="bottomText"
                            value={this.bottomText}
                            placeholder="Bottom Text of the Meme"
                            onChange={this.handleChange}
                            className="meme-input"
                    />

                    <button className="purple-button"> Generate </button>   
                </form>

                <div className="meme-container">
                    <img src={this.state.randomImage} 
                         alt="Random Meme" 
                         className="meme-image"
                    />
                    <h2 className="topText"> {this.state.topText} </h2>
                    <h2 className="bottomText"> {this.state.bottomText} </h2>
                </div>

            </div>
        );
    }
}

export default MemeGenerator