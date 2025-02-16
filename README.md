
### To run: npm install and then npm start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Inspiration

GHGuessr is a single-player game with the mission of building climate awareness, especially in the realm of greenhouse gas (GHG) emissions and other air pollutants. Players gain points when they answer correctly. There is a “hint” button that provides additional facts about the country, so that players can have some more information about the country they are trying to guess. Few people realize the magnitude of the amount of emissions that are released worldwide, as well as how many types of GHGs there are. This game was designed with the idea of educating others into becoming better aware of the state of our planet.

Our idea was inspired by one of Stanford Ecopreneurship’s Sustainability Challenges, specifically Challenge #4, “Tradle, but for emissions”. Tradle is a game that educates players about the types of products that countries export, by providing some data on exported products and asking the players to guess which country the information comes from.  Our game has a similar concept, where we provide data on GHG emissions and players will guess which country the data comes from. In addition, the title of our game is inspired by the game GeoGuessr, which is a global geography game; this game has a similar aspect with the idea of guessing countries from around the world.

# Prototyping and Iterative Process

Through using Perplexity to understand the intersection between sustainability challenges and user needs, we saw that the significant knowledge gaps in understanding national greenhouse gas emissions hinder effective climate change mitigation efforts. We assume that data-driven learning, such as in the form of this game, is effective. We aim for GHGGuessr to help with the public better understand the magnitude of climate issues, and that the gamification of facts will incentivize people to engage with emissions data more.

We first used reviewed common climate-related data visualizations and tools to understand our users' needs. Afterward, we created a mock front-page using Vercel's v0. Subsequently, our team met with Jonathan Lipman, leader of Strategic Initiatives at Speed and Scale. We discussed our idea for the project, and he provided ideas on what data to utilize from the API from the data source Climate Trace [Link: https://climatetrace.org/]. From these conversations, we were able to gather ideas on how to best gamify our ideas.

We then tested the following hypotheses:

1. A minimal viable version can be quickly deployed and iterated on while still allowing core functionality to be tested. We successfully deployed Vercel's v0, allowing for early feedback and further development without waiting for a complete product.

2. API integration and emissions data retrieval will work as expected without major issues. We implemented Climate Trace API integration and attempted to retrieve emissions data for different countries. While there were issues of misformatted data, which required debugging, data transformation, and improved error handling, we were able to make the API work correctly for our needs.

3. Users enjoy games to learn more about global issues. We asked other surrounding TreeHackers in Packard to determine whether or not users preferred learning through bombardment of information and graphics versus a simple game that conveys impact. We found that 60% of our respondents (n = 10) preferred the latter.

## Technical Implementation

GHGGuessr integrates a React-based frontend with a backend that retrieves and processes climate data from ClimateTrace API. The frontend, developed using React.js, presents a quiz-style interface where users guess countries based on their greenhouse gas emissions. It dynamically fetches country-specific emissions data from the Climate Trace API, using JavaScript functions for data retrieval and state management via React hooks. OpenAI was utilized to generate text for the hint, to further inform users about the countries. The UI is styled with CSS, ensuring a responsive and engaging user experience. The game logic includes randomized question generation, answer validation, and hint retrieval, maintaining an interactive flow. The backend API calls are optimized to fetch and process emissions data efficiently, ensuring smooth and real-time gameplay. Error handling mechanisms prevent disruptions when data is unavailable, and state updates dynamically reflect the quiz progress.

## Challenges 
Our team came into TreeHacks with varying skill levels and backgrounds, but we shared a common goal: to build something impactful. One of our members learned how to use Github for time, and another person interacted with an API for the first time. Ultimately, we learned so much about full stack development in a collaborative setting, and how to integrate novel AI products into our solutions. Despite time constraints and debugging hurdles, our collaboration and adaptability helped us create GHGuessr!

## Accomplishments, Teachings, and Next Steps

One of the biggest shifts for us was moving from a broad concept of an emissions-based game to a more focused and structured approach, where we present emissions data for a randomly selected country and ask users to guess which country it belongs to. Instead of overcomplicating the game with additional layers of data visualization early on, we honed in on making the API integration and core game functionality actually work before expanding features. In the future, we may wish to use a D3 wrapper to help us create a new Tree Map for the game, which will help users visualize the data more appropriately. Through the various AI-related tools that were available to us, we learned that deployment and iteration mattered more than perfection. By quickly deploying an early version (V0) on Vercel, we were able to iterate based on real feedback rather than guessing what might work. This approach helped us fix core issues early, rather than realizing them too late in development.
