//Instantiate Github object
const github=new GitHub;

//Instatiate UI
const ui=new UI;

//Search input
const searchUser=document.getElementById('searchBtn');

//Search input event listener
searchUser.addEventListener('click', (e)=>{
  //Get input text
  const userText=document.getElementById('searchUser').value;
  
  if(userText !== ''){
    //Make http call
    github.getUser(userText)
      .then(data=>{
        if(data.profile.message === 'Not Found'){
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger');
          ui.clearProfileInfo();
        }else{
          //Clear previous alert if possible
          ui.clearAlert();
          //Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  }else{
    //Clear profile
    ui.clearProfile();
  }
});