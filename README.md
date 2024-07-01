
# Team Work Hub  - Client Side

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Socket.IO Real-Time Collaboration](#socketio-real-time-collaboration)
- [Testing](#testing)

## Introduction

This is the client-side of the Project Management and Collaboration Tool. It is built using **React.js** and **Next.js** and provides a modern, responsive user interface for managing projects, collaborating on documents in real-time, and engaging in discussions and feedback.

## Features

1. **Document Collaboration**
   - CRUD operations for documents within projects.
   - Real-time document editing with a rich text editor ( quill ) using Socket.IO.

2. **Feedback and Discussion**
   - Add and view feedback on documents.
   - Integrated real-time chat and discussion forum for team communication.

3. **User Interface and Experience**
   - Modern and responsive design.
   - Enhanced user experience for usability and aesthetics.

## Technologies Used

- **Frontend Framework**: React.js
- **Real-Time Communication**: Socket.IO
- **Styling**: TalwindCSS
- **Rich Text Editing**: Custom rich text editor integration ( Quill )

## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v20 or higher)
- **npm** (v6 or higher) or **yarn** (v1.22 or higher)

### Steps

1. Clone the repository:

 ```
   git clone https://github.com/MdSakibAhmed/team-work-hub-client.git
   cd team-work-hub-client
 ```
2. Install dependencies:

```
npm install
```

3. Create a .env.local file in the root of the frontend directory with the following content:
4. Start the development server:
```
npm run dev
```

### Socket.IO Real-Time Collaboration

Socket.IO enables real-time features like document collaboration and live chat. Here's how it's implemented on the client-side:

1. Socket Setup: Initialize the Socket.IO client and handle connections.
2. Joining Rooms: Join specific rooms for different documents to receive and broadcast updates only to relevant users.
3. Handling Events: Manage incoming and outgoing events for real-time updates.

### Testing
Testing is essential to ensure the stability and performance of the application. You can implement tests using:

- **vitest**: For unit and integration testing
- **React Testing Library:** For testing React components and their interactions.

To test run :
```
npm run test
```
