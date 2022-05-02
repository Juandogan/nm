import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroRevista'
})
export class FiltroRevistaPipe implements PipeTransform {

  transform(value: any, args: boolean): any {
       const resultPosts = [];
    for(const post of value){
      if(post.revista === true  ){
         resultPosts.push(post);
      };
    };
    console.log(resultPosts)
    return resultPosts;
  }

  }

