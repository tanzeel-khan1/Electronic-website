import { useState } from "react";
import { useForm } from "react-hook-form";

function Next(){
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm();
  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

  const onSubmit = () => {
    let users = getUsers();

    if(isLogin){
    const foundUser =  users.find(
    (user) => user.email === data.email && user.password === data.password
    );
    if(foundUser){
      setLoggedInUser(foundUser.name);
      alert(`wellCome ${foundUser.name}`);
    }else{
      alert("Not Currentt");
    }
    }else{
    const emailExit = users.some((user) => user.email === data.email);
    if(emailExit){
      alert("Already hai");
    }else{
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const updateUser = [... users, newUser];
    localStorage.setItem("users",JSON.stringify(updateUser));
    setIsLogin(true);
    alert("sign success");
    reset();
    }
    }
  };
  return(
    <></>
  )
}
export default Next;