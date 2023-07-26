import removeCar from './remove-car';

function garageHandler(event: Event): void {
  const target = event.target as HTMLElement;
  if (target) {
    if (target.closest('.garage__remove-btn')) {
      removeCar(target);
    }
  }
}

export default garageHandler;
