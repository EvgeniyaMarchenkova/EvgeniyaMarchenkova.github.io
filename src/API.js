let promise = fetch('http://localhost:4000/events')
    .then(function(response) {
        return response.json();
    })
    .then(function (response) {
        consol.log(response)
    })
