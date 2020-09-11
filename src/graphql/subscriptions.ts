/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      nombre
      descripcion
      products {
        items {
          id
          nombre
          descripcion
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      nombre
      descripcion
      products {
        items {
          id
          nombre
          descripcion
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      nombre
      descripcion
      products {
        items {
          id
          nombre
          descripcion
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      nombre
      descripcion
      cantidad
      precio
      status
      category {
        id
        nombre
        descripcion
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Ordenes {
        items {
          id
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      nombre
      descripcion
      cantidad
      precio
      status
      category {
        id
        nombre
        descripcion
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Ordenes {
        items {
          id
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      nombre
      descripcion
      cantidad
      precio
      status
      category {
        id
        nombre
        descripcion
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Ordenes {
        items {
          id
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrden = /* GraphQL */ `
  subscription OnCreateOrden {
    onCreateOrden {
      id
      cliente
      products {
        items {
          id
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrden = /* GraphQL */ `
  subscription OnUpdateOrden {
    onUpdateOrden {
      id
      cliente
      products {
        items {
          id
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrden = /* GraphQL */ `
  subscription OnDeleteOrden {
    onDeleteOrden {
      id
      cliente
      products {
        items {
          id
          cantidad
          precio
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProductOrden = /* GraphQL */ `
  subscription OnCreateProductOrden {
    onCreateProductOrden {
      id
      product {
        id
        nombre
        descripcion
        cantidad
        precio
        status
        category {
          id
          nombre
          descripcion
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Ordenes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orden {
        id
        cliente
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cantidad
      precio
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProductOrden = /* GraphQL */ `
  subscription OnUpdateProductOrden {
    onUpdateProductOrden {
      id
      product {
        id
        nombre
        descripcion
        cantidad
        precio
        status
        category {
          id
          nombre
          descripcion
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Ordenes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orden {
        id
        cliente
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cantidad
      precio
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProductOrden = /* GraphQL */ `
  subscription OnDeleteProductOrden {
    onDeleteProductOrden {
      id
      product {
        id
        nombre
        descripcion
        cantidad
        precio
        status
        category {
          id
          nombre
          descripcion
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Ordenes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orden {
        id
        cliente
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      cantidad
      precio
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
