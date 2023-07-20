import Form from "./form";
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
        <div className="Display">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABJlBMVEX///8oYqz+yzozUJ7Vl0D/zTr/0DDTlz7UlkBuf5QqTqDTlEAeX67Sk0AwTp0AWbIoY6wpSZv/zjQhRJkVPpcsXKcxU6DdmjbamToiRZkAU6bY3OoZQJcAWLIqX6rmrT4ZXq+apcn19vrP1OVKYqf1wDvbnz/n6fLduVYHXrLttj33yD7yvDzkqz7HzeHrsz1idbBAWqO1vdehq81DcrR2hrkzZ6jRs16qnXhYdZ1ncpKcg3PAkFSYlIJUbZtTbJyIfIDhu1JxaIVgYY2HlcFwkMJbgrtIdraBncmluNd9ho/swUq0o3M9aqWhmH1me5jBqWqliW2TgHm3jVxvdI6uiWSHi4l8eIqLfX7Jk0tdeJtYbayTkYW/pWjMsGK9j1dJV5aXeXDATygOAAAMqElEQVR4nO2deVvaShvGBRJMSQhCKJs0RlQwdceKPdYuWrpYa1trrXroOe35/l/inQlbMjPJTGIG8L3m/qOrSn4860yeCXNzQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQjOm1nZ7+eO79x+edRY6zz68f/dxv73SmvZFxaTW9vJuqVg0MppmjqRpmlWr1Trv9rcb077Ae6nR7pbqRj6vpx4nSAKotdrCx4dK2dpfLRoADqhE5BtiAnN+OHtwLtva3ytWHTrAZwYB9imt2rOzh2TJ7d0RXsrHQXFptfcr075wRu2n6iM8Zj7HkrWFs2lfPF2N5box5gsMQKK3WrPOuFwfu6dfBg2WNtOMZ9UxHzTgQgTCRMJKtKcN4qOVPZd/hotARLVni9OGIahxUHTzhY1Ar8zax2nzYNqu51PxGLAvTZux0uE1YIpe4+maKTMu6h4DElOMqdl2ztJgsszlbIsB0VqYmVZu32tAUghauc6n54fnG4V0upA8P/z888KhDZZZm5GkelB38xFCUMt1vpwAtIIsJ4FkWQag588vclTGmfDUxmo1GFDLfT1MFxw2twDl+icqo/V+2nxzLW8IYjnGzP21DhyTKDl9/ugJBVHrTHnJsVjXAwG1xLc0Zj4342GHknRMbar5ZsUbgrqJJFH764aP/YYqyJ9yFERriogr3iSKAeZeBhlwaMbPueDyadam1sMhgCnMgpdpGh9U+tCmdAjTQqTFoH3Nwgc99cSiWHE6jtryxiBWJuzLJaqLDhHX7WAjmtoUMmpD14MBv1eSrITJ9L+UqmF2Jk+46q2DaKum/SgzmxAifqFYUZt46T+oBgKanYrKzgcR/6K0N9aEG7h9JAjR67GvKlshTAiKxjmlLCYm24YvFpEsg9QJ4KPZtVA2pPtpojbJhIpkGWy9ZGWl+VAmBCosUKriJLPNgTfLYD6q3ZTVMHmmT/iZZkRtYqG4jfgo9t5bd5Ia0kkhIn25OKG9m4a3l9ExH9WOypIa1oQgEl/S9jbMxGQIaT6asK4rSjM8oXxCS6cTKhkraB7FL6QiqeFqxcCIr+l+OokefE+nmBA6qbIThZDqpgnzA3/AM4NmQutFRVKeRiAsHNKyKTDiNm/ARpVSCkE/cyxJ6mZ4wKS8QSc0F3gTLldpJkxolYiEyXSHvlnO++YbUikIUZhIXJQB4dNIhF+pqQa8gXwJMRPi+/faK0AYKdMk0z8Zdvv5GhE1oU56j39ALw3dtEEV6MkUyORJuO9NpHg7AwlvAKESpR4mC89ZCLkuo1JIFJISQ58wQk/DSph4xg9wG1n3kvJM30ulbATAZOELEyHHxmYXMSHxTq92BAkjlQu2OExo73gBtpCO1OdWL8ylERvTnwzVAhqRF+E+UiqITgo3oSSoKIR/sxFavHIN0nPrPuMI9rwU0U3TtI2M4ZvIaWsRc1I/wiuIGCGb0vfbhqrx2QJH+xlSuYfSvjtuGnazDSSab/TOuy9ObrqKZFK/oSCnbYtiRKamzREfN20gTuoXhuAddgIxvBFZlhYDccmmbWTp6z/3BJfA0Ight0zlddYw5LTrhm5A+Q8+aa8dN5WUcO13+hNbrXBeYpkDYQkJQ79Ek+iv8h0/3QyBKG+wm5DLfg16QzRo+hDuRTlSN0KYkK1lG4hDvdhGwpC4chrKPu4nG0UKYcIwgDy672U0DAnL+5GGkQiyDbMJP4Ui5LDS38UIgy7A7qdTx4pMsVg4pE1HIe9h/LvfaKKhzJBqd9IAUVljQJSTnVCAPFIN2pTSCC8GfgoyKsOuVPpRKB8FsuIGxNpu8tLJdQU/Rohqc4PCmP4SolL0FXsyRVNpUDnsy34zQlTUJTmIMf05NGD8ybSNrn5pNvQggmjc8c846c/hsowjK+4bGFixoBMm7JsxImBcWiMZEvxbeBdNcCgX3QiECeuVVBkzqmpzB0DKbjp5bad8xLoq9Ejbj5kQ67tZCBPawpXLjMCOWam5szlYVa1t7mxJleML9n7b86PjLojoRiIbYcK0b+ZdZnQoVTWrgF+zqqpWKm/CVokRYdxbiugCn5EQzkF/r3gZR6pUXixEBUyYcROi97aZCeHJkNu7cmUexSsr32kz3oGEcW9kYITUeuiSZr96cVcuV/rGBL9VyneXRxZlbnbahOw2dBgtu3N0e3l1fHd3fHX5/ceFTT8yQyGMuzHFCVkMoLll2XbOkQ3wPIpEyN+GVEIrZ756xKCvr7Vc+ICMnRDPpZQjhrb2a11Os0le/8l0ms1DGHcuxeth0Bof5JYvBfpZi3Fzk5ZfhmzdYq+HWE8TuE9jXZwzHbVwM550QsVj7D0N3pcGEFp/42fVqCok6WNtbsK4+1J8beFfELVXEQDhTkaYFjX2mzP4+tA3mZoJ2pLeD/E8xCoj9vUhtsb3T6ZPDinn1XxV+BbizkXca3x8n8b3FvCvkEnGpRCbpvXYN70xQp9Uo11EBwRLYtZNRTMfNyChqSGnmicnUX0UinljuNSLnRBf5BMD8T4+CsXop2a+GzshNmpCrvmdaGl0JHmDqWKUjPjv5BOSKWEBZf9zHx+Foh8sgSZM1eO/94TexidXxIvwB0lQpS8YTJgyYgckpRo8EO2r+xMW/qUWRTOlx59oSJ0p5qbaUfn+hPSjiMCEeR738UmBiLipfSzFQFg4DDbiwuNUqs5jFoMQiEg2BSaMNqOPiGZE8Mp1DoBzcz08EL1uav+ejzajj4gSicCE+QMuhHhF9C704bRXtBl9VOmgZZQJXpZDNYTCm2+vEe3riCe6MAXWxBJ0Uk7H8/HdKHfBMDvlqBPsmGR/Gz6G8b/LB5DopuNco93CHW0lDsBk+pdvd5ri56TktmZsRPsu0kAiUfKJ3xID+miqyAmQMFPjisThVGksqcb3sCX00RSHdcVQ2HkLVzq1Lvsjl/EEYuE5MdeYzisWOR4kJfSmQyNqymB6JsSwnr/II98Ljo9y6UmHwqZoR5E4HkeMdKYLE7GvcQBTda7HSA2SEWF3ar0Y3eiNA5B4BMoJQtAq8gQkFgynYtjDOTZJjXIEGBPh6Ho/CPmVioGIRnzcPzgaqxHx0yX919JTfAHJRkyZ2pvxNELI8W4/QnTquzQZE87NZUiEJevaPRoURzot/OOtF4PpT32PN+Bcm1QT9VrWPTITR01E6sXAgqki9/P45P5b/+MefYqnYnieVzMEzPPqud1Cny8ElTn1DgWFOobgI/fR9SFgqjiR5wwRtqQyt8jYk3L/UHStL0aAVR4bUAThhPkXKOH9S8b4UPAIkHOxHwt9xhAgvERH1+6POGq+R4BcW26vumhRxAklZT7ineAxoYUAGhPyUSh0jZH/Dx8/ZDuG4K/+KSHT9SKrkwOcayHP9czckAYss/foUOXk1pE2bLYHJpzo0yHb3lDMvC0TCKXsFvvDIRG+JbV84fbQydR6t7relWIGHR/tS5WiFEY5uaMoUtYy3a9Qn2AQ9tXz1Izqtc8ccLYZNhpleQe8M1LlsuZ5AT673IHyZJvMKdFNYcLJboVhlDeWFGc/pPzW3eNPNMsM5X1iVDXrQwgZm5uBR2Zc7rnZzKr977pzh4FemspTvVvu1XDmxs+IkFGVyMdJPM6Z3NxS1MF+llQ+dZlQz0zpseWeRyVXj/0JYc7Jzi9tJmUiJvzXtZ2mOsIDUXjlMqFendoTvd2I+h+fXDM2pKo2t56uQSC3kmtPtyCd4v7ieddxxykCAkSXo/onGzclPEnSbG5tLUFtNZvz4O+KqiBf504zemaqj51v5ceI1aBQ9HDCczOOFAVl6wOejktRfjpJZqzG3vhiqqd+p2NCqTL/1vUzV6f/cWy9cU7I/PnNaMYAla/2xi5an0Khx9Udt+G6cXpcvochK5Xy77eu2C5OvFUjq+1KqRnjz+3VnTIfRcrd9e0fw5VjjAk32/5q7bmWxHqmWs34qFSygOD5GcuqlUrof4NvdFVYYwZCcKxukbTbj0n3KvBLZ8VDh1rRidv9kVUtzd5HrzGakUn5WTNgX4s99OGmEaUXd2fm07oQtUuke8Rh+Yy9mUmhBO3n78moG6kZ+SgyX+1niDdRGfnqpVnng2qvFklzN3Tli71Z9k+3Vg6KoQ2pG8Xu7BUIfzXavWKVHTJv1Hcfgnt61WrvDj+XO9B2er5eP2jPUoMWRivLq0YdYJI5AVy1bvSWZ+wTR8OqsXjW7VWLdcPIAzntKPyDYdSL1V63/ZBCL1CNxe32cvfgYLfX6+0eHHSX29uLD9UxhYSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISE/o/1Px7MfHa12l5EAAAAAElFTkSuQmCC"></img>
            <div className="para">
                <p>Name:{name}</p>
                <p>Location:{loc}</p>

                <p>Rating:{Rating} </p>
                <p>Review:{Review}</p>
            </div>

            {getStars()}<br />
            <button id="btn" onClick={(e) => (e.target.closest("div")).remove()}>Delete</button>

        </div>
    )
}
export default Display;