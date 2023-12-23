const button = document.querySelector('#but');
const result = document.getElementById('result');

button.addEventListener('click', getjock)
async function getjock(){
    let  response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1',{
        headers: { 'X-Api-Key': 'bhQ17JD/Quj2J3+yKXvFFQ==cr35oHjpAi01EV5l'}   
    })
    const data = await response.json();
    const getjoke = data[0].joke;
    // console.log(getjoke) 
    // console.log(data[0])
    // console.log(data)
    // console.log(response)   
    result.innerHTML = getjoke;
}
getjock()


