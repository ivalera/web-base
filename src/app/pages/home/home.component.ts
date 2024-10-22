import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  isOpenModal: boolean = false;

  onOpenModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
