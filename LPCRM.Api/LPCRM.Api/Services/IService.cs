using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Services
{
    public interface IService<TEntity> where TEntity : class
    {
        string Add(TEntity value);
        string Update(TEntity value);
        bool Delete(TEntity value);
        TEntity Get(object id);
    }
}
