# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the static files into the container
COPY . /usr/share/nginx/html/
