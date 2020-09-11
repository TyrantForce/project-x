/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  nombre: string,
  descripcion?: string | null,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ProductStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type UpdateCategoryInput = {
  id: string,
  nombre?: string | null,
  descripcion?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  nombre: string,
  descripcion?: string | null,
  cantidad?: number | null,
  precio?: number | null,
  status?: ProductStatus | null,
  _version?: number | null,
  productCategoryId?: string | null,
};

export type ModelProductConditionInput = {
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  cantidad?: ModelIntInput | null,
  precio?: ModelFloatInput | null,
  status?: ModelProductStatusInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelProductStatusInput = {
  eq?: ProductStatus | null,
  ne?: ProductStatus | null,
};

export type UpdateProductInput = {
  id: string,
  nombre?: string | null,
  descripcion?: string | null,
  cantidad?: number | null,
  precio?: number | null,
  status?: ProductStatus | null,
  _version?: number | null,
  productCategoryId?: string | null,
};

export type DeleteProductInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateOrdenInput = {
  id?: string | null,
  cliente: string,
  _version?: number | null,
};

export type ModelOrdenConditionInput = {
  cliente?: ModelStringInput | null,
  and?: Array< ModelOrdenConditionInput | null > | null,
  or?: Array< ModelOrdenConditionInput | null > | null,
  not?: ModelOrdenConditionInput | null,
};

export type UpdateOrdenInput = {
  id: string,
  cliente?: string | null,
  _version?: number | null,
};

export type DeleteOrdenInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProductOrdenInput = {
  id?: string | null,
  cantidad?: number | null,
  precio?: number | null,
  status?: ProductStatus | null,
  _version?: number | null,
  productOrdenProductId: string,
  productOrdenOrdenId: string,
};

export type ModelProductOrdenConditionInput = {
  cantidad?: ModelIntInput | null,
  precio?: ModelFloatInput | null,
  status?: ModelProductStatusInput | null,
  and?: Array< ModelProductOrdenConditionInput | null > | null,
  or?: Array< ModelProductOrdenConditionInput | null > | null,
  not?: ModelProductOrdenConditionInput | null,
};

export type UpdateProductOrdenInput = {
  id: string,
  cantidad?: number | null,
  precio?: number | null,
  status?: ProductStatus | null,
  _version?: number | null,
  productOrdenProductId?: string | null,
  productOrdenOrdenId?: string | null,
};

export type DeleteProductOrdenInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  cantidad?: ModelIntInput | null,
  precio?: ModelFloatInput | null,
  status?: ModelProductStatusInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelOrdenFilterInput = {
  id?: ModelIDInput | null,
  cliente?: ModelStringInput | null,
  and?: Array< ModelOrdenFilterInput | null > | null,
  or?: Array< ModelOrdenFilterInput | null > | null,
  not?: ModelOrdenFilterInput | null,
};

export type ModelProductOrdenFilterInput = {
  id?: ModelIDInput | null,
  cantidad?: ModelIntInput | null,
  precio?: ModelFloatInput | null,
  status?: ModelProductStatusInput | null,
  and?: Array< ModelProductOrdenFilterInput | null > | null,
  or?: Array< ModelProductOrdenFilterInput | null > | null,
  not?: ModelProductOrdenFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrdenMutationVariables = {
  input: CreateOrdenInput,
  condition?: ModelOrdenConditionInput | null,
};

export type CreateOrdenMutation = {
  createOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrdenMutationVariables = {
  input: UpdateOrdenInput,
  condition?: ModelOrdenConditionInput | null,
};

export type UpdateOrdenMutation = {
  updateOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrdenMutationVariables = {
  input: DeleteOrdenInput,
  condition?: ModelOrdenConditionInput | null,
};

export type DeleteOrdenMutation = {
  deleteOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductOrdenMutationVariables = {
  input: CreateProductOrdenInput,
  condition?: ModelProductOrdenConditionInput | null,
};

export type CreateProductOrdenMutation = {
  createProductOrden:  {
    __typename: "ProductOrden",
    id: string,
    product:  {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    orden:  {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductOrdenMutationVariables = {
  input: UpdateProductOrdenInput,
  condition?: ModelProductOrdenConditionInput | null,
};

export type UpdateProductOrdenMutation = {
  updateProductOrden:  {
    __typename: "ProductOrden",
    id: string,
    product:  {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    orden:  {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductOrdenMutationVariables = {
  input: DeleteProductOrdenInput,
  condition?: ModelProductOrdenConditionInput | null,
};

export type DeleteProductOrdenMutation = {
  deleteProductOrden:  {
    __typename: "ProductOrden",
    id: string,
    product:  {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    orden:  {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncOrdensQueryVariables = {
  filter?: ModelOrdenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdensQuery = {
  syncOrdens:  {
    __typename: "ModelOrdenConnection",
    items:  Array< {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetOrdenQueryVariables = {
  id: string,
};

export type GetOrdenQuery = {
  getOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdensQueryVariables = {
  filter?: ModelOrdenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdensQuery = {
  listOrdens:  {
    __typename: "ModelOrdenConnection",
    items:  Array< {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncProductOrdensQueryVariables = {
  filter?: ModelProductOrdenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductOrdensQuery = {
  syncProductOrdens:  {
    __typename: "ModelProductOrdenConnection",
    items:  Array< {
      __typename: "ProductOrden",
      id: string,
      product:  {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      orden:  {
        __typename: "Orden",
        id: string,
        cliente: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    nombre: string,
    descripcion: string | null,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        nombre: string,
        descripcion: string | null,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct:  {
    __typename: "Product",
    id: string,
    nombre: string,
    descripcion: string | null,
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    category:  {
      __typename: "Category",
      id: string,
      nombre: string,
      descripcion: string | null,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Ordenes:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrdenSubscription = {
  onCreateOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrdenSubscription = {
  onUpdateOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrdenSubscription = {
  onDeleteOrden:  {
    __typename: "Orden",
    id: string,
    cliente: string,
    products:  {
      __typename: "ModelProductOrdenConnection",
      items:  Array< {
        __typename: "ProductOrden",
        id: string,
        cantidad: number | null,
        precio: number | null,
        status: ProductStatus | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductOrdenSubscription = {
  onCreateProductOrden:  {
    __typename: "ProductOrden",
    id: string,
    product:  {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    orden:  {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductOrdenSubscription = {
  onUpdateProductOrden:  {
    __typename: "ProductOrden",
    id: string,
    product:  {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    orden:  {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductOrdenSubscription = {
  onDeleteProductOrden:  {
    __typename: "ProductOrden",
    id: string,
    product:  {
      __typename: "Product",
      id: string,
      nombre: string,
      descripcion: string | null,
      cantidad: number | null,
      precio: number | null,
      status: ProductStatus | null,
      category:  {
        __typename: "Category",
        id: string,
        nombre: string,
        descripcion: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Ordenes:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    orden:  {
      __typename: "Orden",
      id: string,
      cliente: string,
      products:  {
        __typename: "ModelProductOrdenConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    cantidad: number | null,
    precio: number | null,
    status: ProductStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
