using Microsoft.EntityFrameworkCore;
using NoteKeeperApp.Api.Models;

namespace NoteKeeperApp.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Note> Notes => Set<Note>();
    }
}