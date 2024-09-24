package benjamindrogers.todo.todobackend.models;

import java.util.ArrayList;

public class TodoList {
    
    private ArrayList<String> list;

    public TodoList() {
        this.list = new ArrayList<String>();
    }

    public ArrayList<String> getList() {
        return list;
    }

    public void addItem() {
        list.add("");
    }

    public void updateItem(int index, String newItem) {
        list.set(index, newItem);
    }

    public void removeItem(int index) {
        list.remove(index);
    }

}
