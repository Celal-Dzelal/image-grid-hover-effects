# Image Grid with Hover Effects

This project demonstrates the use of CSS Grid to create a responsive image grid layout with hover effects that display additional information over the images.

## Demo

![Project Demo](./demo.gif)

## Features

- **Image Grid Layout:** A grid layout displaying multiple images with corresponding texts.
- **Hover Effects:** When the user hovers over an image, text appears with details about the image. This effect is implemented using JavaScript and DOM manipulation.
- **Responsive Design:** The layout adapts to different screen sizes using media queries.

## Technologies Used

- **HTML5**: Used for the structure and layout of the page.
- **CSS3**: Used for styling, including Grid Layout, hover effects, and responsive design.
- **JavaScript (DOM Manipulation)**: Handles the hover effect, toggling the visibility of text on hover over the images.

## How It Works

- The page contains a container with a grid layout of 12 columns and 12 rows.
- Each "content" div represents an image or text block.
- The images are loaded into specific grid positions, and when hovered, text will appear over the images.
- The hover effect is managed using JavaScript by adding event listeners to the images. When the user hovers over an image, the corresponding text becomes visible, and it is hidden when the hover ends.

### How to Use

1. Clone or download the repository.
2. Ensure you have all necessary images in the `./img/` directory.
3. Open `index.html` in your browser to view the grid of images.
4. Hover over any image to see additional text information.

### License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
