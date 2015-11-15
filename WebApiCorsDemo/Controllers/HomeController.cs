using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiCorsDemo.Models;
using Newtonsoft.Json;
using System.Text;

// nuget packages
// Install-Package Newtonsoft.Json
// Install-Package Microsoft.AspNet.WebApi.Cors 
namespace WebApiCorsDemo.Controllers
{
    public class HomeController : ApiController
    {
		[HttpGet]
		public HttpResponseMessage MyMessage()
		{
			var result = new MessageResults
			{
				Message = "It worked!"
			};

			var jsonData = JsonConvert.SerializeObject(result);
			var resp = new HttpResponseMessage(HttpStatusCode.OK);
			resp.Content = new StringContent(jsonData, Encoding.UTF8, "application/json");
			return resp;
		}

		[HttpGet]
		public HttpResponseMessage MyMessageTest()
		{
			string result = "This is the second controller";

			var jsonData = JsonConvert.SerializeObject(result);
			var resp = new HttpResponseMessage(HttpStatusCode.OK);
			resp.Content = new StringContent(jsonData, Encoding.UTF8, "application/json");
			return resp;
		}
    }
}
