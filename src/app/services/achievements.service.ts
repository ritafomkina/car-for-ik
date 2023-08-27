import { Injectable } from '@angular/core';
import { Achievements } from '../models/achivements.model';

@Injectable({
  providedIn: 'root',
})
export default class AchievementsService {
  private achievementsData: Array<Achievements> = [
    {
      quantity: '23',
      description: 'страны заказало наши штуки',
    },
    {
      quantity: '1289',
      description: 'довольных клиентов',
    },
    {
      quantity: '789',
      description: 'км/ч - средняя скорость с нашими штуками',
    },
    {
      quantity: '20',
      description: 'дней проходит от момента заказа до доставки',
    },
  ];

  public getData() {
    return this.achievementsData;
  }
}
