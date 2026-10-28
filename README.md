# WanderLust

A full-stack travel listing platform where users can discover, create, manage, and review travel listings.

## 🚀 Features

### Listing Management
- Create, view, edit, and delete travel listings
- Listing ownership and authorization
- Server-side schema validation
- Client-side form validation
- Image upload and storage
- Display uploaded listing images
- Geocoding for listing locations
- Interactive maps with listing markers and popups

### User Authentication & Authorization
- User registration and login
- Secure password hashing and salting
- Session-based authentication
- Login and logout functionality
- Authorization for listing and review operations
- Protected routes based on user ownership

### Reviews & Ratings
- Create reviews for listings
- Delete reviews
- Review validation
- Ratings and review display
- Authorization for review operations

### Error Handling & Validation
- Custom error handling
- Centralized Express error handling
- Asynchronous error handling with `wrapAsync`
- Custom `ExpressError` class
- Schema validation using Joi
- Client-side form validation
- Success and failure flash messages

### UI & Application Structure
- Responsive and styled user interface
- Reusable EJS layouts and partials
- Navbar and footer
- MVC (Model-View-Controller) architecture
- Modular Express routing

### Image Management
- Image uploads using Multer
- Image preview while editing listings
- Cloudinary integration for image storage
- Image URLs stored in MongoDB
- Uploaded images displayed in listings

### Maps & Location
- Interactive maps using Leaflet
- Geocoding of listing locations
- Storing geographic coordinates
- Map markers for listings
- Informative map popups

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- EJS
- EJS-Mate

### Backend
- Node.js
- Express.js
- Passport.js
- Passport Local
- Express Session

### Database
- MongoDB
- Mongoose

### Libraries & Services
- Cloudinary
- Multer
- Multer Storage Cloudinary
- Leaflet
- Joi
- Cookie Parser
- Connect Flash
- Method Override
- Dotenv

## 🏗️ Architecture

WanderLust follows the MVC (Model-View-Controller) architecture to keep the application modular and maintainable.

- **Models** — Manage application data and MongoDB schemas
- **Views** — Render the user interface using EJS
- **Controllers** — Handle application logic and requests
- **Routes** — Define application endpoints
- **Middleware** — Handle authentication, authorization, validation, and errors

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/i-am-umang/WanderLust.git
```

### 2. Navigate to the project

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> **Important:** Never commit your `.env` file or expose your API credentials publicly.

### 5. Start the application

```bash
node app.js
```

The application will start on the configured local port.

## 📸 Screenshots

Screenshots will be added as the project progresses.

## 🔮 Future Improvements

- Additional search and filtering functionality
- Further UI and performance improvements

## 👨‍💻 Author

**Umang Agarwal**

GitHub: [i-am-umang](https://github.com/i-am-umang)
Hosted live link : https://wanderlust-t8ia.onrender.com
