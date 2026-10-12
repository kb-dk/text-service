FROM ruby:2.7.8-slim-buster AS builder

ENV LANG=C.UTF-8 \
    RAILS_ENV=production \
    RACK_ENV=production \
    BUNDLE_PATH=/bundle \
    BUNDLE_WITHOUT="development:test" \
    BUNDLE_JOBS=4

RUN printf '%s\n' \
      'Acquire::Check-Valid-Until "false";' \
      'Acquire::Retries "3";' > /etc/apt/apt.conf.d/99no-check-valid-until \
    && printf '%s\n' \
       'deb http://archive.debian.org/debian buster main contrib non-free' \
       'deb http://archive.debian.org/debian buster-updates main contrib non-free' \
       'deb http://archive.debian.org/debian-security buster/updates main contrib non-free' \
       > /etc/apt/sources.list \
    && apt-get update -qq \
    && apt-get install -y --no-install-recommends \
       build-essential \
       g++ \
       libsqlite3-dev \
       sqlite3 \
       nodejs \
       npm \
       git \
       libxml2-dev \
       libxslt1-dev \
       libcurl4-openssl-dev \
       libssl-dev \
       tzdata \
    && npm install -g yarn \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile* ./

RUN gem install bundler -v 2.3.27 \
    && bundle _2.3.27_ install --jobs 4 --retry 3

COPY . .

ARG SECRET_KEY_BASE=docker_secret_key_base_change_me
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}

RUN bundle _2.3.27_ exec rake assets:precompile

FROM ruby:2.7.8-slim-buster AS runtime

ENV LANG=C.UTF-8 \
    RAILS_ENV=production \
    RACK_ENV=production \
    BUNDLE_PATH=/bundle \
    BUNDLE_WITHOUT="development:test"

RUN printf '%s\n' \
      'Acquire::Check-Valid-Until "false";' \
      'Acquire::Retries "3";' > /etc/apt/apt.conf.d/99no-check-valid-until \
    && printf '%s\n' \
       'deb http://archive.debian.org/debian buster main contrib non-free' \
       'deb http://archive.debian.org/debian buster-updates main contrib non-free' \
       'deb http://archive.debian.org/debian-security buster/updates main contrib non-free' \
       > /etc/apt/sources.list \
    && apt-get update -qq \
    && apt-get install -y --no-install-recommends \
       sqlite3 \
       libsqlite3-0 \
       tzdata \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /bundle /bundle
COPY --from=builder /app /app

ENV PATH="/bundle/bin:$PATH"
ENV RAILS_SERVE_STATIC_FILES=true
ENV SECRET_KEY_BASE=docker_secret_key_base_change_me
ENV RAILS_LOG_TO_STDOUT=true

EXPOSE 3000

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
