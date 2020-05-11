import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {deleteExperience, getExperience} from "../../actions/experienceActions";
import {useDispatch, useSelector} from "react-redux";

const ExperienceTable = () => {
    const user = useSelector(state=>state.auth.user);
    const isExperience = useSelector(state => state.experience.isExperience);
    const experiences = useSelector(state => state.experience.experiences);
    const dispatch = useDispatch();
    return (
        <Fragment>
            {isExperience === true && experiences !== null ? (

                <Fragment>

                    <h2 className={'my-2'}>Experience</h2>

                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>From</th>
                            <th>To</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            experiences.map(exp => {
                                return <tr key={exp.userExperience}>
                                    <td>{exp.title}</td>
                                    <td>{exp.company}</td>
                                    <td>{exp.from}</td>
                                    <td>{exp.to}</td>
                                    <td><button type={'button'} onClick={()=>{if(window.confirm(`Are you sure u want to delete ${exp.userExperience}?`)) dispatch(deleteExperience({username:user.username},exp.userExperience))}} className={'btn btn-danger'}>Delete experience</button></td>
                                    <td><Link type={'button'} onClick={()=>dispatch(getExperience({username:user.username},exp.userExperience))} to={`/experience-${exp.userExperience}`}  className={'btn btn-light'}>Edit experience</Link></td>
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

export default ExperienceTable;