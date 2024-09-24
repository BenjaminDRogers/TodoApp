package benjamindrogers.todo.todobackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import benjamindrogers.todo.todobackend.models.ItemRequestBody;
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

    @PutMapping
    public ResponseEntity<TodoList> updateItem(@RequestBody ItemRequestBody itemRequestBody) {
        todoList.updateItem(itemRequestBody.getIndex(), itemRequestBody.getText());
        return new ResponseEntity<TodoList>(todoList, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<TodoList> removeItem(@RequestBody ItemRequestBody itemRequestBody) {
        todoList.removeItem(itemRequestBody.getIndex());
        return new ResponseEntity<TodoList>(todoList, HttpStatus.OK);
    }

}
