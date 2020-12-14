import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IAddress } from "../address";
import { AddressService } from "../address.service";
import { nanoid } from "nanoid";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "rtg-address-input",
  templateUrl: "address.input.component.html"
})
export class AddressInputComponent implements OnInit, OnDestroy {
  form: FormGroup;
  @Input() formId?: string;
  @Output() formIdEvent: EventEmitter<string> = new EventEmitter<string>();
  private _saveSubscription$: Subscription;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this._saveSubscription$.unsubscribe();
  }

  initForm() {
    if (this.formId) {
      const existingForm: IAddress = this.addressService.getAddress(
        this.formId
      );
      this.form = this.fb.group({
        id: [existingForm.id, Validators.required],
        name: [existingForm.name, Validators.required],
        lineOne: [existingForm.lineOne, Validators.required],
        lineTwo: [existingForm.lineTwo],
        city: [existingForm.city, Validators.required],
        postcode: [existingForm.postcode, Validators.required],
        country: [existingForm.country, Validators.required]
      });
      return;
    }
    this.form = this.fb.group({
      id: [nanoid(), Validators.required],
      name: ["", Validators.required],
      lineOne: ["", Validators.required],
      lineTwo: [""],
      city: ["", Validators.required],
      postcode: ["", Validators.required],
      country: ["", Validators.required]
    });
  }

  saveForm() {
    this._saveSubscription$ = this.addressService
      .saveAddress(this.form.value)
      .filter(x => x)
      .subscribe(_ => this.formIdEvent.next(this.form.get("id").value));
  }
}
