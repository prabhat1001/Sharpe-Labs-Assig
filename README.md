# Sharpe Labs Assignment Project

## Overview

This is a React web application, featuring seamless navigation with React Router, form input validation, error handling, and data visualization. Leveraging popular template libraries like Materialize and Tailwind, the project incorporates a clean and user-friendly design for enhanced user experience.

![Home-eth](https://github.com/prabhat1001/Sharpe-Labs-Assig/assets/71027441/a83ca7f3-ea0b-4c34-ae4c-38b0383a6bc1)

## Live Link


## Pages

### Home Page

The Home Page offers a creative and welcoming introduction to the application. Users can explore and navigate to other sections seamlessly using the provided navigation.

### Transaction Page

On the Transaction Page, users can input transaction details through a form. The form includes validation checks for the wallet address and amount.

### Data Page

The Data Page fetches data from the open-source API 'https://jsonplaceholder.typicode.com/posts'. The application filters posts to include only those with a user ID of 1. The filtered data is then visualized in a table format, where each row represents a post and each column displays different attributes such as ID, title, and body.

Additionally, a pie chart is included to represent the number of posts written by user ID 1 out of the total posts. Data visualization is achieved using Recharts for an engaging and informative presentation.

## Technologies Used

- **React JS:** The core framework for building the web application.
- **React Router:** Enables seamless navigation between different pages.
- **Axios/Fetch API:** Facilitates data retrieval from the open-source API.
- **Recharts:** Empowers data visualization through dynamic charts and graphs.
- **CSS:** Applied for custom styling, ensuring a visually appealing user interface.

## Project Structure

The project follows a modular structure, with components dedicated to each page (Home, Transaction, Data). 

## Setup and Usage

1. Clone the repository to your local machine:

   ```bash
    git clone https://github.com/prabhat1001/Sharpe-Labs-Assig.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Sharpe-Labs-Assig
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to explore the Project.


Feel free to customize and extend the application based on your specific requirements and preferences. Happy coding!
