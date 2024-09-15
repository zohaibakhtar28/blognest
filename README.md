# BlogNest 

This is a modern blog application built using Vite + React, leveraging various cutting-edge technologies for both frontend and backend. The project aims to provide a responsive, intuitive blogging platform where users can create, edit, and manage their posts. 

# Features
- Rich Text Editing: Integrated with TinyMCE for creating and formatting blog content.
- Form Handling: Using React Hook Forms for easy and performant form management.
- State Management: Redux Toolkit to efficiently manage global application state.
- Authentication & Database: Appwrite backend for handling user authentication and storing blog data.
- Styling: Tailwind CSS for styling the application with ease.
- Fast Build System: Vite ensures a fast and optimized development and build process.

# Tech Stack
-Frontend:

- React.js (JavaScript library for building UI)
- Vite (Next Generation Frontend Tooling)
- Redux Toolkit (For state management)
- TinyMCE (Rich text editor)
- React Hook Form (Form validation and handling)
- Tailwind CSS (Utility-first CSS framework)

-Backend:

- Appwrite (Self-hosted backend-as-a-service platform)
  
# Installation
- Clone the repository:
```
git clone https://github.com/your-username/blog-application.git
cd blog-application
```

- Install dependencies:
```
npm install
```


- Configure Appwrite:
```
VITE_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
VITE_APPWRITE_PROJECT_ID=<Your Project ID>
VITE_APPWRITE_DATABASE_ID=<Your Database ID>
VITE_APPWRITE_COLLECTION_ID=<Your Collection Id>
VITE_APPWRITE_BUCKET_ID=<Your Bucket ID>

```

- Ensure you have an instance of Appwrite running.

- Configure your Appwrite project, database, and authentication services.
- Set up the necessary environment variables in a `.env` file:

- Start the development server:
```
npm run dev
```


   
# Usage

- Creating Posts: Use the rich text editor provided by TinyMCE to create and edit blog posts.
- User Authentication: Appwrite is used for authentication. Users can register, log in, and manage their sessions.
- Form Handling: Forms throughout the application are powered by React Hook Form for fast and scalable form handling.

# Contributing

- Fork the repository.
- Create a new branch
```
git checkout -b feature-branch.
```
- Make your changes.
- Commit your changes
```
git commit -m 'Add some feature'
```

- Push to the branch
```
git push origin feature-branch
```
- Open a pull request.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

