/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";

const packageName = "@azure/arm-servicebus";
const packageVersion = "1.0.0";

export class ServiceBusManagementClientContext extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  /**
   * Initializes a new instance of the ServiceBusManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    super(credentials, options);

    this.apiVersion = '2017-04';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = 'https://{namespaceName}.servicebus.windows.net';
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
