package benjamindrogers.todo.todobackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import benjamindrogers.todo.todobackend.models.TodoList;

@RestController
@RequestMapping("/todo")
public class TodoListController {
    private TodoList todoList = new TodoList();

    @GetMapping
    public ResponseEntity<TodoList> getTodoList() {
        return new ResponseEntity<TodoList>(todoList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TodoList> addItem() {
        todoList.addItem();
        return new ResponseEntity<TodoList>(todoList, HttpStatus.OK);
    }

}
