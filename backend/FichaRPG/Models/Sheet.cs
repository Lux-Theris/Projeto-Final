namespace FichaRPG.Models
{
  public class Sheet
  {
    public int ID { get; set; }
    public string? Name { get; set; }
    public string? Species { get; set; }
    public int Age { get; set; }
    public int Level { get; set; }
    public int Money { get; set; }
    public string? Status { get; set; }
    public int HP { get; set ;}
    public int MP { get; set; }
    public int Strength { get; set; }
    public int Defense { get; set; }
    public int Magic { get; set; }
    public int MDefense { get; set; }
    public int Dexterity { get; set; }
    public int Stealth { get; set; }
    public int Precision { get; set; }
    public IEnumerable<Skill>? Skills { get; set; }
    public IEnumerable<Inventory>? Inventories { get; set; }
    public IEnumerable<Title>? Titles {get; set; }
    }
}