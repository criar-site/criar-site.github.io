FROM ruby:latest

# Fuso horário
ENV TZ=America/Recife
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Localidades
RUN apt-get update && apt-get install -y locales locales-all
RUN locale-gen pt_BR.UTF-8
ENV LC_ALL=pt_BR.UTF-8 LANG=pt_BR.UTF-8 LANGUAGE=pt_BR.UTF-8

WORKDIR /app
COPY . /app
RUN cp ./run_locally/default_config.yml ./_config.yml

RUN gem install jekyll bundler

RUN bundle install

# This port is defined on yml config file
EXPOSE 4000

# Start server using yml config file
CMD ["/bin/bash", "-c", "bundle exec jekyll serve"]