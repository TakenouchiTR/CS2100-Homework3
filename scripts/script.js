const div_squareArea = document.querySelector("#squareArea")
const btn_add = document.querySelector("#add")
const btn_colors = document.querySelector("#colors")

const AREA_WIDTH = 700
const AREA_HEIGHT = 300
const SQUARE_SIZE = 50

const MIN_STARTING_SQUARES = 30
const MAX_STARTING_SQUARES = 50

const COLOR_DIGIT_LENGTH = 6

/**
 * Creates a square div with a random color.
 * Precondition: None
 * Postcondition: None
 * @returns Div with width === 50 && height === 50 && a randomly generated color
 */
function createSquare() {
    let square = document.createElement("div")
    square.className = "square"

    square.style.left = randomRange(AREA_WIDTH - SQUARE_SIZE) + "px"
    square.style.top = randomRange(AREA_HEIGHT - SQUARE_SIZE) + "px"

    square.style.backgroundColor = getRandomColor()

    return square
}

/**
 * Adds a random number of squares to the page.
 * Precondition: None
 * Postcondition: div_squareArea.children.length >= MIN_STARTING_SQUARES && 
 *                div_squareArea.children.length <= MAX_STARTING_SQUARES
 */
function addSquaresToPage() {
    let squareCount = randomRange(MAX_STARTING_SQUARES + 1, MIN_STARTING_SQUARES)

    for (let i = 0; i < squareCount; ++i) {
        let square = createSquare()
        div_squareArea.append(square)
    }
}

/**
 * Creates a randomly generated hex RGB value.
 * Precondition: None
 * Postcondition: None
 * @returns String representation of a six digit hex value
 */
function getRandomColor() {
    const HEX_CHARS = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < COLOR_DIGIT_LENGTH; ++i) {
        color += HEX_CHARS.charAt(randomRange(HEX_CHARS.length))
    }

    return color
}

/**
 * Adds a single square to the page.
 * Precondition: None
 * Postcondition: div_squareArea.children.length === div_squareArea.children.length@prev
 */
function addSingleSquare() {
    let square = createSquare()
    div_squareArea.append(square)
}

/**
 * Sets the background color of each square to a random value.
 * Precondition: None
 * Postcondition: Each square's style.backgroundColor is assigned a new value
 */
function changeColors() {
    for (let square of div_squareArea.children) {
        square.style.backgroundColor = getRandomColor()
    }
}

/**
 * Generates a random integer between the minimum (inclusive) and maximum (exclusive) values.
 * @param {Number} maximum the minimum value, inclusive
 * @param {Number} minimum the maximum value, exclusive
 * @returns A random integer between minimum (inclusive) and maximum (exclusive)
 */
function randomRange(maximum, minimum = 0) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum)
}

window.addEventListener("load", addSquaresToPage)
btn_add.addEventListener("click", addSingleSquare)
btn_colors.addEventListener("click", changeColors)