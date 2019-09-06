using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace LPCRM.Api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactType",
                columns: table => new
                {
                    ContactTypeId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    ContactTypeName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactType", x => x.ContactTypeId);
                });

            migrationBuilder.CreateTable(
                name: "FundVehicle",
                columns: table => new
                {
                    FundVehicleId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    FundVehicleName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FundVehicle", x => x.FundVehicleId);
                });

            migrationBuilder.CreateTable(
                name: "InvestorContact",
                columns: table => new
                {
                    InvContactID = table.Column<Guid>(nullable: false),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(maxLength: 50, nullable: false),
                    LastName = table.Column<string>(maxLength: 50, nullable: false),
                    Title = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    FaxNumber = table.Column<string>(nullable: true),
                    ContactNote = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvestorContact", x => x.InvContactID);
                });

            migrationBuilder.CreateTable(
                name: "InvestorEntity",
                columns: table => new
                {
                    InvestorEntityId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    InvestorEntityName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvestorEntity", x => x.InvestorEntityId);
                });

            migrationBuilder.CreateTable(
                name: "ContactGroup",
                columns: table => new
                {
                    ContactGroupId = table.Column<Guid>(nullable: false),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    InvestorGroupName = table.Column<string>(maxLength: 50, nullable: false),
                    FundVehicleId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactGroup", x => x.ContactGroupId);
                    table.ForeignKey(
                        name: "FK_ContactGroup_FundVehicle_FundVehicleId",
                        column: x => x.FundVehicleId,
                        principalTable: "FundVehicle",
                        principalColumn: "FundVehicleId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "InvestorContactGroup",
                columns: table => new
                {
                    InvestorContactGroupId = table.Column<Guid>(nullable: false),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    ContactGroupId = table.Column<Guid>(nullable: false),
                    InvestorEntity = table.Column<string[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvestorContactGroup", x => x.InvestorContactGroupId);
                    table.ForeignKey(
                        name: "FK_InvestorContactGroup_ContactGroup_ContactGroupId",
                        column: x => x.ContactGroupId,
                        principalTable: "ContactGroup",
                        principalColumn: "ContactGroupId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ContactGroupType",
                columns: table => new
                {
                    ContactGroupTypeId = table.Column<Guid>(nullable: false),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    InvestorContactGroupId = table.Column<Guid>(nullable: false),
                    ContactType = table.Column<string[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactGroupType", x => x.ContactGroupTypeId);
                    table.ForeignKey(
                        name: "FK_ContactGroupType_InvestorContactGroup_InvestorContactGroupId",
                        column: x => x.InvestorContactGroupId,
                        principalTable: "InvestorContactGroup",
                        principalColumn: "InvestorContactGroupId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ContactList",
                columns: table => new
                {
                    ContactListId = table.Column<Guid>(nullable: false),
                    Sorting = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    ContactGroupTypeId = table.Column<Guid>(nullable: false),
                    InvContactID = table.Column<Guid>(nullable: false),
                    ContactValidFrom = table.Column<DateTime>(nullable: false),
                    ContactValidTo = table.Column<string>(nullable: true),
                    IsCurrentContact = table.Column<bool>(nullable: false),
                    IsAttachment = table.Column<bool>(nullable: false),
                    IsAdvisoryBoard = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactList", x => x.ContactListId);
                    table.ForeignKey(
                        name: "FK_ContactList_ContactGroupType_ContactGroupTypeId",
                        column: x => x.ContactGroupTypeId,
                        principalTable: "ContactGroupType",
                        principalColumn: "ContactGroupTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ContactList_InvestorContact_InvContactID",
                        column: x => x.InvContactID,
                        principalTable: "InvestorContact",
                        principalColumn: "InvContactID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactGroup_FundVehicleId",
                table: "ContactGroup",
                column: "FundVehicleId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactGroupType_InvestorContactGroupId",
                table: "ContactGroupType",
                column: "InvestorContactGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactList_ContactGroupTypeId",
                table: "ContactList",
                column: "ContactGroupTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactList_InvContactID",
                table: "ContactList",
                column: "InvContactID");

            migrationBuilder.CreateIndex(
                name: "IX_InvestorContactGroup_ContactGroupId",
                table: "InvestorContactGroup",
                column: "ContactGroupId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactList");

            migrationBuilder.DropTable(
                name: "ContactType");

            migrationBuilder.DropTable(
                name: "InvestorEntity");

            migrationBuilder.DropTable(
                name: "ContactGroupType");

            migrationBuilder.DropTable(
                name: "InvestorContact");

            migrationBuilder.DropTable(
                name: "InvestorContactGroup");

            migrationBuilder.DropTable(
                name: "ContactGroup");

            migrationBuilder.DropTable(
                name: "FundVehicle");
        }
    }
}
