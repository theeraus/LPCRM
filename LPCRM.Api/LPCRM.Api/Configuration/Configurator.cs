using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Configuration
{
    public class Configurator
    {
        public static void Initialize(IConfiguration configuration, string env)
        {
            GetLocalAppConfiguration(configuration, env);
        }

        #region Web.config private field
        private static CultureInfo _cultureDefault;

        private static string _googleMapUrl;
        private static string _uploadImagePath;
        private static string _urlImagePath;
        private static string _googleKey;
        private static string _mailHost;
        private static string _mailUser;
        private static string _mailPass;
        private static string _mailPort;
        private static string _mailSSL;
        private static string _apiUrl;
        private static string _version;
        private static string _sqlConnection;
        private static string _appname;
        private static string _appupdate;
        private static string _appSetting;
        private static string _environmentName;

        #endregion Web.config private field

        #region Web.config public filed

        public static string AppSetting
        {
            get { return _appSetting; }
        }

        public static string EnvironmentName
        {
            get { return _environmentName; }
        }

        public static CultureInfo CultureDefault
        {
            get { return _cultureDefault; }
        }

        public static string SqlConnection
        {
            get { return _sqlConnection; }
        }
        public static string Version
        {
            get { return _version; }
        }
        public static string GoogleKey
        {
            get { return _googleKey; }
        }
        public static string MailHost
        {
            get { return _mailHost; }
        }
        public static string MailUser
        {
            get { return _mailUser; }
        }
        public static string MailPass
        {
            get { return _mailPass; }
        }
        public static string MailPort
        {
            get { return _mailPort; }
        }
        public static string MailSSL
        {
            get { return _mailSSL; }
        }
        public static string ApiUrl
        {
            get { return _apiUrl; }
        }
        public static string UrlImagePath
        {
            get { return _urlImagePath; }
        }
        public static string UploadImagePath
        {
            get { return _uploadImagePath; }
        }
        public static string GoogleMapUrl
        {
            get { return _googleMapUrl; }
        }
        public static string AppName
        {
            get { return _appname; }
        }
        public static string AppUpdate
        {
            get { return _appupdate; }
        }
        #endregion Web.config public field

        private static void GetLocalAppConfiguration(IConfiguration configuration, string env)
        {
            _apiUrl = configuration.GetSection("ServiceClients:ApiUrl").Value;
            _googleMapUrl = configuration.GetSection("ServiceClients:GoogleMapUrl").Value;
            _uploadImagePath = configuration.GetSection("ServiceClients:UploadImagePath").Value;
            _urlImagePath = configuration.GetSection("ServiceClients:UrlImagePath").Value;
            _googleKey = configuration.GetSection("ServiceClients:GoogleKey").Value;
            _mailHost = configuration.GetSection("ServiceClients:MailHost").Value;
            _mailUser = configuration.GetSection("ServiceClients:MailUser").Value;
            _mailPass = configuration.GetSection("ServiceClients:MailPass").Value;
            _mailPort = configuration.GetSection("ServiceClients:MailPort").Value;
            _mailSSL = configuration.GetSection("ServiceClients:MailSSL").Value;
            _version = configuration.GetSection("ServiceClients:version").Value;
            _appname = configuration.GetSection("ServiceClients:appname").Value;
            _appupdate = configuration.GetSection("ServiceClients:appupdate").Value;
            _sqlConnection = configuration.GetSection("ConnectionStrings:db_connect").Value;
            _appSetting = configuration.GetSection("AppSettings:Secret").Value;
            _environmentName = env;
            CultureInfo USCultureInfo = new CultureInfo("en-US");
            _cultureDefault = USCultureInfo;
        }
    }
}
