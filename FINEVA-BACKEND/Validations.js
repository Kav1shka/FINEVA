const registerValidDriver = (Email, Fname,Lname,Password,NIC,RegiNumber)=>{
  
    if (!Email) return "Please enter your email address";
    // if (!validateEmail(email)) return "Please enter valid email";
    if (!Fname) return "Please enter your First Name ";
    if (!Lname) return "Please enter your Last Name ";
    if (!Password) return "Please enter new password";
    if (Password.length < 10)
      return "Password should contain atleast 10 characters";
    if (!NIC) return "Please enter your NIC";
    if (!RegiNumber) return "Please enter your Registration Number";
}
const registerValidPoliceOfficer = (Email, Fname,Lname,Password,Contact,RegiNumber)=>{
      if (!Email) return "Please enter your Email Address";
      if (!Fname) return "Please enter your First Name";
      if (!Lname) return "Please enter your Last Name ";
      if(!Contact) return "Please enter your Contact Number";
      if( Password.length < 10) return "Password should contain atleast 10 characters"
      if (!RegiNumber) return "Please enter your Service ID ";
  }
 
    const DriverdloginValid = (NIC, Password) =>{
      if (!NIC) return "Please enter your NIC";
      if (!Password) return "Please enter your password";
    };
    const OfficerloginValid = (RegiNumber, password) =>{
      if (!RegiNumber) return "Please enter your Service ID";
      if (!password) return "Please enter your password";
    };
   
     
  module.exports =  {
    registerValidDriver,
    registerValidPoliceOfficer,
    DriverdloginValid,
    OfficerloginValid

  };

