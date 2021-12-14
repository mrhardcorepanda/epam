FROM node:16
WORKDIR /app
COPY . .
RUN npm install react-scripts
RUN chmod 777 start.sh
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
RUN apt update
RUN apt install jq -y
CMD ./start.sh

