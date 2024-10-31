import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {

    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }

    const handleValidationCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;

        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
            alert('invalid captcha')
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl md:w-1/2 font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shadow-2xl">

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text"
                                name="password"
                                placeholder="type the" className="input input-bordered" required />
                            <button onClick={handleValidationCaptcha} className="btn btn-xs mt-2">validation</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center mb-4'>
                        <small>New Here?</small>
                        <Link className='text-green-400 font-semibold' to='/signUp'> Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;