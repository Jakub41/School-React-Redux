import types from "./types";

const getStudents = students => ({
    type: types.GET_STUDENTS,
    students
});

export default {
    getStudents
};
