const url = "https://randomuser.me/api/?results=10";

let data_resp = async(url) => {
  let response = await fetch(url);
  let res = await response.json();
  console.log(res);
}

data_resp(url)