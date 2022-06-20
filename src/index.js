import "./styles/style.scss"
import header__logo from "../images/logo.svg"

//function to get id and image and add image to the img tag of that id
const addImageToImg = (id, image) => {
    const element = document.getElementById(id)
    element.src = image
}

addImageToImg("header__logo", header__logo) // The logo in the header