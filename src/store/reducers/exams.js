import { ADD_EXAM, UPDATE_EXAM, DELETE_EXAM, TOGGLE_EXAM, EDIT_EXAM, RESET_EDIT_EXAM,
    SHOW_ALL_EXAMS, SHOW_HIGH_PRIORITY_EXAMS, SHOW_LOW_PRIORITY_EXAMS } from '../../constants/index'

const INITIAL_STATE = {
    exams: [],
    editedExam: { exam: { id: null, text: null, completed: null, highPriority: null, date: null } },
    filter: SHOW_ALL_EXAMS
}

const exams = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EXAM:
            return { ...state, exams: [...state.exams, { id: action.id, text: action.text, completed: false, highPriority: action.highPriority, date: action.date }] }
        case TOGGLE_EXAM:
            return {
                ...state, exams: state.exams.map(exam =>
                    (exam.id === action.id)
                        ? {...exam, completed: !exam.completed}
                        : exam
                )
            }
        case UPDATE_EXAM:
            return {
                ...state, exams: state.exams.map(exam =>
                    (exam.id === action.id)
                        ? {...exam, text: action.text, highPriority: action.highPriority, date: action.date}
                        : exam
                )
            }
        case DELETE_EXAM:
            return {
                ...state, exams: state.exams.filter(exam =>
                    (exam.id !== action.id)
                )
            }
        case EDIT_EXAM:
            return {
                ...state, editedExam: { exam: action.exam }
            }
        case RESET_EDIT_EXAM:
            return {
                ...state, editedExam: { exam: { id: null, text: null, completed: null, highPriority: null, date: null } }
            }
        case SHOW_ALL_EXAMS:
            return {
                ...state, filter: SHOW_ALL_EXAMS
            }
        case SHOW_HIGH_PRIORITY_EXAMS:
            return {
                ...state, filter: SHOW_HIGH_PRIORITY_EXAMS
            }
        case SHOW_LOW_PRIORITY_EXAMS:
            return {
                ...state, filter: SHOW_LOW_PRIORITY_EXAMS
            }
        default:
            return state
    }
}

export default exams