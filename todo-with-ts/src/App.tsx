import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {
  // const [todos,setTodos] = useState<Todos>([]);
  const date = new Date();
  const todoDate = date.getTime();
  console.log(todoDate)
  
  type Todos = {
    id:string,
    value:string,
    tag:string,
    date:Date
  }
  const [todos,setTodos] = useState<Todos[]|[]>(
    ()=>JSON.parse(localStorage.getItem('todos')||'[]')
    );
  const [inputValue,setInputValue] = useState<string>('');
  const [selectValue,setSelectedValue]=useState<string>('Frontend');
  const [isEdit,setIsEdit] = useState<boolean>(false);
  const [todoUpdate,setTodoUpdate] = useState<Todos|null>({id:'',value:'',tag:'',date:new Date()});
  const [filter,setFilter] = useState<string>('All');

  const createTodo = (e:any):void => {
    e.preventDefault();
    const id = uuidv4();
 

    setTodos([...todos,{id,value:inputValue,tag:selectValue}]);

    const stateStorage = JSON.parse(localStorage.getItem('todos')||'[]')
    localStorage.setItem('todos',JSON.stringify([...stateStorage,{id,value:inputValue,tag:selectValue}]))
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
          return {
            ...todo,
            value:inputValue,
            tag:selectValue,
            date:new Date()
          }
        }
        return todo;
      })

      
      setTodos(todoUpdated)
      setIsEdit(false)
      setInputValue('')
      setTodoUpdate({id:'',value:'',tag:'',date:new Date()})
  }

  const deleteTodo = (id:string):void => {
    const newTodos = todos.filter(todo=>todo.id !==id);
    setTodos(newTodos)
  }

  
  const filterTodos = (tag:string):void =>{
    setFilter(tag)
    if(tag === 'All'){
      const todosStorage = JSON.parse(localStorage.getItem('todos')||'[]')
      setTodos(todosStorage);
    }else{
      const todosStorage = JSON.parse(localStorage.getItem('todos')||'[]')
      const newTodos = todosStorage.filter((todo:any)=>todo.tag.toLowerCase() === tag.toLowerCase());
      setTodos(newTodos);
    }
   
   

    
  }



  return (
   <>
   <FormTodos 
   inputValue={inputValue}
   setInputValue={setInputValue}
   selectValue={selectValue}
   setSelectedValue={setSelectedValue}
   createTodo={createTodo}
   updateTodo={updateTodo}
   isEdit={isEdit}
   />
   <TotalTodos totalTodos={todos.length}/>
   <Filter  
   filter={filter}
   filterTodos={filterTodos}/>
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
  selectValue:string;
  setSelectedValue:(arg:string)=>void
  createTodo:(e:any)=>void
  updateTodo:(e:any)=>void
  isEdit:boolean
}

const FormTodos = ({inputValue,setInputValue,selectValue,setSelectedValue,createTodo,updateTodo,isEdit}:TFormTodos) => {

  const handlerChange = (e:any) =>{
    setInputValue(e.target.value)
  }

  const handlerSelected = (e:any)=>{
    console.log(e.target.value)
    setSelectedValue(e.target.value)
  }

  return (
    <form>
      <input type="text" value={inputValue} onChange={handlerChange} placeholder='Add todo...' />
      <select defaultValue={selectValue} onChange={handlerSelected}>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Design">Design</option>
    </select>
      {isEdit?<button onClick={updateTodo}>Update</button> : <button onClick={createTodo}>Save</button>}
      
      
    </form>
  )
}



type TListTodos = {
  todos:{id:string,value:string,tag:string}[],
  editTodo:(e:string)=>void,
  deleteTodo:(e:string)=>void,
 
}


const ListTodos = ({todos,editTodo,deleteTodo}:TListTodos) => {

  
  const listTodoElements = todos.map((todo)=>(
  <li key={todo.id}>
    <p>{todo.value}- <strong>{todo.tag}</strong> </p>
    <button onClick={()=>editTodo(todo.id)}>Edit</button>
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
  </li>
  )).reverse()

  return (
    <ul>
      {listTodoElements}
    </ul>
  )
}


const TotalTodos = ({totalTodos}:{totalTodos:number})=>{
  return(<p>total de todos: {totalTodos}</p>)
}


const Filter = ({filter,filterTodos}:{filter:string,filterTodos:(arg:string)=>void}) => {
  const handlerSelect = (e:any)=>{
    filterTodos(e.target.value)
  }
  return(
    <select defaultValue={filter} onChange={handlerSelect}>
       <option value="All">All</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Design">Design</option>
    </select>
  )
}

export default App;
