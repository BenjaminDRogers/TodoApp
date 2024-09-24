package benjamindrogers.todo.todobackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import benjamindrogers.todo.todobackend.models.TodoList;

@RestController
@RequestMapping("/todo")
public class TodoListController {
    
    @GetMapping
    public ResponseEntity<TodoList> getTodoList() {
        return new ResponseEntity<TodoList>(new TodoList(), HttpStatus.OK);
    }
    
}
