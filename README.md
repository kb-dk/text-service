# Text Service

Text Service is a Ruby on Rails application that provides a searchable, faceted text discovery interface backed by Apache Solr and Blacklight. It is designed to expose Danish text metadata and full-text search across a curated collection, with additional support for snippets, facsimile views, OAI harvesting, and user bookmarks.

## Key Features

- Full-text search for text documents using Blacklight and Solr
- Faceted navigation by year, author, location, text category, genre, and more
- Document detail pages with rich metadata and citation support
- User authentication and session management via Devise (including CAS integration)
- Search history and bookmark management
- Snippet rendering through an external text retrieval service
- Facsimile / image view support for document scans
- OAI endpoint support for metadata harvesting

## Main Application Flow

- The root path is `GET /`, which maps to the catalog search interface
- Search results are exposed under `/text`
- Individual document pages are available through Solr-backed `solr_documents`
- Snippet rendering is accessible from `/comment/:id`
- Additional pages include periods, authors, and OAI metadata export

## Important Components

- `app/controllers/catalog_controller.rb` - main search/catalog controller powered by Blacklight
- `app/controllers/search_history_controller.rb` - search history support
- `app/controllers/snippet_controller.rb` - renders snippets from the external snippet server
- `app/models/file_server.rb` - proxies requests to the external text snippet and facsimile service
- `config/text_service.yml` - environment-specific external service configuration
- `Gemfile` - application dependencies, including Rails, Blacklight, Solr client libraries, Devise, and Bootstrap

## Dependencies

- Ruby 2.7.8 compatible
- Rails 5.2.8
- SQLite3 for local development database
- Apache Solr for search index backend
- External snippet/facsimile server configured in `config/text_service.yml`
- wkhtmltopdf for PDF generation via `wicked_pdf`

## Running Locally

Prequisite: When running this on newer machines (like anything Ubuntu >24.04), run:

```bash
export CFLAGS="-std=gnu11 -Wno-error=incompatible-pointer-types"export RUBY_CONFIGURE_OPTS="--disable-jit-support"
```

before installing ruby / rbenv.

1. Install Ruby and the required gems:

```bash
bundle install
```

2. Create and migrate the database:

```bash
rails db:create db:migrate
```

3. Start Solr separately if required by your local setup.

4. Start the Rails server:

```bash
rails server
```

5. Open the application in your browser at `http://localhost:3000`

## Configuration

The external text retrieval and snippet service settings are stored in `config/text_service.yml`. The default values are:

- `snippet_server_path` - base URL for the external snippet service
- `snippet_script` - rendering script for snippet content
- `openSeadragon_script` - OpenSeadragon viewer script path
- `adl_hostport` - host/port used when generating snippet URLs
- `image_server_prefix` - base URL for image access in facsimile views
- `feedback_mail` - feedback email address
- `external_prefix` - external site prefix

## Testing

Run the Rails test suite with:

```bash
rails test
```

## Notes

- The application uses the Blacklight library to build the search UI and Solr integration.
- User login is handled with Devise and Devise CAS authenticatable.
- The search interface is primarily configured in `app/controllers/catalog_controller.rb`.

## License

Update this section with your project license and legal terms.
