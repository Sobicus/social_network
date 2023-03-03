import {useFormik} from "formik";
import {loginTC} from "../../../../redux/auth-reducer";
import {useAppDispatch} from "../../../../redux/redux-store";

export const AddPostForm = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validate(values) {
            const errors: loginErrorType = {};
            if (values.text === '' || values.text.trim(' ') === '') {
                errors.text = 'Please enter the text of the post';
            }
        },
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
        },
    });

    return <div>

    </div>
}
type loginErrorType = {
    text?: string
}