using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace employeeWebApiServices.Controllers
{
    public class employeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (employeeDBEntities employee = new employeeDBEntities())
            {
                return employee.Employees.ToList();
            }
        }

        public Employee Get(string code)
        {
            using (employeeDBEntities employee = new employeeDBEntities())
            {
                return employee.Employees.FirstOrDefault(e=> e.code== code);
            }
        }
    }
}
