let data = {}

function saveLocal(){

  data.FirstName = document.querySelector(".firstName").value
  data.LastName = document.querySelector(".lastName").value
  data.EmailAddress = document.querySelector(".emailAddress").value;
  data.PhoneNumber = document.querySelector(".phoneNumber").value;
  data.Message = document.querySelector(".messagee").value;
  
  console.log(data);

 
  document.querySelector(".firstName").value = '';
  document.querySelector(".lastName").value = '';
  document.querySelector(".emailAddress").value = '';
  document.querySelector(".phoneNumber").value = '';
  document.querySelector(".messagee").value = '';

}
