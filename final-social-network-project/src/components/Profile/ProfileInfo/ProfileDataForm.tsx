import {useFormik} from "formik";
import React from "react";
import {ProfileType} from "../../../redux/store";
import {setProfileType} from "../../../api/api";
import {useAppDispatch} from "../../../redux/redux-store";

type ProfileDataFormType = {
    profile: ProfileType
    saveProfile: (profile: setProfileType) => void
}
export const ProfileDataForm: React.FC<ProfileDataFormType> = ({profile, saveProfile}) => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            /*contacts: {...profile.contacts}*/
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink,
        },
        onSubmit: values => {
            const newProfile={fullName: values.fullName,
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                aboutMe: values.aboutMe,
                contacts: {
                facebook: values.facebook,
                website:values.website,
                vk: values.vk,
                twitter: values.twitter,
                instagram: values.instagram,
                youtube: values.youtube,
                github: values.github,
                mainLink: values.mainLink}}
           saveProfile(newProfile)
            alert(JSON.stringify(newProfile));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input
                id="fullName"
                type="text"
                {...formik.getFieldProps('fullName')}
            />
            <label htmlFor="lookingForAJob">Looking for a job: </label>
            <input
                id="lookingForAJob"
                type="checkbox"
                {...formik.getFieldProps('lookingForAJob')}
            />
            <label htmlFor="lookingForAJobDescription">My professional skills: </label>
            <input
                id="lookingForAJobDescription"
                type="text"
                {...formik.getFieldProps('lookingForAJobDescription')}
            />
            <label htmlFor="aboutMe">About me: </label>
            <input
                id="aboutMe"
                type="text"
                {...formik.getFieldProps('aboutMe')}
            />
            <label htmlFor="facebook">Facebook: </label>
            <input
                id="facebook"
                name="facebook"
                type="facebook"
                onChange={formik.handleChange}
                // value={formik.values.contacts.facebook}
                value={formik.values.facebook}
            />
            <label htmlFor="vk">VK: </label>
            <input
                id="vk"
                name="vk"
                type="vk"
                onChange={formik.handleChange}
                // value={formik.values.contacts.vk}
                value={formik.values.vk}
            />
            <label htmlFor="github">Github: </label>
            <input
                id="github"
                name="github"
                type="github"
                onChange={formik.handleChange}
                // value={formik.values.contacts.github}
                value={formik.values.github}
            />
            <label htmlFor="twitter">Twitter: </label>
            <input
                id="twitter"
                name="twitter"
                type="twitter"
                onChange={formik.handleChange}
                // value={formik.values.contacts.twitter}
                value={formik.values.twitter}
            />
            <label htmlFor="instagram">Instagram: </label>
            <input
                id="instagram"
                name="instagram"
                type="instagram"
                onChange={formik.handleChange}
                // value={formik.values.contacts.instagram}
                value={formik.values.instagram}
            />
            <label htmlFor="mainLink">MainLink: </label>
            <input
                id="mainLink"
                name="mainLink"
                type="mainLink"
                onChange={formik.handleChange}
                // value={formik.values.contacts.mainLink}
                value={formik.values.mainLink}
            />
            <label htmlFor="website">Website: </label>
            <input
                id="website"
                name="website"
                type="website"
                onChange={formik.handleChange}
                // value={formik.values.contacts.website}
                value={formik.values.website}
            />
            <label htmlFor="youtube">Youtube: </label>
            <input
                id="youtube"
                name="youtube"
                type="youtube"
                onChange={formik.handleChange}
                // value={formik.values.contacts.youtube}
                value={formik.values.youtube}
            />


            <button type="submit">Save</button>

        </form>
    )
}