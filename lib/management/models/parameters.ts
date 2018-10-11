/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const enrich: msRest.OperationQueryParameter = {
  parameterPath: "enrich",
  mapper: {
    required: true,
    serializedName: "enrich",
    type: {
      name: "String"
    }
  }
};
export const namespaceName: msRest.OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    required: true,
    serializedName: "namespaceName",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const queuePath: msRest.OperationURLParameter = {
  parameterPath: "queuePath",
  mapper: {
    required: true,
    serializedName: "queuePath",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
