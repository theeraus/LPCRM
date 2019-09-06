using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LPCRM.Api.Migrations
{
    public partial class UpdateTableColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "Remarks",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "Sorting",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "UpdatedDate",
                table: "InvestorEntity");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "Remarks",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "Sorting",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "UpdatedDate",
                table: "FundVehicle");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "Remarks",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "Sorting",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "ContactType");

            migrationBuilder.DropColumn(
                name: "UpdatedDate",
                table: "ContactType");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "CreatedBy",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Remarks",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Sorting",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedDate",
                table: "InvestorEntity",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Remarks",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Sorting",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedDate",
                table: "FundVehicle",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Remarks",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Sorting",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedDate",
                table: "ContactType",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactType",
                table: "ContactGroupType",
                type: "json",
                nullable: true);
        }
    }
}
