// Add your code here
// const submitData = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         name: '',
//         email: '' 
//     }),
//   };
  
  
//   fetch("http://localhost:3000/users", submitData)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
    // .catch(function (error) {
    //   alert("Bad things! Ragnarők!");
    //   console.log(error.message);
    // });


    function submitData(userName, userEmail){
        return fetch("http://localhost:3000/users",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify({
                name: userName,
                email: userEmail
            })
        
        })
        //getting the response from GOT
        .then(function (response) {
            //translating the response for GOT 
            return response.json();
          })
          //reading the translated response
        .then(function (data){
            //
            const body = document.querySelector('body');
            document.body.append(data.id);
        })
        .catch(function (error) {
            document.body.append(error.message);
          })
    }


    // How can we set the text of the body to be the response.id so it shows up in the DOM
