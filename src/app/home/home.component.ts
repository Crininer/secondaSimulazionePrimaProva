import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards = [
    {
      image:
        'https://img.xcitefun.net/users/2013/07/327895,xcitefun-tatra-mountains-7.jpg',
      title: 'Un Titolo',
      description:
        'Etiam commodo at lectus eu iaculis. Donec faucibus sodales tellus. Phasellus eu tristique erat. Vivamus quis elit gravida, rutrum odio in, aliquet felis.',
    },
    {
      image:
        'https://news.cgtn.com/news/3567444e3051444f7749444e7755544d31676a4e31457a6333566d54/img/253f2f6e212248779c9fdcf2dd0092d1/253f2f6e212248779c9fdcf2dd0092d1.jpg',
      title: 'Un Altro Titolo',
      description:
        'Vivamus rhoncus nisi a magna consectetur iaculis. Aenean felis odio, consectetur eu lacinia in, ullamcorper nec dolor. Cras rhoncus orci a nisi hendrerit consequat. Etiam sodales sollicitudin ante in egestas. Proin aliquet nulla lectus. In efficitur id odio eu consequat. Curabitur sed augue non nulla fringilla tristique lacinia eget metus. Ut fermentum a nunc eget egestas.',
    },
    {
      image:
        'https://glenella.com/wp-content/uploads/2020/05/the-mountains-of-North-Georgia-min.jpg',
      title: 'Pure un Altro',
      description:
        'Phasellus at faucibus arcu. Nunc quis nisi pulvinar, suscipit nisi interdum, vestibulum elit. In hac habitasse platea dictumst. Nullam consectetur lacus nec leo feugiat consequat.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.cards.forEach((card) => {
      const descriptionMaxLength = 150;
      if (card.description.length > descriptionMaxLength)
        card.description =
          card.description.substring(0, descriptionMaxLength) + '...';
    });
  }
}
