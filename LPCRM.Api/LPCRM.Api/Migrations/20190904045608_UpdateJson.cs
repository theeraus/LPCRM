using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LPCRM.Api.Migrations
{
    public partial class UpdateJson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContactType_ContactGroupType_ContactGroupTypeId",
                table: "ContactType");

            migrationBuilder.DropIndex(
                name: "IX_ContactType_ContactGroupTypeId",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "ContactGroupTypeId",
                table: "ContactType");

            migrationBuilder.AddColumn<string>(
                name: "ContactType",
                table: "ContactGroupType",
                type: "json",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContactType",
                table: "ContactGroupType");

            migrationBuilder.AddColumn<Guid>(
                name: "ContactGroupTypeId",
                table: "ContactType",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ContactType_ContactGroupTypeId",
                table: "ContactType",
                column: "ContactGroupTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ContactType_ContactGroupType_ContactGroupTypeId",
                table: "ContactType",
                column: "ContactGroupTypeId",
                principalTable: "ContactGroupType",
                principalColumn: "ContactGroupTypeId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
