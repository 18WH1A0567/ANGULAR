
function blockDates(){
  var today = new Date().toISOString().split('T')[0];
  var trial = new Date(today);
trial.setDate(trial.getDate() + 3);
var today1 = new Date(trial).toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today1);
 
}
function validateForm() {
  
    var custName = document.forms["myForm"]["custName"].value;
    var custPhone = document.forms["myForm"]["custPhone"].value;
    var email = document.forms["myForm"]["email"].value;
    /*var emailfilter=/^\w+[\+\.\w-]@([\w-]+\.)\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    var b=emailfilter.test(email);
    if(b==false)
    {
      alert("Please Enter a valid Mail ID");
      return false;
    }*/
    if (custName.length < 3) {
      alert("Name should contain atleast 3 characters");
      custName.focus;
      return false;
    }
    if (isNaN(custPhone)) {
      alert("The phone number contains illegal characters.");
      custPhone.focus;
      return false;
    }
    if (custPhone.length != 10){
      alert("Phone number should contain 10 digits");
      custPhone.focus;
      return false;
    }
    
    return true;
  }