import { STUDENTS_URL } from "./constants";
import studentActions from "../actions";

const fetchStudents = async () => {
    const response = await fetch(STUDENTS_URL, { method: "GET" });
    const json = await response.json();
    console.log(response);
    return json;
};

export const getAllStudents = () => async dispatch => {
    const students = await fetchStudents();
    console.log("DATA >>", students);
    students.map(student => dispatch(studentActions.getStudents(student)));
};
