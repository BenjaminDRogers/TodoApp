package benjamindrogers.todo.todobackend.models;

import java.util.ArrayList;
import java.util.Arrays;

public class TodoList {
    
    ArrayList<String> list;

    public TodoList() {
        list = new ArrayList<String>(Arrays.asList("test"));
    }

}
