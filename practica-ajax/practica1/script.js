fetch('https://randomuser.me/api/')
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    })
    .then((data) => {
        //aquí manejamos los datos obtenidos si hubo exito, en este caso lo guardamos entero en variable user
        //la documentacion nos indica que la propiedad que contiene el usuario se llama results
        const user = data.results[0];
        //luego podemos obtener del json los datos que nos interesan
        const photo = user.picture.thumbnail;
        const fullname = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const address = `${user.location.street.name} ${user.location.street.number}`;
        const state = `${user.location.city} (${user.location.state})`;
        //los añadimos a los divs capturados por id
        document.getElementById('userPhoto').src = photo;
        document.getElementById('userName').textContent = fullname;
        document.getElementById('userEmail').textContent = `Email: ${email}`;
        document.getElementById('userAddress').textContent = address;
        document.getElementById('userState').textContent = state;

    })
    .catch((error) => {
        console.log('Error en la petición ', error);

    })

    
