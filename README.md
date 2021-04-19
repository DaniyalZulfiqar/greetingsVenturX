# Greetings API Documentation

The Greetings API greets the client with the name parameter when communicated it.

## Get the name to be greeted in this service.

**Request Format:** /greetings/:name

**Request Type:** GET

**Returned Data Format**: text

**Description:** Return a greeting text

**Example Request:** /greetings/VenturX

**Example Response:**

```
"Hello, VenturX!"

```

**Error Handling:**

- Possible 400 (invalid request) error (all plain text):
  - If passed in an empty name, returns an error with the message: `Missing required params`
- Possible 500 (internal server error) error (all plain text):
  - if sth wents wrong while processing at the server end.
