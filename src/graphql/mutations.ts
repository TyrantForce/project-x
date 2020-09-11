/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createOrden = /* GraphQL */ `
  mutation CreateOrden(
    $input: CreateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    createOrden(input: $input, condition: $condition) {
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
export const updateOrden = /* GraphQL */ `
  mutation UpdateOrden(
    $input: UpdateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    updateOrden(input: $input, condition: $condition) {
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
export const deleteOrden = /* GraphQL */ `
  mutation DeleteOrden(
    $input: DeleteOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    deleteOrden(input: $input, condition: $condition) {
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
export const createProductOrden = /* GraphQL */ `
  mutation CreateProductOrden(
    $input: CreateProductOrdenInput!
    $condition: ModelProductOrdenConditionInput
  ) {
    createProductOrden(input: $input, condition: $condition) {
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
export const updateProductOrden = /* GraphQL */ `
  mutation UpdateProductOrden(
    $input: UpdateProductOrdenInput!
    $condition: ModelProductOrdenConditionInput
  ) {
    updateProductOrden(input: $input, condition: $condition) {
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
export const deleteProductOrden = /* GraphQL */ `
  mutation DeleteProductOrden(
    $input: DeleteProductOrdenInput!
    $condition: ModelProductOrdenConditionInput
  ) {
    deleteProductOrden(input: $input, condition: $condition) {
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
