using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using FichaRPG.Models;
using Microsoft.Identity.Client;

namespace FichaRPG
{
  public class Title
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ID { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int? SheetId { get; set; }

    [ForeignKey("SheetId")]
    [JsonIgnore]
    public Sheet? Sheet { get; set; }
  }
}