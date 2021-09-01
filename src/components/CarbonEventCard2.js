import React,{useState} from 'react';
import '../styles/style.scss';


// import 'nprogress/nprogress';

// class App extends React.Component {
//     render() {
//         return (
//             <div className="page-container">
//
//                 <BlogCard />
//                 <footer>
//                     Image credit: <a href="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png">8pxl on Tumblr</a>
//                 </footer>
//
//         )
//     }
// }
let counter = 0;
export class CarbonEvent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }


    flip = () => {
        this.setState({ flipped: !this.state.flipped });


    }
    flip2 = () =>{
        this.setState({ flipped: !this.state.flipped });
    };
    render() {
        return (

            <div className="page-container">
            <div onClick={this.flip} onClick={this.flip2} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

                <Front G={this.props.G} ctx={this.props.ctx} />
                <Back img={"../../public/img/carbonevent/carbonEventBack.png"} />
            </div>
    </div>
        )
    }
}

class Front extends React.Component {
    render() {
        return (
            <div className="front">
                <ImageArea />
                <MainArea G={this.props.G} ctx={this.props.ctx} />
            </div>
        )
    }
}

class Back extends React.Component {
    render() {
        return (
            <div className={"back"} >
                <img src={this.props.img} alt="backcarbon"/>
            </div>
        )
    }
}

class ImageArea extends React.Component {
    render() {
        return (
            <div className="image-container">
                {/*<img className="card-image" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>*/}
                <h1 className="title">An example event card</h1>
            </div>
        )
    }

}

class MainArea extends React.Component {
    render() {
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p>{this.props.G.currentCarbon[0].event1.id[0].toString()}</p>


                </div>

            </div>
        )
    }
}
