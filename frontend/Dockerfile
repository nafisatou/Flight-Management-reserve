# Stage 1: Use NGINX to serve the build
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy React build files to nginx html folder
COPY build/ /usr/share/nginx/html/

# Expose port (optional for local)
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
