import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButton, TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly dialogs = inject(TuiDialogService);

  protected showDialog(): void {
    this.dialogs
        .open(
            '<div>This is a plain string dialog.</div>It supports basic <strong>HTML</strong>',
            {label: 'Heading', size: 's'},
        )
        .subscribe();
}
}
