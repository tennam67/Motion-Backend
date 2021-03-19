FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
        wget \
        bzip2 \
        graphviz \
        curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt update && apt install yarn

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/backend_app/bin:$PATH

RUN echo "source activate backend_app" >~/.bashrc

RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./backend /backend

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
COPY ./frontend /frontend_tmp
WORKDIR frontend_tmp
RUN yarn install
RUN yarn build

WORKDIR /backend

#RUN python manage.py makemigrations
#RUN python manage.py migrate
#CMD ["python", "./manage.py", "runserver", "0.0.0.0:8000"]
#EXPOSE 8000
