import { CHANGE_VIEW } from '../../constants/index'

const INITIAL_STATE = {
    view: 'TODOS'
}

const exams = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return { ...state, view: action.view }
        default:
            return state
    }
}

export default exams