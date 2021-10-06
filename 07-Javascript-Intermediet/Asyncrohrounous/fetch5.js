async function getData() {
  try {
    let response = await fetch('https://api-to-call.com/endpoint', 'POST', JSON.stringify({id: 200}), 'json');
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}