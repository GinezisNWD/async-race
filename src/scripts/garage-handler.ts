import removeCar from './remove-car';
import selectCar from './select-car';

function garageHandler(event: Event): void {
  const target = event.target as HTMLElement;
  if (target) {
    if (target.closest('.garage__remove-btn')) {
      removeCar(target);
    }

    if (target.closest('.garage__select-btn')) {
      selectCar(target);
    }
  }
}

export default garageHandler;
