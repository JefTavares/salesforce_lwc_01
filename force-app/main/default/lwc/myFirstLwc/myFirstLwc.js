/* eslint-disable no-alert */
import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class MyFirstLwc extends LightningElement {
  myTitle = "Hello World";

  //Função de callBack, é invocada quando tem altração no DOM https://salesforcediaries.com/2019/12/13/connectedcallback-in-lightning-web-component/
  connectedCallback() {
    if (this.myTitle) {
      //variaveis let existe apenas no escopo do metodo, if, e tals
      //let name = "Jeferson Tavares";
      //window.alert("name by let:" + name);
    }

    let callmyFunction = myFunction(10, 2);
    window.alert(callmyFunction);
  }

  handleClick() {
    //window.alert("Hello Salesforce");
    this.showToast(this.myTitle);
  }

  showToast(firstFunctionArgument) {
    const event = new ShowToastEvent({
      title: firstFunctionArgument,
      message: "Want to display toast event",
      variant: "success" // ou informar error
    });

    this.dispatchEvent(event);
  }

  myFunction(dividend, divisor) {
    return dividend / divisor;
  }
}
