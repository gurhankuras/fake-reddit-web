import { Pipe, PipeTransform } from '@angular/core';

  import TimeAgo from 'javascript-time-ago'

import locale  from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(locale);

const timeAgo = new TimeAgo('en-US')

@Pipe({
  name: 'timeago'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): any {
    return timeAgo.format(value);
    // return '';
  }

}
