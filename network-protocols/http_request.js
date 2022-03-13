const httpRequest = {
    host: 8080,
    method: 'POST', //! GET, PUT, DELETE etc.
    path: '/payments',
    headers: {
        'content-type': 'application/json',
        'content-length': 51,
    },
    body: '{"data: This is a piece of data in JSON format."}'
}

const httpResponse = {
    statusCode: 200,
    header: {
        'access-control-allow-origin': 'https://www.google.com',
        'content-type': 'application/json',
    },
    body: '{}'
}