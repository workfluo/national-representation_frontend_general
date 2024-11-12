import { Component, Input } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [
    IonButton
  ],
  standalone: true,
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
