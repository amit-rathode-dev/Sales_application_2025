import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(message: string) {
    this.messageService.add({ key: 'br', severity: 'success', summary: 'Success', detail: message, life: 3000 });
  }

  showError(message: string) {
    this.messageService.add({ key: 'br', severity: 'error', summary: 'Error', detail: message, life: 3000 });
  }

  showInfo(message: string) {
    this.messageService.add({ key: 'br', severity: 'info', summary: 'Info', detail: message ,life: 3000});
  }

  showWarn(message: string) {
    this.messageService.add({ key: 'br', severity: 'warn', summary: 'Warning', detail: message,life: 3000 });
  }
}
