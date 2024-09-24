package benjamindrogers.todo.todobackend.models;

public class ItemRequestBody {

    private int index;
    private String text;

    ItemRequestBody(int index, String text) {
        this.index = index;
        this.text = text;
    }

    public int getIndex() {
        return this.index;
    }

    public String getText() {
        return this.text;
    }

}
