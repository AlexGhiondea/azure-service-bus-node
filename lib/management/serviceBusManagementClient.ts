/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ServiceBusManagementClientContext } from "./serviceBusManagementClientContext";


class ServiceBusManagementClient extends ServiceBusManagementClientContext {
  // Operation groups
  queue: operations.Queue;

  /**
   * Initializes a new instance of the ServiceBusManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, options);
    this.queue = new operations.Queue(this);
  }
}

// Operation Specifications

export {
  ServiceBusManagementClient,
  ServiceBusManagementClientContext,
  Models as ServiceBusManagementModels,
  Mappers as ServiceBusManagementMappers
};
export * from "./operations";
