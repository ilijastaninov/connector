import React,{Fragment,useState} from 'react';
import {Link} from "react-router-dom";
import {setAlert} from "../../actions/alertActions";
import {useDispatch} from "react-redux";
import {register} from "../../actions/authActions";

const Register = () => {
    const [formData,setFormData] = useState({
        username:'',
        password:'',
        name:'',
        email:''
    });
    const dispatch = useDispatch();
    const {username,password,name,email} = formData;

    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(username === ''){
            dispatch(setAlert('Username cannot be blank','danger'));
        }else{
            dispatch(setAlert('Success','success'));
            dispatch(register({username,password,name,email}));
        }
        setFormData({
            username:'',
            password:'',
            name:'',
            email:''
        });
    };
    return (
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange}/>

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register"/>
                </form>
                <p className="my-1">
                    Already have an account? <Link to={'/login'}>Log In</Link>
                </p>
            </section>
        </Fragment>
    );
};

export default Register;