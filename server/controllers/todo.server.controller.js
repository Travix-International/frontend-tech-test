// ./express-server/controllers/todo.server.controller.js

//import models
import Todo from '../models/todo.server.model';

export const getTodos = (req,res) => {
  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
}

export const addTodo = (io,T) => {
  let result;
  const newTodo = new Todo(T);
  newTodo.save((err,todo) => {
    if(err){
      result = {'success':false,'message':'Some Error','error':err};
    }
    else{
      const result = {'success':true,'message':'Todo Added Successfully',todo}
       io.emit('TodoChanged', result);
    }
  })
}

export const updateTodo = (io,T) => {
  let result;
  Todo.findOneAndUpdate({ _id:T._id }, T, { new:true }, (err,todo) => {
    if(err){
    result = {'success':false,'message':'Some Error','error':err};
    }
    else{
     result = {'success':true,'message':'Todo Updated Successfully',todo};
     io.emit('TodoChanged', result);
    }
  })
}

export const getTodo = (req,res) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

export const deleteTodo = (io,T) => {
  let result;
  Todo.findByIdAndRemove(T, (err,todo) => {
    if(err){
    result = {'success':false,'message':'Some Error','error':err};
    }
    else {
      result = {'success':true,'message':'Todo deleted successfully', todo};
      io.emit('TodoChanged', result);
    }
  })
}
