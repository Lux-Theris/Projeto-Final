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
    public class SheetController : ControllerBase
    {
        private readonly SheetContext _context;

        public SheetController(SheetContext context)
        {
            _context = context;
        }

        // GET nas fichas (api/sheets)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sheet>>> GetSheets()
        {
            return await _context.Sheets
                .Include(i => i.Skills)
                .Include(i => i.Inventories)
                .Include(i => i.Titles)
                .ToListAsync();
        }

        // GET nas fichas por ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Sheet>> GetSheet(int id)
        {
            var sheet = await _context.Sheets
                .Include(i => i.Skills)
                .Include(i => i.Inventories)
                .Include(i => i.Titles)
                .FirstOrDefaultAsync(i => i.ID == id);

            if (sheet == null)
            {
                return NotFound();
            }

            return sheet;
        }

        // POST nas fichas
        [HttpPost]
        public async Task<ActionResult<Sheet>> PostSheet(Sheet sheet)
        {
            foreach (var title in sheet.Titles)
            {
                var existingTitle = await _context.Titles.FindAsync(title.ID);
                if (existingTitle != null)
                {
                    _context.Entry(existingTitle).CurrentValues.SetValues(title);
                }
                else
                {
                    _context.Titles.Add(title);
                }
            }

            _context.Sheets.Add(sheet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSheet", new { id = sheet.ID }, sheet);
        }


        // PUT nas fichas
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSheet(int id, Sheet sheet)
        {
            if (id != sheet.ID)
            {
                return BadRequest();
            }

            var existingSheet = await _context.Sheets
                .Include(i => i.Skills)
                .Include(i => i.Inventories)
                .Include(i => i.Titles)
                .FirstOrDefaultAsync(i => i.ID == id);

            if (existingSheet == null)
            {
                return NotFound();
            }

            // Update Titles
            var existingTitles = existingSheet.Titles.ToList();
            _context.Titles.RemoveRange(existingTitles.Where(t => !sheet.Titles.Any(nt => nt.ID == t.ID)));
            foreach (var title in sheet.Titles)
            {
                var existingTitle = existingTitles.FirstOrDefault(t => t.ID == title.ID);
                if (existingTitle != null)
                {
                    _context.Entry(existingTitle).CurrentValues.SetValues(title);
                }
                else
                {
                    existingSheet.Titles.Add(title);
                }
            }

            // Update Skills
            var existingSkills = existingSheet.Skills.ToList();
            _context.Skills.RemoveRange(existingSkills.Where(s => !sheet.Skills.Any(ns => ns.ID == s.ID)));
            foreach (var skill in sheet.Skills)
            {
                var existingSkill = existingSkills.FirstOrDefault(s => s.ID == skill.ID);
                if (existingSkill != null)
                {
                    _context.Entry(existingSkill).CurrentValues.SetValues(skill);
                }
                else
                {
                    existingSheet.Skills.Add(skill);
                }
            }

            // Update Inventories
            var existingInventories = existingSheet.Inventories.ToList();
            _context.Inventories.RemoveRange(existingInventories.Where(i => !sheet.Inventories.Any(ni => ni.ID == i.ID)));
            foreach (var inventory in sheet.Inventories)
            {
                var existingInventory = existingInventories.FirstOrDefault(i => i.ID == inventory.ID);
                if (existingInventory != null)
                {
                    _context.Entry(existingInventory).CurrentValues.SetValues(inventory);
                }
                else
                {
                    existingSheet.Inventories.Add(inventory);
                }
            }

            _context.Entry(existingSheet).CurrentValues.SetValues(sheet);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SheetExists(id))
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


        // DELETE nas fichas
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSheet(int id)
        {
            var sheet = await _context.Sheets.FindAsync(id);

            if (sheet == null)
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
