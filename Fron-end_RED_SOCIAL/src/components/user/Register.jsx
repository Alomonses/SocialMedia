import React from "react"
import {useForm} from "../../hooks/useForm"
import {Global } from "../../helpers/Global"
import {useState } from "react"



export const Register = () => {

    const { form, changed } = useForm({});
    const [ saved, setSaved ] = useState("not_sended")

    const saveUser = async (e) =>{
        //prevenir actualizacion de panatalla
        e.preventDefault();

        //recoger datos del usuario
        let newUser = form;

        //guardarn usuario en el backend
        const request = await fetch(Global.url + "user/register", {
            method: "POST",
            BODY: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }

        });

        const data = await request.json();

        if(data.status == "succes"){
            setSaved("saved");
        }else{
            setSaved("error");
        }
    }

    return (
        <>
        <header className="content__header content__header--public">
                <h1 className="content__title">Register</h1>
                
        </header>

        <div className="content__posts">

            <strong className="alert alert-sucess">{saved == "saved" ? "User register succesfully!!!" : ''}</strong>
            <strong className="alert alert-danger">{saved == "error" ? "User no register !!" : ''}</strong>

            <form className="register-form" onSubmit={saveUser}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={changed}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" name="surname" onChange={changed}/>
                </div>

                <div className="form-group">
                    <label htmlFor="nickName">NickName</label>
                    <input type="text" name="nickName" onChange={changed}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={changed}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={changed}/>
                </div>

                <input type="submit" value="Register" className="btn btn-success"></input>


            </form>
          

        </div>
        </>
    )
}