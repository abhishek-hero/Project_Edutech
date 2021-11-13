import './stylesheet/image.css'

export const Image = ({ image, text, text1, text2 }) => {
    return (
        <div className="carousel-img">
            <img src={image} alt="" />
            <p>{text}</p>
            <p>{text1}<br /> {text2}</p>
        </div>
    )
}