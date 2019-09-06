using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LPCRM.Api.Migrations
{
    public partial class UpdateJsonColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContactGroup_FundVehicle_FundVehicleId",
                table: "ContactGroup");

            migrationBuilder.AlterColumn<string>(
                name: "InvestorEntity",
                table: "InvestorContactGroup",
                type: "jsonb",
                nullable: true,
                oldClrType: typeof(string[]),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ContactType",
                table: "ContactGroupType",
                type: "jsonb",
                nullable: true,
                oldClrType: typeof(string[]),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ContactGroup_FundVehicle_FundVehicleId",
                table: "ContactGroup",
                column: "FundVehicleId",
                principalTable: "FundVehicle",
                principalColumn: "FundVehicleId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ContactGroup_FundVehicle_FundVehicleId",
                table: "ContactGroup");

            migrationBuilder.AlterColumn<string[]>(
                name: "InvestorEntity",
                table: "InvestorContactGroup",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "jsonb",
                oldNullable: true);

            migrationBuilder.AlterColumn<string[]>(
                name: "ContactType",
                table: "ContactGroupType",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "jsonb",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ContactGroup_FundVehicle_FundVehicleId",
                table: "ContactGroup",
                column: "FundVehicleId",
                principalTable: "FundVehicle",
                principalColumn: "FundVehicleId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
