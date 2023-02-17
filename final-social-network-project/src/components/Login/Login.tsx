import {Field, Formik, useFormik} from "formik";

export const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <SignupForm/>
        </div>
    )
}
const LoginForm = () => {
    return (
        <form action="">
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <input type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
type LoginFormikType = {
    email: string
    password: string
    /* rememberMe: boolean*/
}
const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="email">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <input
                type="checkbox"
                id="rememberMe"
                name='rememberMe'
                onChange={formik.handleChange}
                checked={formik.values.rememberMe}
            />

            <button type="submit">Submit</button>
        </form>
    );
};