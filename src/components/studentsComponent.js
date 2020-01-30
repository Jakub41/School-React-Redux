import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllStudents } from "../services/apiClient";

const StudentsComponent = ({ students, getAllStudents }) => {
    useEffect(() => {
        getAllStudents();
    }, [getAllStudents]);

    return (
        <ul>
            {students.list.map(student => (
                <li>{student}</li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => ({
    students: state.students
});

const mapDispatchToProps = dispatch => ({
    getAllStudents: () => dispatch(getAllStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsComponent);
