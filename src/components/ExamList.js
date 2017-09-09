import React from 'react'
import ExamContainer from '../containers/ExamContainer'

let ExamList = ({ exams }) => (
    <ul>
        {exams.map(exam =>
            <ExamContainer key={exam.id} exam={exam}/>
        )}
    </ul>
)


export default ExamList