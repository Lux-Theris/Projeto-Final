using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FichaRPG.Data;
using FichaRPG.Models;

namespace FichaRPG.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SheetController(SheetContext context) : ControllerBase
  {
    private readonly SheetContext _context = context;

        //GET nas fichas (api/sheets)
        [HttpGet]
    public async Task<ActionResult<IEnumerable<Sheet>>> GetSheets()
    {
      return await _context.Sheets.Include(i=>i.Skills).Include(i=>i.Inventories).ToListAsync();
    }

    //GET nas fichas por ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Sheet>> GetSheet(int id)
    {
      var sheet = await _context.Sheets.Include(i=>i.Skills).Include(i=>i.Inventories).FirstOrDefaultAsync(i=>i.ID==id);
      if (sheet == null)
      {
        return NotFound();
      }
      return sheet;
    }

    //Dar POST nas fichas
    [HttpPost]
    public async Task<ActionResult<Sheet>> PostSheet (Sheet sheet)
    {
      _context.Sheets.Add(sheet);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSheet", new { id = sheet.ID }, sheet);
    }

    //PUT nas fichas
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSheet(int id, Sheet sheet)
    {
      if (id != sheet.ID)
      {
        return BadRequest();
      }
      _context.Entry(sheet).State = EntityState.Modified;
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if(!SheetExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }
      return NoContent();
    }

    //DELETE nas fichas
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSheet(int id)
    {
      var sheet = await _context.Sheets.FindAsync(id);
      if(sheet == null)
      {
        return NotFound();
      }
      _context.Sheets.Remove(sheet);
      await _context.SaveChangesAsync();
      return NoContent();
    }

    private bool SheetExists(int id)
    {
      return _context.Sheets.Any(e => e.ID == id);
    }
  }
}