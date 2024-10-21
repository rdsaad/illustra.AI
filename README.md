# illustra.AI

Demo video: https://streamable.com/0lknk8a

illustra.AI is a full stack MERN web application that combines the power of OpenAI's DALL-E with modern web technologies to generate AI-powered images based on user prompts. Primarily written in JavaScript, with some CSS and HTML, the project offers an interactive user experience where users can create and explore AI-generated artwork.

Upon visiting illustra.AI, users are welcomed by the Community Gallery, which showcases all AI images created by users. The gallery allows users to browse, search, and download their favorite images. This community-centric feature is designed to encourage creativity and inspiration among users.

The Create Image page, accessible via the top-right 'Create' button, invites users to generate their own images by providing their name and a description of what they want illustra.AI to create. This process is powered by OpenAI's DALL-E model, which uses the input description to generate unique visuals. A Randomize button is also available for users who need inspiration, offering randomly generated prompts.

Once an image is generated, it is automatically uploaded to the Community Gallery for others to view and download. The backend of this project uses MongoDB for data storage, Node.js and Express for server-side operations, and Cloudinary for storing images. The frontend is built with React.js and styled with Tailwind CSS to create a responsive and user-friendly interface. Additionally, Vite is used for building the project locally, providing an efficient development environment.

illustra.AI showcases the seamless integration of modern full stack technologies and AI, providing users with an intuitive platform to unleash their creativity and share their creations with the community.
