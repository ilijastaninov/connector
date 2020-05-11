import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {deleteEducation, getEducation} from "../../actions/educationActions";
import {useDispatch, useSelector} from "react-redux";

const EducationTable = () => {
    const user = useSelector(state=>state.auth.user);
    const isEducation = useSelector(state=>state.education.isEducation);
    const educations = useSelector(state=>state.education.educations);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {isEducation === true && educations !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Educations</h2>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Degree</th>
                            <th>Description</th>
                            <th>From</th>
                            <th>To</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            educations.map(edu => {
                                return <tr key={edu.educationUser}>
                                    <td>{edu.degree}</td>
                                    <td>{edu.description}</td>
                                    <td>{edu.from}</td>
                                    <td>{edu.to}</td>
                                    <td><button type={'button'} onClick={()=>{if(window.confirm(`Are you sure u want to delete ${edu.educationUser}?`)) dispatch(deleteEducation({username:user.username},edu.educationUser))}} className={'btn btn-danger'}>Delete education</button></td>
                                    <td><Link type={'button'} onClick={()=>dispatch(getEducation({username:user.username},edu.educationUser))} to={`/education-${edu.educationUser}`}  className={'btn btn-light'}>Edit education</Link></td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                </Fragment>

            ):(
                <Fragment>

                </Fragment>

            )}
        </Fragment>
    );
};

export default EducationTable;