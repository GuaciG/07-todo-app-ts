import { type TodoId, type Todo as TodoType } from '../types'

/* Los tipos de las props son los mismos que los types del Todo */
/*
interface Props {
  id: string
  title: string
  completed: boolean
}
*/
/* por lo tanto reutilizamos e importamos el type Todo como TodoType */

/* type Props = TodoType */
/* Al añadir onRemoveTodo, cambiamos de type a interface porque tenemos que extender las props */
/* Tipeamos las props del TodoType y además extiende las de onRemoveTodo */
interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleteTodo({ id, completed: event.target.checked })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
