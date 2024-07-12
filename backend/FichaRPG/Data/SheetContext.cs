using Microsoft.EntityFrameworkCore;
using FichaRPG.Models;

namespace FichaRPG.Data
{
  public class SheetContext : DbContext
  {
    public SheetContext(DbContextOptions<SheetContext> options) : base(options) {}
    public DbSet<Sheet> Sheets { get; set; }
    public DbSet<Inventory> Inventories { get; set; }
    public DbSet<Skill> Skills { get; set; }
    public DbSet<Title> Titles { get; set; }
    }
}