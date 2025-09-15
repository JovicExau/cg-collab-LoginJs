const form = document.getElementById("register");


form.addEventListener("submit",function(event){
    event.preventDefault();

        const nom= document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const password= document.getElementById("password").value;

        console.log("nom: ", nom);
        console.log("prenom: ", prenom);
        console.log("password: ", password);

  
        alert('Bienvenue ' +nom +' ' +prenom +',votre inscription est effectuée.');
        
    });

