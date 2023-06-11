import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I&apos;ll work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give your task a name"
        disabled={!!activeCycle}
        {...register('task')}
      />

      {cycles.length > 0 && (
        <datalist id="task-suggestions">
          {cycles.map((cycle) => (
            <option key={cycle.id} value={cycle.task} />
          ))}
        </datalist>
      )}

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
