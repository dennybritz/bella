# Bella API Documentation

Bella is an *API-first* system. Bella ships with a GUI that integrates its API, but there is nothing that prevents you from building your own client that consumes the bella API.

# Convenience shortcuts

- `/api/v1/p/...` instead `of /api/v1/projects/...`


### API Authentication

There is no API authentication.


### `GET /api/v1/projects`

Returns detailed information about all available projects.


### `GET /api/v1/projects/:projectId`

Returns detailed information about a specific project.


### `POST /api/v1/projects`

Creates a new project.


### `PUT /api/v1/projects/:projectId`

Updates project settings


### `DELETE /api/v1/projects/:projectId`

Deletes a project. This deletes all associated data.


### `POST /api/v1/projects/:projectId/data/import`

Import data into a projects based on an import definition.


### `POST /api/v1/projects/:projectId/data/search`

Returns a subset of project data.
