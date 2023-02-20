import {Field, Formik, useFormik} from "formik";
import {loginTC} from "../../redux/auth-reducer";

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
    rememberMe: boolean
}

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate(values) {
            const errors: loginErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Must be 4 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            loginTC(values)
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
            {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
            <label htmlFor="email">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
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

type loginErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}