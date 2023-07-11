const registerValidDriver = (Email, Fname,Lname,Password,Contact,NIC,RegiNumber)=>{
  
    if (!Email) return "Please enter your email address";
    // if (!validateEmail(email)) return "Please enter valid email";
    if (!Fname) return "Please enter your email address";
    if (!Lname) return "Please enter your email address";
    if (!Password) return "Please enter new password";
    if (Password < 10)
      return "Password should contain atleast 10 characters";
    if (!NIC) return "Please enter your NIC";
    if (!RegiNumber) return "Please enter your Registration Number";
}
const registerValidPoliceOfficer = (Email, Fname,Lname,Contact,RegiNumber)=>{
      if (!Email) return "Please enter your Fname ";
      if (!Fname) return "Please enter your Lname ";
      if (!Lname) return "Please enter your Contact ";
      if(!Contact) return "Please enter your NIC";
      if (!RegiNumber) return "Please enter your Province ";
  }
 
    const DriverdloginValid = (NIC, password) =>{
      if (!NIC) return "Please enter your NIC";
      if (!password) return "Please enter your password";
    };
    const DriverloginValid = (NIC, password) =>{
      if (!NIC) return "Please enter your NIC";
      if (!password) return "Please enter your password";
    };
   