// Copyright (c) Consensys Software Inc. All rights reserved.
// Licensed under the MIT license.

import {QuorumProject} from "../TreeItems";
import {ItemCreator} from "./ItemCreator";

export class QuorumProjectItemCreator extends ItemCreator {
  protected getRequiredFields(): Array<{fieldName: string; type: string}> {
    const requiredFields = super.getRequiredFields();
    requiredFields.push(
      ...[
        {fieldName: "label", type: "string"},
        {fieldName: "port", type: "number"},
      ]
    );

    return requiredFields;
  }

  protected getAdditionalConstructorArguments(obj: {[key: string]: any}): any[] {
    return [obj.label, obj.port];
  }

  protected createFromObject(label: string, port: number): QuorumProject {
    return new QuorumProject(label, port);
  }
}
