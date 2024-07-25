# tawk.to Frontend Developer Test

### What is the test?

You will be building a simple knowledge base site in Vue js. A basic structure has been set up, you will just need to build on top of it.
But if you want to move things around, feel free to do so. 

### Instructions

- Clone this repo
- Complete this task by pushing it to your repo and send the link to us
- Please incorporate the included modules into your solution. Other modules are up to you.

# Tawkto Frontend Take Home Task 

This is a Vue 2 application dockerized for easy setup and deployment.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the application up and running using Docker:

### 1. Clone the Repository

```bash
git clone https://github.com/MohamedHana/frontend-test-solution.git
cd frontend-test-solution
```

### 2. Build the Docker Image

Build the Docker image using the following command:

```bash
docker-compose build
```

### 3. Run the Docker Container

After building the image, run the container with:

```bash
docker-compose up
```

### 4. Access the Application

Open your web browser and navigate to `http://localhost:9000` to view the application.

## Development

For development purposes, you can modify the code locally and see the changes reflected immediately in the running container. The `docker-compose.yml` file is set up to mount the current directory (`.`) into the container, so any changes you make locally will be available inside the container.

## Project Structure

- `Dockerfile`: Contains the instructions to build the Docker image.
- `docker-compose.yml`: Defines the services, volumes, and environment variables for Docker Compose.
- `package.json`: Contains the project dependencies and scripts.
- `webpack.config.js`: Configuration file for Webpack.

## Scripts

Here are some useful scripts defined in `package.json`:

- `npm run start`: Starts the development server using Webpack Dev Server.
- `npm run test`: Runs the test suite using Jest.

## Troubleshooting

If you encounter any issues while setting up or running the application, consider the following steps:

1. Ensure Docker and Docker Compose are correctly installed and running.
2. Check for any error messages in the terminal and resolve any issues mentioned.
3. Refer to the [Docker documentation](https://docs.docker.com/) for more detailed information on using Docker and Docker Compose.
