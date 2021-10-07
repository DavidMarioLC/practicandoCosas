import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {
  // const [todos,setTodos] = useState<Todos>([]);
  const [todos,setTodos] = useState<{id:string,value:string}[]>([]);
  const [inputValue,setInputValue] = useState<string>('');
  const [isEdit,setIsEdit] = useState<boolean>(false);
  const [todoUpdate,setTodoUpdate] = useState<{id:string,value:string}|null>({id:'',value:''});

  const createTodo = (e:any):void => {
    e.preventDefault();
    const id = uuidv4();
    setTodos([...todos,{id,value:inputValue}]);

    setInputValue('');
  }
  
  const editTodo = (id:string):void => {
    const selectedTodo = todos.find(todo=>todo.id === id);

    setTodoUpdate(selectedTodo??null )
    setInputValue(selectedTodo?.value?? '')
    setIsEdit(true)
  }

  const updateTodo = (e:any):void => {
    e.preventDefault();

     const todoUpdated = todos.map(todo=>{
        if(todo.id===todoUpdate?.id){
          return {...todo,value:inputValue}
        }
        return todo;
      })

      
      setTodos(todoUpdated)
      setIsEdit(false)
      setInputValue('')
      setTodoUpdate({id:'',value:''})
  }

  const deleteTodo = (id:string):void => {
    const newTodos = todos.filter(todo=>todo.id !==id);
    setTodos(newTodos)
  }


  return (
   <>
   <FormTodos 
   inputValue={inputValue}
   setInputValue={setInputValue}
   createTodo={createTodo}
   updateTodo={updateTodo}
   isEdit={isEdit}
   />
   <ListTodos
    todos={todos}
    editTodo={editTodo}
    deleteTodo={deleteTodo}
    />
   </>
  );
}

type TFormTodos = {
  inputValue:string
  setInputValue:(arg:string)=>void
  createTodo:(e:any)=>void
  updateTodo:(e:any)=>void
  isEdit:boolean
}

const FormTodos = ({inputValue,setInputValue,createTodo,updateTodo,isEdit}:TFormTodos) => {

  const handlerChange = (e:any) =>{
    setInputValue(e.target.value)
  }

  return (
    <form>
      <input type="text" value={inputValue} onChange={handlerChange} placeholder='Add todo...' />
      {isEdit?<button onClick={updateTodo}>Update</button> : <button onClick={createTodo}>Save</button>}
     
      
    </form>
  )
}



type TListTodos = {
  todos:{id:string,value:string}[],
  editTodo:(e:string)=>void,
  deleteTodo:(e:string)=>void,
}


const ListTodos = ({todos,editTodo,deleteTodo}:TListTodos) => {

  
  const listTodoElements = todos.map((todo)=>(
  <li key={todo.id}>
    <p>{todo.value}</p>
    <button onClick={()=>editTodo(todo.id)}>Edit</button>
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
  </li>
  ))

  return (
    <ul>
      {listTodoElements}
    </ul>
  )
}

export default App;
