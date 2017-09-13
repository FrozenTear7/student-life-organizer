import { ADD_EXAM, UPDATE_EXAM, DELETE_EXAM, TOGGLE_EXAM, EDIT_EXAM, RESET_EDIT_EXAM,
    SHOW_ALL_EXAMS, SHOW_HIGH_PRIORITY_EXAMS, SHOW_LOW_PRIORITY_EXAMS } from '../constants/index'

let nextExamId = 1

export const addExam = (text, subject, highPriority, date) => ({
    type: ADD_EXAM,
    id: nextExamId++,
    text,
    subject,
    highPriority,
    date
})

export const updateExam = (id, text, subject, highPriority, date) => ({
    type: UPDATE_EXAM,
    id,
    text,
    subject,
    highPriority,
    date
})

export const toggleExam = (id) => ({
    type: TOGGLE_EXAM,
    id
})

export const deleteExam = (id) => ({
    type: DELETE_EXAM,
    id
})

export const editExam = (exam) => ({
    type: EDIT_EXAM,
    exam
})

export const examResetEdit = () => ({
    type: RESET_EDIT_EXAM
})

export const examShowAll = () => ({
    type: SHOW_ALL_EXAMS
})

export const examShowHighPriority = () => ({
    type: SHOW_HIGH_PRIORITY_EXAMS
})

export const examShowLowPriority = () => ({
    type: SHOW_LOW_PRIORITY_EXAMS
})