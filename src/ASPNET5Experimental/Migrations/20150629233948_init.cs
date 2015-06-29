using System.Collections.Generic;
using Microsoft.Data.Entity.Relational.Migrations;
using Microsoft.Data.Entity.Relational.Migrations.Builders;
using Microsoft.Data.Entity.Relational.Migrations.Operations;

namespace ASPNET5Experimental.Migrations
{
    public partial class init : Migration
    {
        public override void Up(MigrationBuilder migration)
        {
            migration.CreateTable(
                name: "Course",
                columns: table => new
                {
                    Author = table.Column(type: "nvarchar(max)", nullable: true),
                    CourseID = table.Column(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGeneration", "Identity"),
                    Duration = table.Column(type: "int", nullable: false),
                    Title = table.Column(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.CourseID);
                });
            migration.CreateTable(
                name: "CourseTracker",
                columns: table => new
                {
                    ApplicationUserId = table.Column(type: "nvarchar(450)", nullable: true),
                    CourseID = table.Column(type: "int", nullable: false),
                    CourseTrackerID = table.Column(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGeneration", "Identity"),
                    IsCompleted = table.Column(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseTracker", x => x.CourseTrackerID);
                    table.ForeignKey(
                        name: "FK_CourseTracker_AspNetUsers_ApplicationUserId",
                        columns: x => x.ApplicationUserId,
                        referencedTable: "AspNetUsers",
                        referencedColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseTracker_Course_CourseID",
                        columns: x => x.CourseID,
                        referencedTable: "Course",
                        referencedColumn: "CourseID");
                });
        }
        
        public override void Down(MigrationBuilder migration)
        {
            migration.DropTable("Course");
            migration.DropTable("CourseTracker");
        }
    }
}
