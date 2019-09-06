using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Configuration
{
    public class Constant
    {
        public class Format
        {
            public const string DateFormat = "dd/MM/yyyy HH:mm:ss";
            public const string DateOnlyFormat = "dd/MM/yyyy";
            public const string TimeOnlyFormat = "HH:mm";
            public const string DateMonthFormat = "dd MMM yyyy";
            public const string ApiDateFormat = "yyyy-MM-dd HH:mm:ss";
        }

        public class MimeType
        {
            public const string PDF = "application/pdf";
            public const string JPEG = "image/jpeg";
            public const string PNG = "image/png";
            public const string MSWORD = "application/msword";
            public const string MSEXCEL = "application/excel";
        }

        public class FileExtension
        {
            public const string Jpg = ".jpg";
            public const string Jpeg = ".jpeg";
            public const string Png = ".png";
            public const string Bmp = ".bmp";
            public const string Pdf = ".pdf";
            public const string Xls = ".xls";
            public const string Xlsx = ".xlsx";
            public const string Doc = ".doc";
            public const string Docx = ".docx";
        }
        public class ErrorCodeSystem
        {
            public const string Success = "200";
            public const string DuplicateData = "400";
            public const string Unauthorized = "401";
            public const string ExistingData = "403";
            public const string RequiredData = "405";
            public const string InvalidData = "406";
            public const string ForceUpdate = "409";
            public const string SystemError = "500";
            public const string ThirdPartyError = "501";
            public const string TokenTimeOut = "412";
            public const string DuplicateEmail = "413";
            public const string DuplicateUsername = "413";
            public const string EmailNotFound = "414";
            public const string CurrentPasswordInvalid = "417";
        }

        public class ErrorMessage
        {
            public const string SystemError = "System Error. Please contact system admin.";
            public const string DuplicateData = "Duplicate request. Please review the information then try again.";
            public const string ExistingData = "Data not found. Please verify then try again.";
            public const string InvalidData = "Invalid data. Please verify then try again.";
            public const string Unauthorized = "You don't have authorized. Please contact the support team to request the permission.";
            public const string RequiredData = "Please complete all required field.";
            public const string WorkflowInvalid = "Invalid workflow. Please verify then try again.";
            public const string ForceUpdate = "Please update the application.";
            public const string UnauthorizedData = "(Task not found. Please contact the support team.";
            public const string noApprove = "This task waiting for approve the information.";
            public const string TokenTimeOut = "Token Timeout";
            public const string DuplicateEmail = "The email address you entered is already in use on another account. Please contact the support team.";
            public const string DuplicateUsername = "The username you entered is already in use on another account.";
            public const string EmailNotFound = "Email not found. Please verify then try again.";
            public const string DataNoNotFound = "Data not found. Please contact the support team.";
            public const string CurrentPasswordInvalid = "Password mismatch. Please verify then try again.";
            public const string ThirdPartyError = "Cannot connect to the insurance. Please contact the support team then try again.";
            public const string DuplicatePhoneNumber = "Duplicate Phone Number. Please review the information then try again.";
            public const string CurrentBalance = "Your balance is not enough.";
        }
    }
}
