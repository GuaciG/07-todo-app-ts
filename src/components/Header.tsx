import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1>
        todo
        <img
          style={{
            width: '60px',
            height: 'auto'
          }}
          src='https://imgs.search.brave.com/3-ox-EIzNfuks3HGmvRXduOdD88JKDLGiIOogbvQVJA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL1R5/cGVzY3JpcHRfbG9n/b18yMDIwLnN2Zy8x/MjAwcHgtVHlwZXNj/cmlwdF9sb2dvXzIw/MjAuc3ZnLnBuZw'
          alt=''
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
