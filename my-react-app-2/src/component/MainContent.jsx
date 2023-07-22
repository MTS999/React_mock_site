
import image from "./images/image.png";
export default function MainContent(){
    return(
        <div className="Maincontant">
            <div className="maintext">
                <h1>Landing Page template for develeopers & startups</h1>
                <p>Beautifully designed templates using React.js. ant design and styled-components! Save weeks of time. and build your landing page in minutes.</p>
                <div className="MainButton">
                   <button type="button" className="MainButton1">Explore</button>
                   <button type="button" className="MainButton1">Learn more</button>
                </div>
            </div>
            <div >
                <img className="image"  src={image} alt="playing" />

            </div>
        </div>
    )
}