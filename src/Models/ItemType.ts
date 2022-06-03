// Copyright (c) Consensys Software Inc. All rights reserved.
// Licensed under the MIT license.

export enum ItemType {
  NULLABLE = 0,
  // INFO = 1,                    // NOT USED
  COMMAND = 2,
  // AZURE_BLOCKCHAIN_SERVICE = 3,
  // LOCAL_NETWORK_GROUP = 4,     // NOT USED
  // ETHEREUM_TEST_GROUP = 5,     // NOT USED
  // ETHEREUM_MAIN_GROUP = 6,     // NOT USED
  // AZURE_BLOCKCHAIN_PROJECT = 7,
  // LOCAL_NETWORK = 8,           // NOT USED
  // ETHEREUM_TEST_NETWORK = 9,   // NOT USED
  // ETHEREUM_MAIN_NETWORK = 10,  // NOT USED
  MEMBER = 11,
  LOCAL_SERVICE = 30,
  LOCAL_PROJECT = 31,
  LOCAL_NETWORK_NODE = 32,
  INFURA_SERVICE = 40,
  INFURA_PROJECT = 41,
  INFURA_NETWORK_NODE = 42,
  INFURA_LAYER = 43,
}
