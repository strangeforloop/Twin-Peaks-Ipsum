const getResults = async function() {
  const id = 1;
  const response = await fetch('http://localhost:5000/api/quotes/', {
    method: 'GET'
  });
  console.log(response);
  const data = await response.json();
}

const getResults = async function () {
  const id = 1;
  const response = await fetch('http://localhost:5000/api/quotes/', {
    method: 'GET'
  });
  console.log(response);
  const data = await response.json();
}

getResults();

getResults();