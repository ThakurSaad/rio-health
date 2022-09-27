# Coding Test for Node.Js / Full-stack Developer

[Live Server](https://rio-health-stkl.vercel.app/)

- The web server is be created using only the native `HTTP module`.

- Accept requests for the `GET /projects/:id` endpoint, where `id` is the value passed in the `URL`. If the `id` value is not set or is empty in the `URL`, the server responds back with the `status` code `400` and the JSON message `{"message" : "BAD REQUEST"}`.

```
Live API

https://rio-health-stkl.vercel.app/projects/
```

- If the `id` is valid, filter the projects list based on the `id` passed as input to the endpoint such that project `id` matched the input passed. The server sends a JSON response back with the filtered project data, along with the `status` code `200`.

```
Live API

https://rio-health-stkl.vercel.app/projects/[1-5]
```

- If the `id` is valid but no matching projects are found for the `id`, the server responds with the `status` code `404`.

```
Live API

https://rio-health-stkl.vercel.app/projects/[6~...]
```

- If the request to the web server contains a route other than `/projects`, the server responds back with the `status` code `404`.

```
Live API

https://rio-health-stkl.vercel.app/[anything]
```

- The server is listening for requests on `port 8000`. External tools will not be able to be connected to any `port` other than `8000`.
