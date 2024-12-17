import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { NamedInputComponent } from "../../../shared/named-input/named-input.component";
import { FormsModule } from '@angular/forms';
import { NewTicket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, NamedInputComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  newTicket = output<NewTicket>()

  constructor() {
    afterRender(() => {
      console.log("After RENDERED");
    });
    afterNextRender(() => {
      console.log("AFTER NEXT RENDERED");
    });
  }

  ngOnInit(): void {
      console.log("ON INIT");
      console.log(this.form().nativeElement);
  }

  onSubmit(titleInput: string, requestInput: string) {
    console.log("SUBMITTED - " + titleInput + " and " + requestInput);
    // this.form?.nativeElement.reset();
    this.newTicket.emit({ title: titleInput, request: requestInput });
    this.form()?.nativeElement.reset();

  }

  ngAfterViewInit(): void {
      console.log("AFTER VIEW INIT");
      console.log(this.form().nativeElement)
  }
}
