import { Task } from '@/state/api'
import React from 'react'
import { format } from "date-fns";

type Props = {
    task:Task
}

const TaskCard = ({task}: Props) => {
  return (
    <div>TaskCard</div>
  )
}

export default TaskCard