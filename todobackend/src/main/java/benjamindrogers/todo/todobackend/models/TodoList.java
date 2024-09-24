package benjamindrogers.todo.todobackend.models;

import java.util.ArrayList;
import java.util.Arrays;

public class TodoList {
    
    private ArrayList<String> list;

    public TodoList() {
        this.list = new ArrayList<String>(Arrays.asList("test1", "test2"));
    }

    public ArrayList<String> getList() {
        return list;
    }

    public void addItem() {
        list.add("");
    }

}
