// https://api.github.com/user
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');
let lesProj = "";

async function dataGithub(utilisateur) {
   const reponse = await fetch(`https://api.github.com/users/${utilisateur}`)
   const data = await reponse.json();
  
   creationCarte(data);
   console.log(data);
   
}

 function reposList() {
  

}

async function creationCarte(user) {
   const reponse1 = await fetch(`${user.repos_url}`);
   const data1 = await reponse1.json(); 
   console.log(data1);
   data1.forEach((element) => {
      lesProj += `<li><a class="dropdown-item" target="_blank" href="${element.html_url}">${element.name}</a></li>`;
    });

   affichage.innerHTML += `
   <div class="contenu">
   <img src = "${user.avatar_url}" alt=" icone avatar" class=" avatar">  
   <ul>
   <li class="followers"> <h4> Name: ${user.name}</h4></li>
   <li class="followers"> Followers : ${user.followers} </li>
   <li class="followers"> Repos : ${user.public_repos} </li>
   <li class="followers"> Github : </strong> <a id="link" target= "_blank" href="${user.html_url}"> Link </a></li>
   </ul>
   
  

   <div class="dropdown center">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  ALL REPOS
  </button>
  <ul class="dropdown-menu s1" aria-labelledby="dropdownMenuButton1" style="height: 200px;">
  ${lesProj}
  </ul>
</div>
   
   `;
}


form.addEventListener('submit', (e) =>{
   e.preventDefault();

   if(inpRecherche.value.length > 0)  {
      dataGithub(inpRecherche.value);
      inpRecherche.value = '';
   }

})