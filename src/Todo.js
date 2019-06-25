import React,{Component} from 'react';

let getid="";
class Todo extends Component{
   
constructor(props)
{
super(props);
this.state = {
    item:'',
    todoList:[]}
}
 
onChangeHandler=(e)=>{
    const input=e.target.value;
    this.setState({
        item: input
    })
}

onClick = ()=>{
const input = this.state.item;

if(input==="")
{
    alert("Enter some todo task first");
}
else{
const todoListAdd = this.state.todoList;
todoListAdd.push(input);
this.setState({
    todoList:todoListAdd,
    item:''
})
}
}

onedit = (e)=>{
    const id = e.target.id;
    getid=id;
    this.setState({
        item:this.state.todoList[id]
    })
    document.getElementById("addData").style.display="none";
    document.getElementById("updateData").style.display="block";
    e.target.style.display="none";
    
}

onClickUpdate=(e)=>{
    const arr =this.state.todoList;
    arr[getid] = this.state.item;

    this.setState({
        todoList:arr,
        item:''
    }) 
    document.getElementById("addData").style.display="block";
    document.getElementById("updateData").style.display="none";
    document.getElementsByClassName("edit")[0].style.display="block";
}

onDelete = (e)=>{
    const getid = e.target.id;
    const todoListAdd = this.state.todoList;
    todoListAdd.splice(getid,1);
    this.setState({
        todoList:todoListAdd
    })
}
    render(){

        const arraymap = this.state.todoList.map((e,i)=>{
            return <li key={i}>{e} 
            
            <span id={i} onClick={this.onDelete}>x </span>
            <span id={i} className="edit" onClick={this.onedit}>Edit</span> 
            </li>
        })

        return(
            <section>
                <div className="header"><p>To-Do Application</p></div>
                <div className="todoItem">
                    <ul>
                        {arraymap}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item} placeholder="Enter your task" onChange={this.onChangeHandler}/>
                    <button id="addData" onClick={this.onClick}>+</button>  
                    <button id="updateData" onClick={this.onClickUpdate}>✎</button>  
                </div>

            </section>
        )
    }
}

export default Todo;