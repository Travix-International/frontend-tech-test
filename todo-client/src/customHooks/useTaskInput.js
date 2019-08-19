import { useState } from "react";

const useTaskInput = taskInputs  => {
  const [values, setValues] = useState(
    {
      initialTask: taskInputs,
      updatedTask: taskInputs
    }
  );

  return [
    values.updatedTask,
    event => {
      setValues(
        {
          initialTask: values.initialTask,
          updatedTask: {
          ...values.updatedTask,
          [event.target.name]: event.target.value
        }
      });
    },
    () => {
      setValues(
        {
          initialTask: values.initialTask,
          updatedTask: values.initialTask
        });
    }
  ];
};

export default useTaskInput;