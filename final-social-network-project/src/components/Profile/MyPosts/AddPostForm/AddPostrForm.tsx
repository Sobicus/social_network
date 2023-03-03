import {useFormik} from "formik";
import {useAppDispatch} from "../../../../redux/redux-store";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";

export const AddPostForm = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            post: '',
        },
        validate(values) {
            const errors: loginErrorType = {};
            if (values.post === '' && values.post.trim() === '') {
                errors.text = 'Please enter the text of the post';
            }
        },
        onSubmit: values => {
            dispatch(updateNewPostTextAC(values.post))
            dispatch(addPostAC())
            values.post=''
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="post"
                type="post"
                {...formik.getFieldProps('post')}
            />
            {formik.touched.post && formik.errors.post ?
                <div style={{color: 'red'}}>{formik.errors.post}</div>
                : null
            }
            <br/>
            <button type="submit">Add Post</button>
        </form>
    )
}
type loginErrorType = {
    text?: string
}