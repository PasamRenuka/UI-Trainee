import './App.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Display = ({ props }) => {
    console.log('data--', props)
    const name = props.Name;
    const loc = props.Location;
    const Rating = props.Rating;
    const Review = props.Review;
    const getStars = () => {
        const starIcons = [];
        const roundedRating = Math.round(Rating * 2) / 2;
        for (let i = 1; i <= 5; i++) {
            if (roundedRating >= i) {
                starIcons.push(<FaStar key={i} color='yellow' size="50px" />);
            } else if (roundedRating >= i - 0.5) {
                starIcons.push(<FaStarHalfAlt key={i} color='yellow' size="50px" />);
            } else {
                starIcons.push(<FaRegStar key={i} color='black' size="50px" />);
            }
        }
        return starIcons
    };

    return (
        <section className="Display">
            <div className="img1">
                <img src="https://assets.materialup.com/uploads/d7b3d0b4-f6a7-44b6-be7e-988fba7069a6/preview.png" alt=''/>
            </div>
            <div className="para">
                <p>Name:{name}</p>
                <p>Location:{loc}</p>
                <p>Rating:{Rating} </p>
                <div style={{ display: "flex" }}>
                    <p>Review:</p>
                    <span>{Review}</span>
                </div>
                {getStars()}<br />
                <button id="btn" onClick={(e) => (e.target.closest("section")).remove()}>Delete</button>
            </div>
        </section>
    )
}
export default Display;