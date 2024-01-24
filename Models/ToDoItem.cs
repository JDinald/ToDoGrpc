namespace ToDoGrpc.Models;

public class ToDoItem 
{
    public int Id { get; set; }

    public string? Tittle { get; set; }

    public string? Description { get; set; }

    public string ToDoStatus { get; set; } = "NEW";
}