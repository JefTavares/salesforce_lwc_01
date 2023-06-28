import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  /** Public reactive properties */
  @api itemName = "Salesforce Jeferson";

  @api handleChangeValue() {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.itemName = "Salesforce LWC demo";
  }
}
