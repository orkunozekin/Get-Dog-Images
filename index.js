// Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3.

// Math.floor(Math.random() * 50)

function getImages(number) {
    
    
    const url = `https://dog.ceo/api/breeds/image/random/${number}`;
    
    fetch(url)
    .then(response =>{
        if(response.ok) {
            return response.json()
        }
        throw new Error(response.statusText)
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => console.log(err))
}


function displayResults(responseJson) {
    //render(append) the results to the #results
    $('#results').empty()
    responseJson.message.forEach(element => {
       $('#results').append(`<img src="${element}" alt="">`)
    });


}

// $('form').on('click', '#dog-images', event=> {
//     // console.log(event.currentTarget)
//     $('#dog-images').value = 0;
// })

    


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let number = $('#dog-images').val()
        if(number>0 && number <= 50) {
            getImages(number)
            return;
        }
        throw new Error('Please enter a valid number')
    })
  
}

$(watchForm)