import { Component } from '@angular/core';
import AchievementsService from 'src/app/services/achievements.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export default class AboutUsComponent {
  constructor(
    private achievementsDataService: AchievementsService,
  ) {}

  public achievementsData = this.achievementsDataService.getData();
}
