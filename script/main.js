//All the JS and JQuery code will be written inside this anonymous function
$(document).ready(function(){

    //This function launch our application and is tasked with the initialisation of every aspect of it
    function init(showAtStartup){
        navigateView(showAtStartup);
        $('[data-target]').on('click', function(){
            navigateView(this.dataset.target);
        });
        
        $('[data-ajax]').on('click', function(){
          //https://swapi.co/api//people/1
          $.get("https://swapi.co/api/people/1", function(data) {
              //console.log("name: " + data.name );
              //console.log("mass: " + data.mass);
              //console.log("birthDate: " + data.birth_year);
              let name = "Nom: " + data.name;
              let mass = "Poids: " + data.mass;
              let birthDate = "Date de naissance: " + data.birth_year;
              //Jquery
              $('[data-page="home"]').append('<p>' + name + '</p>');
              $('[data-page="home"]').append('<p>' + mass + '</p>');
              $('[data-page="home"]').append('<p>' + birthDate + '</p>');

              //JavaScript
              /*let nameP = document.createElement('p');
              nameP.innerHTML = name;
              document.querySelector('[data-page="home"]').append(nameP);*/

              //Morgan
              /*let values = [
                "Nom: " + data.name,
                "Poids: " + data.mass,
                "Date de naissance: " + data.birth_year,
              ];

              for (let i = 0; i < values.length; i++) {
                  let p = document.createElement('p');
                  p.innerHTML = values[i];
                  document.querySelector('[data-page="home"]').append(p);
                  
              }*/
            
          });
        });

    }

    //Allow to hide and show every section of our application
    function navigateView(sectionToShow){
        let sections = $('[data-page]');
        let error = true;
        for (let i = 0; i < sections.length; i++){
            if(sections[i].dataset.page == sectionToShow){
                sections[i].classList.remove('hidden');
                error = false;
            } else {
                sections[i].classList.add('hidden');
            };
            if(error) {
              throw ('Selector error, nothing found for' + sectionToShow);
            }

        };

        //document.querySelector('[data-page="home"]').classList.remove('hidden')
        //$('[data-page="' + sectionToShow + '"]').removeClass('hidden');
    }





    init('home');
});
