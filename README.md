# [Sherlocks-eye](../../)
This anonymous networking web-based platform built in the MERN stack is to share observations, reports, and leads related to suspicious activity or individuals...
Sherlock Holmes after recognizing the limitations of conventional investigative methods devises a daring plan. He turned to us and said                                   
> _We require a platform, a digital haven shrouded in anonymity, where the whispers of streets can be collected and analyzed._

## [Features](../../)

There are various features in our project. Some of them are completed and we are looking forward to implementing it. These are:-   


- **Anonymous Accounts**- Users register and participate without revealing their personal information. User profiles can be made for different users. Guest mode is also available for random users to try this site.
- **Information Sharing**- Users can share observations, reports, and leads related to suspicious activity or individuals.
- **Simple Interface**-User-friendly design accessible to individuals with varying technological experience.
- **Anonymous Chat**-Facilitate anonymous and secure user chat interactions to discuss observations and collaborate on leads.
- **Comments**-Comments and Threading feature implemented for posting comments to posts.


## [Unique Features](../../)

  - **Upvote And DownVote**-Incorporated a feature to upvote or downvote a post for users to access for better credibility, filtering valuable leads from rumors.
  - **Multiple Nested Comments**-Comments and Threading feature implemented for multiple nested comments to posts.
  - **Impressive User Interface**-The user experience of sharing information with this site is unique and mesmerizing.

## Images
   Some images from the site are:-
   ![Screenshot 2024-07-15 185215](https://github.com/user-attachments/assets/8603c24d-4ab0-4c7e-aebf-5b5f4ee62c4b)
   ![Screenshot 2024-07-15 184440](https://github.com/user-attachments/assets/a8d5d24b-3031-4b25-9f83-0c930073cec9)
   ![Screenshot 2024-07-15 185647](https://github.com/user-attachments/assets/3c865586-3427-414a-8fca-61e90ae57b84)

## Tech Stack

- **FRONTENED**-React Js, Tailwind.
- **BACKENED**-Node Js, Express Js.
- **DATABASE**-MongoDB.

## Future Additions

- **Sentiment Analysis**-Analyze the tone and sentiment of anonymous reports to gauge potential urgency or hidden biases.
- **Post Sharing**-Allows users to anonymously share images and videos (multimedia content) relevant to the investigation.
- **Offline Messaging**-Allow users to send and receive messages even when offline, with delivery occurring upon re-establishing an internet connection.


## Installation:-

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 14 or higher)
- npm (Node package manager, comes with Node.js)
- git (for cloning the repository)
- MongoDB (either installed locally or a cloud MongoDB service like MongoDB Atlas)

## project structure
```terminal
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

### Steps

1) **Clone the repository**

    Clone the project repository to your local machine using git:

     ```sh
     git clone https://github.com/TEJASW144/Sherlocks-eye.git
     ```

2) **Navigate to the project directory:-**

    ```sh
    cd Sherlocks-Eye
    ```
3) **Navigate to the server directory and install the dependencies:**

     ```sh
      cd server
      npm install
     ```
4) **Navigate to the client directory and install the dependencies:**

      ``` sh
       cd ../client
       npm install
      ```
5)  **Set up environment variables**

    Create a .env file in the server directory and add the required environment variables.
    For example:
     Copy Code
    ```sh
    
      MONGODB_URI=mongodb://localhost:27017/your_db_name
      JWT_SECRET=your_jwt_secret
    ```
      If using MongoDB Atlas, the MONGODB_URI might look something like this:

      ```sh
        MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_db_name?retryWrites=true&w=majority
       ```

6) **Start the backend server:-**

      ```sh
        cd ../server
        npm start
      ```
      The server should be running at http://localhost:5000.


7) **Start the frontend development server:-**

     ``` sh

      cd ../client
      npm start
     ```
   The React app should be running at http://localhost:3000.

## Contributors:-
- **Aditya Gupta**
- **Tejasw Agarwal**
- **Vaibhav Chaudhary**
- **Arpit Gami**

